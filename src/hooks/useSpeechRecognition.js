import { useState, useCallback, useRef } from 'react'

export function useSpeechRecognition() {
  const [transcript, setTranscript] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [error, setError] = useState(null)
  const ref = useRef(null)

  const startListening = useCallback((lang = 'es-419') => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) {
      setError('このブラウザは音声認識に対応していません。Android版Chromeをお使いください。')
      return
    }

    const recognition = new SR()
    recognition.lang = lang
    recognition.continuous = false
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onstart = () => {
      setIsListening(true)
      setTranscript('')
      setError(null)
    }

    recognition.onresult = (e) => {
      setTranscript(e.results[0][0].transcript)
    }

    recognition.onerror = (e) => {
      if (e.error === 'no-speech') {
        setError('音声が検出されませんでした。もう一度お試しください。')
      } else if (e.error === 'not-allowed') {
        setError('マイクの使用が許可されていません。ブラウザ設定を確認してください。')
      } else {
        setError(`エラー: ${e.error}`)
      }
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    ref.current = recognition
    try {
      recognition.start()
    } catch {
      setError('音声認識の開始に失敗しました。')
      setIsListening(false)
    }
  }, [])

  const stopListening = useCallback(() => {
    ref.current?.stop()
    setIsListening(false)
  }, [])

  const reset = useCallback(() => {
    setTranscript('')
    setError(null)
  }, [])

  return { transcript, isListening, error, startListening, stopListening, reset }
}
