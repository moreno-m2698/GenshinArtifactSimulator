import type { ArtifactType } from "./enums"

export interface Artifact {
    set: string,
    type: ArtifactType,
    mainStat: string,
    subStats: SubStat[],
    src?: string
}

export interface SubStat {
    stat: string,
    value: number
}