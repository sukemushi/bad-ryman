function makeUtterance(text, lang, rate = 0.82) {
  const u = new SpeechSynthesisUtterance(text)
  u.lang = lang
  u.rate = rate
  return u
}

export function speakResult(esText, enText) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()

  // スペイン語 × 2 → 英語 × 1 の順に再生
  setTimeout(() => {
    window.speechSynthesis.speak(makeUtterance(esText, 'es-419', 0.80))
    window.speechSynthesis.speak(makeUtterance(esText, 'es-419', 0.85))
    window.speechSynthesis.speak(makeUtterance(enText, 'en-US', 0.90))
  }, 600)
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
