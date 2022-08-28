import PoisonAsset from './assets/001.png'
import ParalysisAsset from './assets/002.png'
import FireAsset from './assets/003.png'
import IceAsset from './assets/004.png'
import ThunderAsset from './assets/005.png'
import CurseAsset from './assets/006.png'
import DiseaseAsset from './assets/007.png'
import PetrifyAsset from './assets/008.png'
import SlowAsset from './assets/009.png'
import ZombieAsset from './assets/010.png'
import VenomAsset from './assets/011.png'
import SleepAsset from './assets/012.png'
import ItchyAsset from './assets/013.png'
import PlagueAsset from './assets/014.png'
import VampireAsset from './assets/015.png'
import BathAsset from './assets/016.png'

// import AntidoteAsset from './assets/017.png'

/**
 * @see https://finalfantasy.fandom.com/wiki/Status_effect
 * Most of these I just copied from FF
 */
export enum Affects {
  Poison,
  Paralysis,
  Fire,
  Ice,
  Thunder,
  Curse,
  Disease,
  Petrify,
  Slow,
  Zombie,
  Venom,
  Sleep,
  Itchy,
  Plague,
  Vampire,
  Bath,
  Vitality
}

export enum Severity {
  Low = 1,
  Medium = 2,
  High = 3,
  Deadly = 5
}

export enum Boons {
  // Common Boons
  Poison,
  Paralysis,
  Fire,
  Ice,
  Thunder,
  Curse,
  Disease,
  Petrify,
  Slow,
  Zombie,
  Venom,
  Sleep,
  Itchy,
  Plague,
  Vampire,
  Bath,
  // Specialised Boons
  // Antidote
}

export const boonConfig: Record<Boons, IBoon> = {
  // #region Common Boons
  [Boons.Poison]: {
    eid: Boons.Poison,
    name: "Poison Protection",
    asset: PoisonAsset,
    helpfulAgainst: [Affects.Poison],
    harmfulAgainst: [Affects.Vitality]
  },
  [Boons.Paralysis]: {
    eid: Boons.Paralysis,
    name: "Paralysis Protection",
    asset: ParalysisAsset,
    helpfulAgainst: [Affects.Paralysis],
    harmfulAgainst: [Affects.Vitality]
  },
  [Boons.Fire]: {
    eid: Boons.Fire,
    name: "Fire Protection",
    asset: FireAsset,
    helpfulAgainst: [Affects.Fire],
    harmfulAgainst: [Affects.Ice]
  },
  [Boons.Ice]: {
    eid: Boons.Ice,
    name: "Ice Protection",
    asset: IceAsset,
    helpfulAgainst: [Affects.Ice],
    harmfulAgainst: [Affects.Thunder]
  },
  [Boons.Thunder]: {
    eid: Boons.Thunder,
    name: "Thunder Protection",
    asset: ThunderAsset,
    helpfulAgainst: [Affects.Thunder],
    harmfulAgainst: [Affects.Fire]
  },
  [Boons.Curse]: {
    eid: Boons.Curse,
    name: "Curse Protection",
    asset: CurseAsset,
    helpfulAgainst: [Affects.Curse],
    harmfulAgainst: [Affects.Disease]
  },
  [Boons.Disease]: {
    eid: Boons.Disease,
    name: "Disease Protection",
    asset: DiseaseAsset,
    helpfulAgainst: [Affects.Disease],
    harmfulAgainst: [Affects.Curse]
  },
  [Boons.Petrify]: {
    eid: Boons.Petrify,
    name: "Petrify Protection",
    asset: PetrifyAsset,
    helpfulAgainst: [Affects.Petrify],
    harmfulAgainst: [Affects.Paralysis]
  },
  [Boons.Slow]: {
    eid: Boons.Slow,
    name: "Slow Protection",
    asset: SlowAsset,
    helpfulAgainst: [Affects.Slow],
    harmfulAgainst: [Affects.Sleep]
  },
  [Boons.Zombie]: {
    eid: Boons.Zombie,
    name: "Zombie Protection",
    asset: ZombieAsset,
    helpfulAgainst: [Affects.Zombie],
    harmfulAgainst: [Affects.Vitality]
  },
  [Boons.Venom]: {
    eid: Boons.Venom,
    name: "Venom Protection",
    asset: VenomAsset,
    helpfulAgainst: [Affects.Venom],
    harmfulAgainst: [Affects.Vitality]
  },
  [Boons.Sleep]: {
    eid: Boons.Sleep,
    name: "Sleep Protection",
    asset: SleepAsset,
    helpfulAgainst: [Affects.Sleep],
    harmfulAgainst: [Affects.Slow]
  },
  [Boons.Itchy]: {
    eid: Boons.Itchy,
    name: "Itchy Protection",
    asset: ItchyAsset,
    helpfulAgainst: [Affects.Itchy],
    harmfulAgainst: [Affects.Bath]
  },
  [Boons.Plague]: {
    eid: Boons.Plague,
    name: "Plague Protection",
    asset: PlagueAsset,
    helpfulAgainst: [Affects.Plague],
    harmfulAgainst: [Affects.Vitality]
  },
  [Boons.Vampire]: {
    eid: Boons.Vampire,
    name: "Vampire Protection",
    asset: VampireAsset,
    helpfulAgainst: [Affects.Vampire],
    harmfulAgainst: [Affects.Vitality]
  },
  [Boons.Bath]: {
    eid: Boons.Bath,
    name: "Bath Protection",
    asset: BathAsset,
    helpfulAgainst: [Affects.Bath],
    harmfulAgainst: [Affects.Itchy]
  },
  // #endregion
  // #region Specialised Boons
  // [Boons.Antidote]: {
  //   eid: Boons.Antidote,
  //   name: "Antidote",
  //   asset: AntidoteAsset,
  //   helpfulAgainst: [Affects.Poison],
  //   harmfulAgainst: [Affects.Fire, Affects.Thunder, Affects.Ice]
  // },
  // #endregion
}

export const affectConfig: Record<Affects, IAffect> = {
  [Affects.Poison]: {
    eid: Affects.Poison,
    name: "Poison",
    severity: Severity.Medium,
    color: "text-fuchsia-500"
  },
  [Affects.Paralysis]: {
    eid: Affects.Paralysis,
    name: "Paralysis",
    severity: Severity.High,
    color: 'text-blue-500'
  },
  [Affects.Curse]: {
    eid: Affects.Curse,
    name: "Curse",
    severity: Severity.Medium,
    color: 'text-blue-500'
  },
  [Affects.Disease]: {
    eid: Affects.Disease,
    name: "Disease",
    severity: Severity.High,
    color: "text-fuchsia-500"
  },
  [Affects.Fire]: {
    eid: Affects.Fire,
    name: "Fire",
    severity: Severity.Medium,
    color: 'text-blue-500'
  },
  [Affects.Ice]: {
    eid: Affects.Ice,
    name: "Ice",
    severity: Severity.Medium,
    color: 'text-blue-500'
  },
  [Affects.Itchy]: {
    eid: Affects.Itchy,
    name: "Itchy",
    severity: Severity.Low,
    color: "text-fuchsia-500"
  },
  [Affects.Petrify]: {
    eid: Affects.Petrify,
    name: "Petrify",
    severity: Severity.High,
    color: 'text-blue-500'
  },
  [Affects.Plague]: {
    eid: Affects.Plague,
    name: "Plague",
    severity: Severity.Deadly,
    color: 'text-blue-500'
  },
  [Affects.Slow]: {
    eid: Affects.Slow,
    name: "Slow",
    severity: Severity.Low,
    color: "text-fuchsia-500"
  },
  [Affects.Sleep]: {
    eid: Affects.Sleep,
    name: "Sleep",
    severity: Severity.Low,
    color: 'text-blue-500'
  },
  [Affects.Thunder]: {
    eid: Affects.Thunder,
    name: "Thunder",
    severity: Severity.Medium,
    color: 'text-blue-500'
  },
  [Affects.Vampire]: {
    eid: Affects.Vampire,
    name: "Vampire",
    severity: Severity.High,
    color: "text-fuchsia-500"
  },
  [Affects.Venom]: {
    eid: Affects.Venom,
    name: "Venom",
    severity: Severity.High,
    color: 'text-blue-500'
  },
  [Affects.Zombie]: {
    eid: Affects.Zombie,
    name: "Zombie",
    severity: Severity.Deadly,
    color: 'text-blue-500'
  },
  [Affects.Bath]: {
    eid: Affects.Bath,
    name: "Bath",
    severity: Severity.Low,
    color: 'text-blue-500'
  },
  [Affects.Vitality]: {
    eid: Affects.Vitality,
    name: "Vitality",
    severity: Severity.Low,
    color: "text-blue-500"
  }
}
