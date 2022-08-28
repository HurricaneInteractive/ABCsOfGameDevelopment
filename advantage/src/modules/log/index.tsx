import { useState } from 'react'
import { enemyConfig } from '../../entities/adventure-story/enemies'
import { Boon, boonConfig, Boons } from '../../entities/boon'
import { heroConfig } from '../../entities/hero/config'
import { useGameState } from '../game-state'
import { Button } from '../ui'
import asset from './assets/book.png'
import { Stat } from './stat'

const DiscoveredBoons = () => {
  const boons = useGameState((state) => state.discoveredBoons)
  const story = useGameState((state) => state.story)

  return (
    <div className="w-full">
      <h4 className="text-xl pb-4 mb-4 border-b">Discovered Boons</h4>
      <div className='flex flex-col gap-6'>
        {boons.map((boon) => (
          <div key={boon} className="flex gap-3">
            <Boon {...boonConfig[boon as Boons]} className={`w-[40px] ${story.boons.find((storyBoon) => storyBoon.eid === boon) ? 'drop-shadow-[0_2px_10px_rgba(239,68,68,0.8)]' : ''}`} />
            <Stat name={boonConfig[boon].name} negatives={boonConfig[boon].harmfulAgainst} positives={boonConfig[boon].helpfulAgainst} />
          </div>
        ))}
        {!boons.length && <p>No boons discovered, continue playing to encounter more.</p>}
      </div>
    </div>
  )
}

const DiscoveredEnemies = () => {
  const enemies = useGameState((state) => state.discoveredEnemies)

  return (
    <div className="w-full">
      <h4 className="text-xl pb-4 mb-4 border-b">Discovered Enemies</h4>
      <div className='flex flex-col gap-6'>
        {enemies.map((enemy) => (
          <div key={enemy} className="flex gap-3">
            <Stat name={enemyConfig[enemy].name} negatives={enemyConfig[enemy].attackType} positives={[]} />
          </div>
        ))}
        {!enemies.length && <p>No enemies discovered, continue playing to encounter more.</p>}
      </div>
    </div>
  )
}

const DiscoveredHeros = () => {
  const heros = useGameState((state) => state.discoveredHeros)

  return (
    <div className="w-full">
      <h4 className="text-xl pb-4 mb-4 border-b">Discovered Heros</h4>
      <div className='flex flex-col gap-6'>
        {heros.map((hero) => (
          <div key={hero} className="flex items-start gap-3">
            <img src={heroConfig[hero].asset} />
            <Stat name={heroConfig[hero].name} negatives={heroConfig[hero].weaknesses} positives={heroConfig[hero].strengths} />
          </div>
        ))}
        {!heros.length && <p>No heros discovered, continue playing to encounter more.</p>}
      </div>
    </div>
  )
}

const HeroLog = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed z-20 w-full bottom-0 left-0 p-6 max-h-[80vh] h-[50vh] overflow-auto">
      <div className="bg-slate-900 p-6 border-4 border-slate-100 grid grid-cols-3 gap-6 h-full overflow-auto">
        <DiscoveredBoons />
        <DiscoveredEnemies />
        <DiscoveredHeros />
      </div>
      <Button onClick={onClose} className="absolute right-[50px] top-2">
        Close
      </Button>
    </div>
  )
}

export const Log = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 scale-[0.25] hover:scale-[0.3] transition-transform active:scale-[0.25]">
        <img src={asset} alt="lord log" className='scale-[2] pointer-events-auto' onClick={() => setOpen(true)} />
      </div>
      {open && <HeroLog onClose={() => setOpen(false)} />}
    </>
  )
}
