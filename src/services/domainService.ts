import type { Domain } from "../utilities/types/domain";
import { DomainSetWeigtedArray } from "../utilities/types/weightedArray";

const domains: Map<number, Domain> = new Map()
domains.set(1, {name: 'City of Gold', sets: [{name: 'Set1', weight: 1}, {name: 'Set2', weight: 2}]})


export const getArtifactSetFromDomain = (id: number) => {
    const domain = domains.get(id)
    let set = null;
    try {
    const setWeightedDomain = new DomainSetWeigtedArray(domain)
    const set = setWeightedDomain.sample()
    }
    catch {

    }
    return set;
}
