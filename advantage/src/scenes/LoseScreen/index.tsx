import { Hero } from "../../entities/hero"
import { useGameLoop } from "../../modules/game-loop"
import { useGameState } from "../../modules/game-state"
import { Button } from "../../modules/ui"
import { Enemy, Hero as HeroName, Town, Boon } from "../../entities/adventure-story"
import { boonConfig } from "../../entities/boon"

export const LoseScreen = ({ send }: Pick<ReturnType<typeof useGameLoop>, "send">) => {
  const story = useGameState((state) => state.story)
  const selected = useGameState((state) => state.selectedBoons)

  const boon = <Boon>{selected.map((value) => boonConfig[value].name).join(' and ').trim()}</Boon>

  return (
    <div className="flex flex-col gap-8 items-center text-xl max-w-5xl mx-auto text-center">
      <Hero {...story.hero} />
      <p><HeroName {...story.hero} /> was SLAUGHTER by the <Enemy {...story.enemy} />...</p>
      <p><Town>{story.town}</Town> will need a long time to recover from the carnage!</p>
      <p>The <Enemy {...story.enemy} /> brushed off the {boon} like it was nothing.</p>
      <Button onClick={() => send("next")}>
        Send another hero to their death
      </Button>
    </div>
  )
}
