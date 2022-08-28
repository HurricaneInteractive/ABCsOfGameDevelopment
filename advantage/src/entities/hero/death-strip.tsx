import { useGameState } from "../../modules/game-state"
import { heroConfig, Heros } from "./config"

export const DeathStrip = () => {
  const statues = useGameState((state) => state.heroStatuses)

  return (
    <div className="fixed w-full top-0 left-0 flex flex-wrap -z-10 opacity-50">
      {statues.map(([eid, alive], index) => {
        const hero = heroConfig[eid as Heros]

        return (
          <div key={index} className={`${alive ? '' : 'grayscale opacity-30'} -mr-6 relative`}>
            <img src={hero.asset} alt={hero.name} />
          </div>
        )
      })}
    </div>
  )
}
