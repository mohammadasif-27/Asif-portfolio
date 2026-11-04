import React from 'react'

// Original illustrated previews. They are NOT screenshots of the real projects.
export default function Preview({ type }) {
  const c = { cafe: ['#3b82f6', '#8b5cf6'], service: ['#8b5cf6', '#06b6d4'], shop: ['#06b6d4', '#3b82f6'], game: ['#8b5cf6', '#3b82f6'] }[type] || ['#3b82f6', '#8b5cf6']
  const id = `g-${type}`
  return (
    <svg viewBox="0 0 320 170" role="img" aria-label="Illustrated preview, not a real screenshot" className="preview">
      <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={c[0]} /><stop offset="1" stopColor={c[1]} /></linearGradient></defs>
      <rect width="320" height="170" fill="#0d1330" />
      <rect x="16" y="14" width="288" height="14" rx="7" fill="#1a2250" />
      <circle cx="28" cy="21" r="3" fill={`url(#${id})`} />
      {type === 'game' ? (
        <g stroke={`url(#${id})`} strokeWidth="4" strokeLinecap="round" fill="none">
          <path d="M130 50v100M190 50v100M90 85h140M90 120h140" />
          <path d="m100 58 20 20m0-20-20 20" /><circle cx="160" cy="102" r="10" /><circle cx="220" cy="136" r="10" /><path d="m100 128 20 20m0-20-20 20" />
        </g>
      ) : (
        <g>
          <rect x="16" y="40" width="288" height="42" rx="10" fill={`url(#${id})`} opacity=".9" />
          {[0, 1, 2].map((i) => <rect key={i} x={16 + i * 98} y="96" width="90" height="62" rx="10" fill="#1a2250" />)}
          {[0, 1, 2].map((i) => <rect key={i} x={26 + i * 98} y="106" width="70" height="8" rx="4" fill={`url(#${id})`} opacity=".7" />)}
        </g>
      )}
    </svg>
  )
}
