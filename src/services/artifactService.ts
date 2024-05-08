import type { Artifact, SubStat } from "../enums/types"
import { ArtifactType } from "../enums/enums"
import { subStatTypes, subStatValues } from "../enums/values"

export function generateArtifact(set: string = "Gladiator's Triumphus") {

    const type = chooseArtifactType()
    let possibleMainStats: string[];

    switch (type) {
        case ArtifactType.Flower:
            possibleMainStats = ['HP'];
            break;

        case ArtifactType.Plume:
            possibleMainStats = ['ATK'];
            break;

        case ArtifactType.Sands:
            possibleMainStats = ['ATKP', 'DEFP', 'HPP', 'EM', 'ER'];
            break;
        
        case ArtifactType.Goblet:
            possibleMainStats = ['ATKP', 'DEFP', 'HPP', 'EM', 'PHYSICAL', 'ANEMO', 'GEO', 'DENDRO', 'HYDRO', 'PYRO', 'CRYO', 'ELECTRO'];
            break;
            
        case ArtifactType.Circlet:
            possibleMainStats = ['ATKP','DEFP', 'HPP', 'CRITD', 'CRITR', 'EM']
            
    }   

    const result = buildArtifact(type, set, possibleMainStats)
    return result;
}

function buildArtifact(artifactType: ArtifactType, set: string, possibleMainStats: string[]): Artifact {

    
    const mainStat = chooseMainStat(possibleMainStats);
    const subStats = getSubstats(mainStat);
    const result: Artifact = { set: set, type: artifactType, mainStat: mainStat, subStats: subStats}
    return result;

};

function chooseArtifactType(): ArtifactType {

    //Look for another way to reference enums instead of creating this new array.
    const artifactEnums = [ArtifactType.Flower, ArtifactType.Plume, ArtifactType.Sands, ArtifactType.Goblet, ArtifactType.Circlet];
    const randomIndex = Math.floor(Math.random() * artifactEnums.length)
    return artifactEnums[randomIndex]
    
}

//Don't worry about dry, will eventually make custom stats functions once we have a sample
function chooseMainStat(possibleMainStats: string[]): string {

    const randomIndex = Math.floor(Math.random()) * possibleMainStats.length
    return possibleMainStats[randomIndex];
};

function getSubstats(mainStat: string): SubStat[] {

    const initialSubStatCount = Math.floor(Math.random() * 2) == 0 ? 3 : 4
    
    const result = []
    let allowedSubStats = subStatTypes.filter((stat) => stat !== mainStat)

    for (let i = 0; i < initialSubStatCount; i++) {
        const selectedStat: string = allowedSubStats[Math.floor(Math.random() * allowedSubStats.length)]
        const value = subStatValues[selectedStat][Math.floor(Math.random()*4)]
        result.push({stat: selectedStat, value: value})

        allowedSubStats = allowedSubStats.filter((stat) => stat !== selectedStat)

    }

    return result;
}
