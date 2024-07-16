export interface Artifact {
    set: string,
    type: ArtifactType,
    stat: Stats,
    level: number,
    src?: string
}

export interface Stats {
    mainStat: Stat,
    subStats: Stat[],
    level: number
}
export interface Stat {
    stat: string,
    value: number
}


export enum ArtifactType{
    Flower = "FLOWER",
    Plume = "PLUME",
    Sands = 'SANDS',
    Goblet = 'GOBLET',
    Circlet = 'CIRCLET'
  }
  