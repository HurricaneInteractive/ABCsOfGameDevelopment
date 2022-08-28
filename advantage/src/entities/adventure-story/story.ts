import { affectConfig, Affects, boonConfig } from "../boon";
import { heroConfig } from "../hero/config";
import { enemyConfig } from "./enemies";
import { townConfig, Towns } from "./town";

export interface Story {
  town: Towns
  enemy: IEnemy
  boons: IBoon[]
  hero: IHero
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

function randomFromArray<T>(arr: T[]): T {
  return shuffle(arr)[0]
}

export function createStory(): Story {
  const town = randomFromArray(townConfig)
  const enemy = randomFromArray(Object.values(enemyConfig))
  const hero = randomFromArray(Object.values(heroConfig))
  const boons: IBoon[] = []

  while (boons.length < 5) {
    const choice = randomFromArray(Object.values(boonConfig))
    
    if (!boons.includes(choice)) {
      boons.push(choice)
    }
  }

  return {
    town,
    enemy,
    boons,
    hero
  }
}

export function chooseRandomAffects(): Affects[] {
  const affects: Affects[] = []
  
  while (affects.length < 5) {
    const choice = randomFromArray(Object.values(affectConfig))
    
    if (!affects.includes(choice.eid)) {
      affects.push(choice.eid)
    }
  }

  return affects
}
