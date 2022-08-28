import { useMachine } from "@xstate/react"
import { useEffect } from "react"
import shallow from 'zustand/shallow'
import { affectConfig, Affects, boonConfig } from "../../entities/boon"
import { useGameState } from "../game-state"
import { gameplayLoop } from "../game-state/machine"
import { useOnKeypress } from "../interaction/use-key-press"
import { intersection } from 'lodash-es'
import { getRandomIntInclusive } from "../util"

export const useGameLoop = () => {
  const [current, send] = useMachine(gameplayLoop)
  const {
    generateStory,
    logStoryDiscoveries,
    story,
    selectedBoons,
    logBattleDiscoveries,
    resetSelectedBoons,
    reportHeroStatus,
  } = useGameState((state) => ({
    generateStory: state.generateStory,
    logStoryDiscoveries: state.logStoryDiscoveries,
    story: state.story,
    selectedBoons: state.selectedBoons,
    logBattleDiscoveries: state.logBattleDiscoveries,
    resetSelectedBoons: state.resetSelectedBoons,
    reportHeroStatus: state.reportHeroStatus,
  }), shallow)
  
  const onWinScreen = current.matches("winScreen")
  const onLoseScreen = current.matches("loseScreen")
  const onInitialScreen = current.matches("initial")
  const onGameplayScreen = current.matches("gameplay.revealStory") || current.matches("gameplay.userInput")
  
  const shouldGenerateStory = current.matches("generate.story")
  const shouldLogStoryEntities = current.matches("generate.updateState")

  const shouldLogAffects = current.matches("calculations.logAffects")
  const shouldCalculateWinState = current.matches("calculations.calculateWinState")

  useEffect(() => {
    if (shouldGenerateStory) {
      console.log("[Generate Story]");
      resetSelectedBoons();
      generateStory()
      send("next")
    }
  }, [shouldGenerateStory])

  useEffect(() => {
    if (shouldLogStoryEntities) {
      console.log("[Log Story Entities]")
      logStoryDiscoveries()
      send("next")
    }
  }, [shouldLogStoryEntities])

  useEffect(() => {
    if (shouldLogAffects) {
      console.log('[Log Affects]')
      const { hero, enemy } = story
      const heroAffects = [...hero.strengths, ...hero.weaknesses]
      const boonAffects = selectedBoons.flatMap((eid) => {
        const boon = boonConfig[eid]
        return [
          ...boon.harmfulAgainst,
          ...boon.helpfulAgainst
        ]
      })

      const overlappingAffects = intersection(enemy.attackType, [...heroAffects, ...boonAffects])

      logBattleDiscoveries(overlappingAffects)
      send("next")
    }
  }, [shouldLogAffects, story, selectedBoons])

  useEffect(() => {
    if (shouldCalculateWinState) {
      console.log('[Calculate Win State]');
      const heroStrengths = story.hero.strengths
      const heroWeakness = story.hero.weaknesses
      const boonStrengths = story.boons.flatMap((boon) => boon.helpfulAgainst)
      const boonWeakness = story.boons.flatMap((boon) => boon.harmfulAgainst)

      const enemyDamagePotential = story.enemy.attackType.reduce((acc, eid: Affects) => {
        const heroSDifference = heroStrengths.includes(eid) ? -1 : 0
        const heroWDifference = heroWeakness.includes(eid) ? 1 : 0
        const boonSDifference = boonStrengths.includes(eid) ? -2 : 0
        const boonWDifference = boonWeakness.includes(eid) ? 1 : 0

        const affectStrength = affectConfig[eid].severity + heroSDifference + heroWDifference + boonSDifference + boonWDifference

        return acc + affectStrength
      }, 0)

      const deathChance = 55 + enemyDamagePotential
      const diceRoll = getRandomIntInclusive(0, 100)

      if (diceRoll > deathChance) {
        reportHeroStatus(story.hero.eid, true)
        send("win")
      } else {
        reportHeroStatus(story.hero.eid, false)
        send("lose")
      }
    }
  }, [shouldCalculateWinState, story])

  return {
    current,
    send,
    onWinScreen,
    onLoseScreen,
    onInitialScreen,
    onGameplayScreen
  }
}
