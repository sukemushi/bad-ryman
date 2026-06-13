export default function StressPhrase({ accent }) {
  const tokens = accent.split(/(·|\s)/)

  return (
    <span className="stress-phrase">
      {tokens.map((token, i) => {
        if (token === '·') return <span key={i} className="syl-dot">-</span>
        if (token === ' ') return <span key={i}> </span>
        if (!token) return null
        const isStressed = token !== token.toLowerCase()
        return (
          <span key={i} className={isStressed ? 'syl-stress' : 'syl'}>
            {token.toLowerCase()}
          </span>
        )
      })}
    </span>
  )
}
