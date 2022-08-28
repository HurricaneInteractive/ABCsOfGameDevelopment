import { affectConfig, Affects } from "../../entities/boon";
import { useGameState } from "../../modules/game-state";

interface Props {
  name: string
  positives: Affects[]
  negatives: Affects[]
}

export const Stat = ({ name, negatives, positives }: Props) => {
  const affects = useGameState((state) => state.discoveredAffects)

  const toAffectName = (eid: Affects) => {
    return affects.includes(eid) ? affectConfig[eid].name : '???'
  }
  
  const positive = positives.map(toAffectName).join(', ').trim()
  const negative = negatives.map(toAffectName).join(', ').trim()

  return (
    <div className="flex flex-col tracking-wider text-sm">
      <p className="pb-2 mb-2 border-b">{name}</p>
      {positive && <p className="text-green-500">+ {positive}</p>}
      {negative && <p className="text-red-500">- {negative}</p>}
    </div>
  )
}
