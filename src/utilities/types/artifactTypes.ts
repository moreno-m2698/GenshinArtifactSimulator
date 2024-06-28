export interface Artifact {
    set: string,
    type: ArtifactType,
    mainStat: string,
    subStats: SubStat[],
    src?: string,
    level: number
}

export interface SubStat {
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
  