import { useState } from "react";
import { useGameLoop } from "../../modules/game-loop";
import { useGameState } from "../../modules/game-state";
import { Button } from "../../modules/ui";

export const Introduction = ({ send }: Pick<ReturnType<typeof useGameLoop>, "send">) => {
  const [name, setName] = useState("")
  const setLordName = useGameState((state) => state.setLordName)
  const lordName = useGameState((state) => state.lordName)
  const assignRandomAffects = useGameState((state) => state.assignRandomAffects)
  const [hasFinished, setHasFinished] = useState(false)
  const [step, setStep] = useState(1)

  const onFinish = () => {
    setLordName(name.trim() || 'mmmm')
    setHasFinished(true)
  }

  const onContinue = () => {
    assignRandomAffects()
    send("next")
  }

  return (
    <div className="flex flex-col gap-8 items-center text-xl max-w-5xl mx-auto text-center">
      <p>Arise! Uuuh ummm.. Who are you again?</p>
      {!hasFinished && <div className="flex gap-4">
        <input
          type="text"
          name="name"
          className="text-white bg-slate-900 px-5 py-2 border-4 border-slate-100 font-bold cursor-custom focus:outline-none tracking-wider"
          autoComplete="none"
          aria-autocomplete="none"
          maxLength={20}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Button onClick={onFinish}>Finish speaking</Button>
      </div>}
      {hasFinished && (
        name.trim() === ''
          ? <p>No name huh? I shall call you <span className="text-purple-500">{lordName}</span>! Doesn't have a good ring though... What a shame... Nevertheless.</p>
          : <p>Ahhh yes! Arise Lord <span className="text-purple-500">{lordName}</span></p>
      )}
      {hasFinished && (
        <>
          {step > 1 && <p>You have been arisen because the rest of us are going on holiday.</p>}
          {step > 2 && <p>The job is really simple, every now and then Heros knock on our door looking for Boons.</p>}
          {step > 3 && <p>Listen to what they ask and present them with a Boon to help them, or hurt them, it is really up to you.</p>}
          {step > 4 && <p>Don't worry if you don't know what a Boon does, you'll find out once the Hero goes off on their adventure.</p>}
          {step > 5 && (
            <>
              <p>We are off! Good luck <span className="text-purple-500">{lordName}</span></p>
              <Button onClick={onContinue}>
                Open your doors
              </Button>
            </>
          )}
        </>
      )}
      {hasFinished && step <= 5 && (
        <Button onClick={() => setStep((value) => value + 1)}>
          Next
        </Button>
      )}
    </div>
  )
}
