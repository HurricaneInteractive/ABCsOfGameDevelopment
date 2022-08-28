import { PropsWithChildren } from "react"
import { useGameState } from "../../modules/game-state"
import { Story } from "./story"

const LordName = () => {
  const name = useGameState((state) => state.lordName)

  return <span className="text-purple-500">{name}</span>
}

export const Town = ({ children }: PropsWithChildren) => <span className="text-green-500">{children}</span>

export const Boon = ({ children }: PropsWithChildren) => <span className="text-blue-500">{children}</span>

export const Enemy = ({ name }: IEnemy) => (
  <span className="text-red-500">{name}</span>
)

export const Hero = ({ name }: IHero) => (
  <span className="text-yellow-500">{name}</span>
)

export const AdventureStory = ({ story }: { story: Story }) => {
  const town = <Town>{story.town}</Town>
  const enemy = <Enemy {...story.enemy} />

  return (
    <div className="max-w-5xl text-center text-2xl flex flex-col gap-3 justify-center text-black bg-white py-10 px-6 relative z-10">
      <p>Lord <LordName />, I come to you requesting assistance with my next adventure!</p>
      <p>The town of {town} has been overun by {enemy}!</p>
      <p>Please guide on me how to defeat this monstrous foe.</p>
    </div>
  )
}
