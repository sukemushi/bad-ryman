// しゃべった日本語を端末内（localStorage）に集積していくストック。
// セッションをまたいで蓄積され、後でセニョリータの話題などに活かす。

const KEY = 'badryman:jpStock'
const MAX = 80 // 直近80件まで保持

export function getStock() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function addToStock({ ja, es, en }) {
  if (!ja || !ja.trim()) return getStock()
  const stock = getStock()
  // 直近と全く同じ発言は重複登録しない
  if (stock.length && stock[stock.length - 1].ja === ja) return stock
  stock.push({ ja, es: es || '', en: en || '', at: Date.now() })
  const trimmed = stock.slice(-MAX)
  try {
    localStorage.setItem(KEY, JSON.stringify(trimmed))
  } catch {
    /* 容量超過などは無視 */
  }
  return trimmed
}

// 今の発言を除いた「過去の」ストックからランダムに1件返す（無ければ null）
export function getRandomPastItem(excludeJa) {
  const stock = getStock().filter(s => s.ja !== excludeJa && s.ja.trim())
  if (stock.length === 0) return null
  return stock[Math.floor(Math.random() * stock.length)]
}

export function getStockCount() {
  return getStock().length
}
