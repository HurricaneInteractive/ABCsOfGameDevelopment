import { DeathStrip } from "./entities/hero/death-strip"
import { useGameLoop } from "./modules/game-loop"
import { GameWrapper } from "./modules/layout"
import { BestowBlessing } from "./scenes/BestowBlessing"
import { Introduction } from "./scenes/Introduction"
import { LoseScreen } from "./scenes/LoseScreen"
import { WinScreen } from "./scenes/WinScreen"

function App() {
  const { send, onInitialScreen, onGameplayScreen, onWinScreen, onLoseScreen } = useGameLoop()

  return (
    <GameWrapper>
      <DeathStrip />
      {onInitialScreen && <Introduction send={send} />}
      {onGameplayScreen && <BestowBlessing send={send} />}
      {onWinScreen && <WinScreen send={send} />}
      {onLoseScreen && <LoseScreen send={send} />}
    </GameWrapper>
  )
}

export default App
