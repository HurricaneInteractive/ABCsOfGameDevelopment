import create from "zustand";
import { Enemies } from "../../entities/adventure-story/enemies";
import { chooseRandomAffects, createStory, Story } from "../../entities/adventure-story/story";
import { Affects, Boons } from "../../entities/boon";
import { Heros } from "../../entities/hero/config";

interface GameState {
  // data
  lordName: string
  story: Story
  discoveredEnemies: Enemies[]
  discoveredHeros: Heros[]
  discoveredBoons: Boons[]
  discoveredAffects: Affects[]

  selectedBoons: Boons[],

  heroStatuses: [number, boolean][],

  // setter
  generateStory: () => void
  setLordName: (name: string) => void
  logStoryDiscoveries: () => void
  selectBoon: (boon: Boons) => void
  resetSelectedBoons: () => void
  logBattleDiscoveries: (affects: Affects[]) => void
  assignRandomAffects: () => void
  reportHeroStatus: (eid: Heros, alive: boolean) => void
}

export const useGameState = create<GameState>()((set) => ({
  lordName: 'mmm',
  discoveredBoons: [],
  discoveredEnemies: [],
  discoveredHeros: [],
  discoveredAffects: [],
  story: createStory(),
  selectedBoons: [],
  heroStatuses: [],
  generateStory: () => set(() => ({
    story: {
      ...createStory()
    }
  })),
  setLordName: (name: string) => set(() => ({
    lordName: name
  })),
  logStoryDiscoveries: () => set((state) => ({
    discoveredEnemies: [...new Set([...state.discoveredEnemies, state.story.enemy.eid])],
    discoveredHeros: [...new Set([...state.discoveredHeros, state.story.hero.eid])],
    discoveredBoons: [...new Set([...state.discoveredBoons, ...state.story.boons.map((value) => value.eid)])],
  })),
  selectBoon: (boon: Boons) => set((state) => {
    const selected = state.selectedBoons

    if (selected.length >= 2 && !selected.includes(boon)) return state

    const updated = selected.includes(boon) ? selected.filter((value) => value !== boon) : selected.concat(boon)

    return {
      selectedBoons: updated
    }
  }),
  resetSelectedBoons: () => set(() => ({
    selectedBoons: []
  })),
  logBattleDiscoveries: (affects: Affects[]) => set((state) => ({
    discoveredAffects: [...new Set([...state.discoveredAffects, ...affects])]
  })),
  assignRandomAffects: () => set(() => {
    return {
      discoveredAffects: chooseRandomAffects()
    }
  }),
  reportHeroStatus: (eid: Heros, alive: boolean) => set((state) => ({
    heroStatuses: [...state.heroStatuses, [eid, alive]]
  }))
}))
