import { useGameState } from "../../modules/game-state"
import { Boon } from "./boon"

export const BoonList = ({ boons }: { boons: IBoon[] }) => {
  const selectedBoons = useGameState((state) => state.selectedBoons)
  const selectBoon = useGameState((state) => state.selectBoon)
    
  return (
    <div className="flex gap-12 justify-center items-center">
      {boons.map((boon, index) => (
        <button key={`boon-list-${boon.eid}-${index}`} onClick={() => selectBoon(boon.eid)} type="button" className="cursor-custom">
          <Boon
            {...boon}
            className={`
              transition-transform
              ${selectedBoons.includes(boon.eid)
                ? 'animate-none drop-shadow-[0_4px_10px_rgba(250,204,21,0.5)] shadow-yellow-400 -translate-y-8 scale-[1.2]'
                : selectedBoons.length < 2
                  ? 'pulse hover:scale-[1.1] hover:animate-none'
                  : 'opacity-25'
              }
            `}
          />
        </button>
      ))}
    </div>
  )
}
