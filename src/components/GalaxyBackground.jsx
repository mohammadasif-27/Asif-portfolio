import React, { useEffect, useState } from 'react'
import Galaxy from './Galaxy.jsx'

export default function GalaxyBackground() {
  const [dpr, setDpr] = useState(() => (
    window.matchMedia('(max-width: 720px)').matches ? 1 : 1.35
  ))

  useEffect(() => {
    const compactScreen = window.matchMedia('(max-width: 720px)')
    const updateDpr = () => setDpr(compactScreen.matches ? 1 : 1.35)
    compactScreen.addEventListener('change', updateDpr)
    return () => compactScreen.removeEventListener('change', updateDpr)
  }, [])

  return (
    <div className="galaxy-background" aria-hidden="true">
      <Galaxy
        className="galaxy-scene"
        starColors={['#4287FF', '#42D9FF', '#9475FF', '#FFFFFF']}
        density={0.85}
        glowIntensity={0.3}
        starSize={0.9}
        flareIntensity={0.45}
        twinkleIntensity={0.4}
        starSpeed={0.3}
        speed={0.7}
        rotationSpeed={0.025}
        layers={4}
        direction="forward"
        mouseInteraction
        mouseRepulsion
        repulsionStrength={1.3}
        clickWarp={false}
        intro
        transparent
        lightMode={false}
        opacity={0.9}
        dpr={dpr}
      />
    </div>
  )
}
