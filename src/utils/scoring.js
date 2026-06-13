export const LANGUAGE_CONFIG = {
  ja: { label: '日本語', flag: '🇯🇵', basePoints: 0,   speechLang: 'ja-JP' },
  en: { label: 'English', flag: '🇺🇸', basePoints: 50,  speechLang: 'en-US' },
  es: { label: 'Español', flag: '🇪🇸', basePoints: 100, speechLang: 'es-419' },
}

function editDistance(a, b) {
  const m = a.length, n = b.length
  const dp = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  )
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    }
  }
  return dp[m][n]
}

function normalizeWord(w) {
  return w
    .toLowerCase()
    .replace(/[¿¡.,!?;:'"]/g, '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim()
}

export function textSimilarity(spoken, target) {
  const spokenWords = spoken.split(/\s+/).map(normalizeWord).filter(Boolean)
  const targetWords = target.split(/\s+/).map(normalizeWord).filter(Boolean)

  if (!targetWords.length) return 1
  if (!spokenWords.length) return 0

  const used = new Set()
  let totalScore = 0

  for (const tw of targetWords) {
    let best = 0
    let bestIdx = -1
    for (let i = 0; i < spokenWords.length; i++) {
      if (used.has(i)) continue
      const sw = spokenWords[i]
      const longer = Math.max(tw.length, sw.length)
      if (!longer) continue
      const sim = (longer - editDistance(tw, sw)) / longer
      if (sim > best) { best = sim; bestIdx = i }
    }
    // 75%以上一致した単語のみ正解カウント
    if (best >= 0.75) {
      totalScore += best
      if (bestIdx >= 0) used.add(bestIdx)
    }
  }

  return totalScore / targetWords.length
}

const SCORE_TIERS = [
  { min: 0.94, label: 'PERFECT! ✨',    color: '#ffd700', guaraniEs: 150, guaraniEn: 75 },
  { min: 0.82, label: 'EXCELLENT! 🔥',  color: '#ffd700', guaraniEs: 120, guaraniEn: 60 },
  { min: 0.70, label: 'スペシャル! ⭐', color: '#ff69c8', guaraniEs: 90,  guaraniEn: 45 },
  { min: 0.58, label: '素晴らしい! 👍', color: '#00d4ff', guaraniEs: 60,  guaraniEn: 30 },
  { min: 0.44, label: 'GOOD! 💪',       color: '#00ff88', guaraniEs: 30,  guaraniEn: 15 },
  { min: 0,    label: 'もう一度... 🎤', color: '#ff6666', guaraniEs: 5,   guaraniEn: 2  },
]

export function getScoreResult(similarity, lang) {
  if (lang === 'ja') {
    return { label: '日本語... 💤', color: '#555588', guarani: 0, similarity: 0 }
  }
  const tier = SCORE_TIERS.find(t => similarity >= t.min) ?? SCORE_TIERS[SCORE_TIERS.length - 1]
  const guarani = lang === 'es' ? tier.guaraniEs : tier.guaraniEn
  return { label: tier.label, color: tier.color, guarani, similarity }
}
