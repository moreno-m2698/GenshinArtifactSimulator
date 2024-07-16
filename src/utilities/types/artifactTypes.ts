export interface Artifact {
    set: string,
    type: ArtifactType,
    stats: Stats,
    src?: string
}

export interface Stats {
    mainStat: Stat,
    subStats: Stat[],
    level: number
}
export interface Stat {
    name: string,
    value: number
}


export enum ArtifactType{
    Flower = "FLOWER",
    Plume = "PLUME",
    Sands = 'SANDS',
    Goblet = 'GOBLET',
    Circlet = 'CIRCLET'
  }
  