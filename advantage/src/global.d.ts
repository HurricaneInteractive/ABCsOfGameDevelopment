interface IHero {
  eid: number
  name: string
  asset: string
  strengths: number[]
  weaknesses: number[]
}

interface IBoon {
  eid: number
  name: string
  asset: string
  helpfulAgainst: number[]
  harmfulAgainst: number[]
}

type Colors = 
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "voilet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"

interface IAffect {
  eid: number
  name: string
  severity: number
  color: `text-${Colors}-500`
}

interface IEnemy {
  eid: number
  name: string
  attackType: number[]
}
