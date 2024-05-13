import type { Artifact, SubStat } from "../enums/types"
import { ArtifactType } from "../enums/enums"
import { subStatTypes, subStatValues } from "../enums/values"
import flower from "../assets/img/flower.webp"
import feather from "../assets/img/feather.webp"
import timepiece from "../assets/img/timepiece.webp"
import goblet from "../assets/img/goblet.webp"
import circlet from "../assets/img/circlet.webp"


export function generateArtifact(set: string = "Gladiator's Triumphus") {

    const type = chooseArtifactType();
    let possibleMainStats: string[];
    let src: string;

    switch (type) {
        case ArtifactType.Flower:
            possibleMainStats = ['HP'];
            src = flower
            
            break;

        case ArtifactType.Plume:
            possibleMainStats = ['ATK'];
            src = feather
            break;

        case ArtifactType.Sands:
            possibleMainStats = ['ATKP', 'DEFP', 'HPP', 'EM', 'ER'];
            src = timepiece
            break;
        
        case ArtifactType.Goblet:
            possibleMainStats = ['ATKP', 'DEFP', 'HPP', 'EM', 'PHYSICAL', 'ANEMO', 'GEO', 'DENDRO', 'HYDRO', 'PYRO', 'CRYO', 'ELECTRO'];
            src = goblet
            break;
            
        case ArtifactType.Circlet:
            possibleMainStats = ['ATKP','DEFP', 'HPP', 'CRITD', 'CRITR', 'EM']
            src = circlet
            
    }   

    const result = buildArtifact(type, set, possibleMainStats, src)
    return result;
}

function buildArtifact(artifactType: ArtifactType, set: string, possibleMainStats: string[], image: string): Artifact {

    
    const mainStat = chooseMainStat(possibleMainStats);
    const subStats = getSubstats(mainStat);
    const result: Artifact = { set: set, type: artifactType, mainStat: mainStat, subStats: subStats, src: image }
    return result;

};

function chooseArtifactType(): ArtifactType {

    //Look for another way to reference enums instead of creating this new array.
    const artifactTypeList = [ArtifactType.Flower, ArtifactType.Plume, ArtifactType.Sands, ArtifactType.Goblet, ArtifactType.Circlet];
    const randomIndex = Math.floor(Math.random() * artifactTypeList.length)
    return artifactTypeList[randomIndex]
    
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
