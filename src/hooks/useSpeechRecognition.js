import { useState, useCallback, useRef } from 'react'

export function useSpeechRecognition() {
  const [transcript, setTranscript] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [error, setError] = useState(null)
  const ref = useRef(null)
  const finalRef = useRef('')
  const interimRef = useRef('')

  const startListening = useCallback((lang = 'es-419') => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) {
      setError('このブラウザは音声認識に対応していません。Android版Chromeをお使いください。')
      return
    }

    // 前回の認識が残っていたら止める（iOS Safari対策：二重startの失敗を防ぐ）
    if (ref.current) {
      try { ref.current.abort() } catch { /* noop */ }
      ref.current = null
    }

    const recognition = new SR()
    recognition.lang = lang
    recognition.continuous = false
    // iOS Safari は interimResults=false だと最終結果を返さず終わることが多い。
    // 途中結果を有効にして、終了時に確定させる。
    recognition.interimResults = true
    recognition.maxAlternatives = 1

    finalRef.current = ''
    interimRef.current = ''

    recognition.onstart = () => {
      setIsListening(true)
      setTranscript('')
      setError(null)
    }

    recognition.onresult = (e) => {
      let interim = ''
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript
        if (e.results[i].isFinal) finalRef.current += t
        else interim += t
      }
      interimRef.current = interim
      const combined = (finalRef.current + interim).trim()
      if (combined) setTranscript(combined)
    }

    recognition.onerror = (e) => {
      if (e.error === 'no-speech') {
        setError('音声が検出されませんでした。録音ボタンを押したらすぐ、少し大きめの声で話してみてください。')
      } else if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
        setError('マイクの使用が許可されていません。ブラウザ設定を確認してください。')
      } else if (e.error === 'aborted') {
        // 手動停止・録り直しなど。エラーは表示しない
      } else {
        setError(`エラー: ${e.error}`)
      }
      setIsListening(false)
    }

    recognition.onend = () => {
      // iOS Safari は最終結果(isFinal)を出さずに終わることがある。
      // その場合は途中結果(interim)を結果として確定させる。
      const result = (finalRef.current || interimRef.current).trim()
      if (result) setTranscript(result)
      setIsListening(false)
    }

    ref.current = recognition
    try {
      recognition.start()
    } catch {
      setError('もう一度、録音ボタンを押してください。')
      setIsListening(false)
    }
  }, [])

  const stopListening = useCallback(() => {
    try { ref.current?.stop() } catch { /* noop */ }
    setIsListening(false)
  }, [])

  const reset = useCallback(() => {
    setTranscript('')
    setError(null)
  }, [])

  return { transcript, isListening, error, startListening, stopListening, reset }
}
