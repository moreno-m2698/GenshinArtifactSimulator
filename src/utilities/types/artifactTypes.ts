export interface Artifact {
    set: string,
    type: ArtifactType,
    stats: Stats,
    src?: ArtifactAsset
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

export interface ArtifactAsset {
    x: number,
    y: number,
    src?: string
}


export enum ArtifactType{
    Flower = "FLOWER",
    Plume = "PLUME",
    Sands = 'SANDS',
    Goblet = 'GOBLET',
    Circlet = 'CIRCLET'
  }
  