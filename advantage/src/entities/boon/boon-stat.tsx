import { useGameState } from "../../modules/game-state";
import { affectConfig, Affects } from "./config";

export const BoonStat = ({ name, harmfulAgainst, helpfulAgainst }: IBoon) => {
  const affects = useGameState((state) => state.discoveredAffects)

  const toAffectName = (eid: Affects) => {
    return affects.includes(eid) ? affectConfig[eid].name : '???'
  }
  
  const positive = helpfulAgainst.map(toAffectName).join(', ').trim()
  const negative = harmfulAgainst.map(toAffectName).join(', ').trim()

  return (
    <div className="flex flex-col leading-none tracking-wider">
      <p className="pb-2 mb-2 border-b">{name}</p>
      <p className="text-green-500">+ {positive || 'none'}</p>
      <p className="text-red-500">- {negative || 'none'}</p>
    </div>
  )
}
