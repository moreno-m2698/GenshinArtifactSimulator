import type { ArtifactType } from "./enums"

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