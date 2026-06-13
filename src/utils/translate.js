async function mymemory(text, langpair) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}`
  const res = await fetch(url, { signal: AbortSignal.timeout(7000) })
  if (!res.ok) return ''
  const data = await res.json()
  return data.responseData?.translatedText || ''
}

export async function translateJpToEsEn(text) {
  if (!text?.trim()) return { es: '', en: '' }
  try {
    const [es, en] = await Promise.all([
      mymemory(text, 'ja|es'),
      mymemory(text, 'ja|en'),
    ])
    return { es, en }
  } catch {
    return { es: '', en: '' }
  }
}
