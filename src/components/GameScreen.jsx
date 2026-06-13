import { useState, useEffect, useCallback } from 'react'
import { getRandomPhrase, getRandomPhraseExcluding } from '../data/phrases.js'
import { useSpeechRecognition } from '../hooks/useSpeechRecognition.js'
import { LANGUAGE_CONFIG, textSimilarity, getScoreResult } from '../utils/scoring.js'
import StressPhrase from './StressPhrase.jsx'
import { speakResult, speakFemaleSpanish } from '../utils/speech.js'
import { translateJpToEsEn } from '../utils/translate.js'

const LANGS = ['ja', 'en', 'es']

const isSpeechSupported = !!(window.SpeechRecognition || window.webkitSpeechRecognition)

export default function GameScreen() {
  const [phrase, setPhrase] = useState(getRandomPhrase)
  const [selectedLang, setSelectedLang] = useState('es')
  const [result, setResult] = useState(null)
  const [backTrans, setBackTrans] = useState('')
  const [totalGuarani, setTotalGuarani] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [scoreKey, setScoreKey] = useState(0)
  const [jpTranslations, setJpTranslations] = useState(null)
  const [isTranslating, setIsTranslating] = useState(false)
  const [jaStreak, setJaStreak] = useState(0)
  const [senorita, setSenorita] = useState(null)

  const { transcript, isListening, error, startListening, stopListening, reset } = useSpeechRecognition()

  const handleLangSelect = useCallback((lang) => {
    setSelectedLang(lang)
    setShowResult(false)
    setResult(null)
    setBackTrans('')
    setJpTranslations(null)
    setSenorita(null)
    reset()
  }, [reset])

  const handleRecord = useCallback(() => {
    if (!selectedLang) return
    const lang = selectedLang === 'ja' ? 'ja-JP' : LANGUAGE_CONFIG[selectedLang].speechLang
    startListening(lang)
  }, [selectedLang, startListening])

  const handleNext = useCallback(() => {
    setPhrase(prev => getRandomPhraseExcluding(prev.id))
    setSelectedLang(prev => prev || 'es') // null になっても ES に戻す（フリーモード含め維持）
    setShowResult(false)
    setResult(null)
    setBackTrans('')
    setJpTranslations(null)
    setSenorita(null)
    reset()
  }, [reset])

  useEffect(() => {
    if (!transcript || isListening) return

    // ── 日本語フリー発言モード ──
    if (selectedLang === 'ja') {
      setShowResult(true)
      setScoreKey(k => k + 1)
      setIsTranslating(true)
      setJpTranslations(null)

      // 日本語連続カウント。3回連続で女性に声をかけられる
      setJaStreak(prev => {
        const next = prev + 1
        if (next >= 3) {
          const lines = [
            { es: '¡Oye, guapo! ¿No quieres hablar español conmigo?', ja: '「ねえ、イケメンさん。私とスペイン語で話さない？」' },
            { es: 'Hola... ¿Por qué hablas tanto japonés? Mírame a mí.', ja: '「ねえ…なんでそんなに日本語ばっかり？こっち見て。」' },
            { es: '¿Estás perdido? Ven, te enseño español de verdad.', ja: '「迷っちゃった？おいで、本物のスペイン語を教えてあげる。」' },
          ]
          const pick = lines[(next - 3) % lines.length]
          setSenorita(pick)
          speakFemaleSpanish(pick.es)
          return 0 // リセットして再カウント
        }
        setSenorita(null)
        return next
      })

      translateJpToEsEn(transcript).then(({ es, en }) => {
        setJpTranslations({ es, en })
        setIsTranslating(false)
        if (es) speakResult(es, en || '')
      })
      return
    }

    // 日本語以外で挑戦したら連続カウントはリセット
    setJaStreak(0)
    setSenorita(null)

    // ── 通常スコアリングモード ──
    const targetText = selectedLang === 'en' ? phrase.en : phrase.es
    const sim = textSimilarity(transcript, targetText)
    const scored = getScoreResult(sim, selectedLang)

    setResult({ ...scored, transcript })
    setTotalGuarani(prev => prev + scored.guarani)
    setShowResult(true)
    setScoreKey(k => k + 1)
    setBackTrans(phrase.ja)
    speakResult(phrase.es, phrase.en)
  }, [transcript, isListening])

  return (
    <div className="game-screen">
      <header className="header">
        <h1 className="title">BAD RYMAN</h1>
        <div className="guarani-display">₲ {totalGuarani.toLocaleString()}</div>
      </header>

      <div className="character-area">
        <img
          src={
            selectedLang === 'ja' ? '/bad-ryman/char-default.png'
            : !result ? '/bad-ryman/char-default.png'
            : result.guarani === 0 ? '/bad-ryman/char-lose.png'
            : result.guarani >= 30 ? '/bad-ryman/char-win.png'
            : '/bad-ryman/char-default.png'
          }
          alt="バッドリーマン"
          className="character-img"
        />
        <div className="char-sub">バッドリーマン</div>
      </div>

      {!isSpeechSupported && (
        <div className="support-warning">
          ⚠️ 音声認識はAndroid版Chrome推奨です。<br />
          iOSの場合はSafariで動作が制限されることがあります。
        </div>
      )}

      {/* ── フレーズカード ── */}
      {selectedLang === 'ja' ? (
        <div className="phrase-card phrase-card-free">
          <div className="phrase-hint">フリー発言モード</div>
          <div className="phrase-ja-free">何でも日本語でつぶやいてください</div>
          <div className="phrase-hint" style={{ marginTop: 8 }}>話した内容をスペイン語＋英語に翻訳します</div>
          <div className="phrase-ja" style={{ marginTop: 12, fontSize: 16, color: 'var(--text-muted)' }}>参考: {phrase.ja}</div>
        </div>
      ) : (
        <div className="phrase-card">
          <div className="phrase-hint">今、何て言いたい？</div>
          <div className="phrase-ja">{phrase.ja}</div>
          <div className="phrase-es"><StressPhrase accent={phrase.accent} /></div>
          <div className="phrase-kana">{phrase.kana}</div>
        </div>
      )}

      <div className="lang-section">
        <div className="section-label">何語で挑戦？</div>
        <div className="lang-buttons">
          {LANGS.map(lang => {
            const cfg = LANGUAGE_CONFIG[lang]
            const isSelected = selectedLang === lang
            return (
              <button
                key={lang}
                className={`lang-btn lang-${lang}${isSelected ? ' selected' : ''}`}
                onClick={() => handleLangSelect(lang)}
              >
                <span className="flag">{cfg.flag}</span>
                <span className="lang-name-text">{lang === 'ja' ? 'フリー' : cfg.label}</span>
                <span className="pts">
                  {lang === 'ja' ? '自由' : `${cfg.basePoints}pt`}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {selectedLang && !showResult && (
        <div className="record-section">
          <button
            className={`record-btn${isListening ? ' listening' : ''}`}
            onClick={isListening ? stopListening : handleRecord}
          >
            {isListening ? '⏹　停止' : '🎤　録音スタート'}
          </button>
          {isListening && (
            <p className="listening-text">
              {selectedLang === 'ja' ? '🔴 日本語で話してください...' : '🔴 聞いています...'}
            </p>
          )}
          {error && <p className="error-text">{error}</p>}
        </div>
      )}

      {/* ── 日本語フリーモード 結果 ── */}
      {selectedLang === 'ja' && showResult && (
        <div className="result-section" key={scoreKey}>
          <div className="score-display" style={{ color: '#aaaacc', fontSize: 28 }}>
            フリー発言モード 🗣
          </div>

          {senorita && (
            <div className="senorita-card">
              <div className="senorita-head">💃 セニョリータが声をかけてきた…！</div>
              <img src="/bad-ryman/senorita.png" alt="セニョリータ" className="senorita-img" />
              <div className="senorita-es">{senorita.es}</div>
              <div className="senorita-ja">{senorita.ja}</div>
            </div>
          )}

          <div className="result-card">
            <div className="result-row">
              <span className="result-row-label">あなたが言ったこと</span>
              <span className="result-row-value">「{transcript}」</span>
            </div>

            {isTranslating ? (
              <div className="result-row">
                <span className="result-row-label">翻訳中...</span>
                <span className="result-row-value" style={{ color: 'var(--text-muted)' }}>⏳</span>
              </div>
            ) : jpTranslations && (
              <>
                <div className="result-row">
                  <span className="result-row-label">🇪🇸 スペイン語</span>
                  <span className="result-row-value correct">{jpTranslations.es}</span>
                </div>
                <div className="result-row">
                  <span className="result-row-label">🇺🇸 英語</span>
                  <span className="result-row-value en">{jpTranslations.en}</span>
                </div>
              </>
            )}
          </div>

          <div className="guarani-earned" style={{ color: '#555', fontSize: 20 }}>
            ₲ +0（日本語モードは0pt）
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <button className="next-btn" style={{ flex: 1 }} onClick={() => {
              setShowResult(false)
              setJpTranslations(null)
              reset()
            }}>
              もう一度話す 🎤
            </button>
            <button className="next-btn" style={{ flex: 1 }} onClick={handleNext}>
              次のフレーズ →
            </button>
          </div>
        </div>
      )}

      {/* ── 通常スコアリング 結果 ── */}
      {selectedLang !== 'ja' && showResult && result && (
        <div className="result-section" key={scoreKey}>
          <div className="score-display" style={{ color: result.color }}>
            {result.label}
          </div>

          <div className="result-card">
            <div className="result-row">
              <span className="result-row-label">あなたが言ったこと</span>
              <span className="result-row-value">「{result.transcript}」</span>
            </div>
            <div className="result-row">
              <span className="result-row-label">正解フレーズ</span>
              <span className="result-row-value correct">
                {selectedLang === 'en' ? phrase.en : phrase.es}
              </span>
            </div>
            {selectedLang === 'es' && (
              <div className="result-row">
                <span className="result-row-label">英語で言うと</span>
                <span className="result-row-value en">{phrase.en}</span>
              </div>
            )}
          </div>

          <div className="back-trans-card">
            <div className="bt-header">🔄 日本語の意味</div>
            <div className="bt-result">{backTrans}</div>
          </div>

          <div className="guarani-earned">+ ₲ {result.guarani.toLocaleString()}</div>

          <button className="next-btn" onClick={handleNext}>
            次のフレーズ →
          </button>
        </div>
      )}
    </div>
  )
}
