import { AdventureStory } from "../../entities/adventure-story"
import { BoonList } from "../../entities/boon"
import { Hero } from "../../entities/hero"
import { useGameLoop } from "../../modules/game-loop"
import { useGameState } from "../../modules/game-state"
import { Log } from "../../modules/log"
import { Button } from "../../modules/ui"

export const BestowBlessing = ({ send }: Pick<ReturnType<typeof useGameLoop>, "send">) => {
  const story = useGameState((state) => state.story)
  const selectedBoons = useGameState((state) => state.selectedBoons)

  return (
    <div className="flex flex-col gap-8">
      <AdventureStory story={story} />
      <Hero {...story.hero} speechBubble />
      <div className="mt-36 relative">
        <BoonList boons={story.boons} />
        <Log />
      </div>
      <div className={`text-center mt-10 transition-opacity ${selectedBoons.length === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Button onClick={() => send("next")}>Grant boon</Button>
      </div>
    </div>
  )
}
