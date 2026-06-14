function makeUtterance(text, lang, rate = 0.82) {
  const u = new SpeechSynthesisUtterance(text)
  u.lang = lang
  u.rate = rate
  return u
}

export function speakResult(esText, enText) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()

  // スペイン語：1回目ゆっくり → 2回目ふつう → 英語：ふつう の順に再生
  // iOSではタップから時間が空くとブロックされるため、待ち時間は最小限に。
  window.speechSynthesis.speak(makeUtterance(esText, 'es-419', 0.5))  // 1回目：ゆっくり
  window.speechSynthesis.speak(makeUtterance(esText, 'es-419', 0.8))  // 2回目：ふつう
  if (enText) window.speechSynthesis.speak(makeUtterance(enText, 'en-US', 0.82))  // 英語：ふつう
}

// タップで1フレーズだけ発音（iOS確実再生用：ユーザー操作から直接呼ぶ）
export function speakOne(text, lang, rate = 0.78) {
  if (!window.speechSynthesis || !text) return
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(makeUtterance(text, lang, rate))
}

// iOSの音声ロック解除：ユーザー操作（録音ボタン等）の中で一度呼ぶと、
// 以降の自動再生が鳴りやすくなる。無音の空発話で「触った」状態を作る。
export function unlockAudio() {
  if (!window.speechSynthesis) return
  try {
    const u = new SpeechSynthesisUtterance(' ')
    u.volume = 0
    window.speechSynthesis.speak(u)
    window.speechSynthesis.resume()
  } catch { /* noop */ }
}

// 女性のスペイン語ボイスを探す（名前ヒントで推定）
function pickFemaleSpanishVoice() {
  if (!window.speechSynthesis) return null
  const voices = window.speechSynthesis.getVoices()
  const esVoices = voices.filter(v => /^es/i.test(v.lang))
  if (esVoices.length === 0) return null
  const femaleHints = /female|mujer|paulina|monica|mónica|sabina|helena|laura|lucia|lucía|conchita|esperanza|marisol/i
  return esVoices.find(v => femaleHints.test(v.name)) || esVoices[0]
}

// 日本語3回連続のときに女性がスペイン語で声をかけてくる
export function speakFemaleSpanish(text) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()

  const speak = () => {
    const u = new SpeechSynthesisUtterance(text)
    const voice = pickFemaleSpanishVoice()
    if (voice) u.voice = voice
    u.lang = voice ? voice.lang : 'es-ES'
    u.rate = 0.95
    u.pitch = 1.4 // 女性っぽく高めに
    window.speechSynthesis.speak(u)
  }

  // 声の一覧がまだ読み込まれていない場合に備える
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null
      setTimeout(speak, 300)
    }
  } else {
    setTimeout(speak, 300)
  }
}
