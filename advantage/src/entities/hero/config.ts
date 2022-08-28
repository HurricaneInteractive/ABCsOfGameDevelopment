import { Affects } from "../boon"
import zomking from "./assets/zombie-viking.png"
import oneEyeBilly from './assets/one-eye-billy.png'
import fredFairy from './assets/fred-fairy.png'
import jamieTheStrong from './assets/jamie-the-strong.png'
import magnificentCrab from './assets/magnificent-crab.png'
import notManbat from './assets/not-manbat.png'

export enum Heros {
  ZombieViking,
  OneEyeBilly,
  FredFairy,
  JamieTheStrong,
  MagnificentCrab,
  NotManBat
}

export const heroConfig: Record<Heros, IHero> = {
  [Heros.ZombieViking]: {
    eid: Heros.ZombieViking,
    name: 'Sir Zomking',
    asset: zomking,
    strengths: [Affects.Zombie, Affects.Curse, Affects.Slow],
    weaknesses: [Affects.Poison, Affects.Fire, Affects.Bath]
  },
  [Heros.OneEyeBilly]: {
    eid: Heros.OneEyeBilly,
    name: 'One Eye Billy',
    asset: oneEyeBilly,
    strengths: [Affects.Poison, Affects.Sleep, Affects.Itchy],
    weaknesses: [Affects.Plague, Affects.Disease, Affects.Bath]
  },
  [Heros.FredFairy]: {
    eid: Heros.FredFairy,
    name: "Fairy Fred",
    asset: fredFairy,
    strengths: [Affects.Ice, Affects.Poison, Affects.Venom],
    weaknesses: [Affects.Thunder, Affects.Vampire, Affects.Zombie],
  },
  [Heros.JamieTheStrong]: {
    eid: Heros.JamieTheStrong,
    name: "Jamie The Strong",
    asset: jamieTheStrong,
    strengths: [Affects.Paralysis, Affects.Vampire, Affects.Bath],
    weaknesses: [Affects.Ice, Affects.Slow, Affects.Sleep]
  },
  [Heros.MagnificentCrab]: {
    eid: Heros.MagnificentCrab,
    name: 'Magnificent Crab',
    asset: magnificentCrab,
    strengths: [Affects.Fire, Affects.Plague, Affects.Bath],
    weaknesses: [Affects.Paralysis, Affects.Curse, Affects.Thunder],
  },
  [Heros.NotManBat]: {
    eid: Heros.NotManBat,
    name: "Not Manbat",
    asset: notManbat,
    strengths: [Affects.Vitality, Affects.Vampire, Affects.Disease],
    weaknesses: [Affects.Petrify, Affects.Venom, Affects.Fire]
  }
}
