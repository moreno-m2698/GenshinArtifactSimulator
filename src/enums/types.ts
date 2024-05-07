import type { ArtifactType } from "./enums"

export interface Artifact {
    set: string,
    type: ArtifactType,
    mainStat: string,
    subStats: SubStat[]
}

export interface SubStat {
    stat: string,
    value: number
}