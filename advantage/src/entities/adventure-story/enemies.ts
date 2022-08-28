import { Affects } from "../boon";

export enum Enemies {
  Bees,
  Zombie,
  GiantSnail,
  Snowman,
  Ghost,
  Dragon,
  Goblin,
  Manbat,
  FeralDogs,
  Bunnies,
  ThunderCloud,
  RoamingMushrooms,
  Pirates,
  Vampire
}

export const enemyConfig: Record<Enemies, IEnemy> = {
  [Enemies.Bees]: {
    eid: Enemies.Bees,
    name: "Bees",
    attackType: [Affects.Poison, Affects.Slow, Affects.Itchy]
  },
  [Enemies.Zombie]: {
    eid: Enemies.Zombie,
    name: "Zombies",
    attackType: [Affects.Zombie, Affects.Slow, Affects.Curse]
  },
  [Enemies.GiantSnail]: {
    eid: Enemies.GiantSnail,
    name: "Giant Snails",
    attackType: [Affects.Slow, Affects.Sleep, Affects.Petrify]
  },
  [Enemies.Snowman]: {
    eid: Enemies.Snowman,
    name: "Snowmen",
    attackType: [Affects.Ice, Affects.Vitality, Affects.Slow]
  },
  [Enemies.Ghost]: {
    eid: Enemies.Ghost,
    name: "Ghosts",
    attackType: [Affects.Petrify, Affects.Paralysis, Affects.Curse]
  },
  [Enemies.Dragon]: {
    eid: Enemies.Dragon,
    name: "Dragon",
    attackType: [Affects.Fire, Affects.Petrify, Affects.Paralysis]
  },
  [Enemies.Goblin]: {
    eid: Enemies.Goblin,
    name: "Goblins",
    attackType: [Affects.Itchy, Affects.Bath, Affects.Vitality]
  },
  [Enemies.Manbat]: {
    eid: Enemies.Manbat,
    name: "Manbat",
    attackType: [Affects.Vitality, Affects.Vampire, Affects.Disease]
  },
  [Enemies.FeralDogs]: {
    eid: Enemies.FeralDogs,
    name: "Feral Dogs",
    attackType: [Affects.Disease, Affects.Itchy, Affects.Venom]
  },
  [Enemies.Bunnies]: {
    eid: Enemies.Bunnies,
    name: "Wizard Bunnies",
    attackType: [Affects.Fire, Affects.Ice, Affects.Thunder]
  },
  [Enemies.ThunderCloud]: {
    eid: Enemies.ThunderCloud,
    name: "Thunder Cloud",
    attackType: [Affects.Bath, Affects.Thunder, Affects.Sleep]
  },
  [Enemies.RoamingMushrooms]: {
    eid: Enemies.RoamingMushrooms,
    name: "Roaming Mushrooms",
    attackType: [Affects.Poison, Affects.Sleep, Affects.Disease]
  },
  [Enemies.Pirates]: {
    eid: Enemies.Pirates,
    name: "Pirates",
    attackType: [Affects.Petrify, Affects.Disease, Affects.Vitality]
  },
  [Enemies.Vampire]: {
    eid: Enemies.Vampire,
    name: "Vampire",
    attackType: [Affects.Vampire, Affects.Slow, Affects.Venom]
  }
}
