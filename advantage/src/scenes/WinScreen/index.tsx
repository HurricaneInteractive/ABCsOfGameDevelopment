import { Enemy, Hero as HeroName, Town, Boon } from "../../entities/adventure-story"
import { boonConfig } from "../../entities/boon"
import { Hero } from "../../entities/hero"
import { useGameLoop } from "../../modules/game-loop"
import { useGameState } from "../../modules/game-state"
import { Button } from "../../modules/ui"

export const WinScreen = ({ send }: Pick<ReturnType<typeof useGameLoop>, "send">) => {
  const story = useGameState((state) => state.story)
  const selected = useGameState((state) => state.selectedBoons)

  return (
    <div className="flex flex-col gap-8 items-center text-xl max-w-5xl mx-auto text-center">
      <Hero {...story.hero} />
      <p><HeroName {...story.hero} /> lives to fight another day!</p>
      <p><Town>{story.town}</Town> was witness to a spectacular battle!</p>
      <p>He was able to defeat the <Enemy {...story.enemy} />, and couldn't have done it without your the <Boon>{selected.map((value) => boonConfig[value].name).join(' and ').trim()}</Boon>!</p>
      <Button onClick={() => send("next")}>
        Answer another plea for help
      </Button>
    </div>
  )
}
