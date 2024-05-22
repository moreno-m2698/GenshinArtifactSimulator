import type { Artifact, SubStat } from "../types/types"
import { ArtifactType } from "../types/enums"
import { subStatValues } from "../types/values"
import { WeightedArray } from "../types/weightedArray"
import flower from "../assets/img/flower.webp"
import feather from "../assets/img/feather.webp"
import timepiece from "../assets/img/timepiece.webp"
import goblet from "../assets/img/goblet.webp"
import circlet from "../assets/img/circlet.webp"

//I think I want to have my weighted arrays prebuilt instead of building each time we create an artifact
//The references will be below:
//========================================================================================================

//MSWA: Main Stat Weighted Array

const flowerMSWA = new WeightedArray<string>();
flowerMSWA.add("HP", 1);

const plumeMSWA = new WeightedArray<string>();
plumeMSWA.add('ATK', 1);

const sandsMSWA = new WeightedArray<string>();
sandsMSWA.add('ATKP', 1);
sandsMSWA.add('DEFP', 1);
sandsMSWA.add('HPP', 1);
sandsMSWA.add('EM', 1);
sandsMSWA.add('ER', 1);

const gobletMSWA = new WeightedArray<string>();
gobletMSWA.add('ATKP', 1);
gobletMSWA.add('DEFP', 1);
gobletMSWA.add('HPP', 1);
gobletMSWA.add('EM', 1);
gobletMSWA.add('PHYSICAL', 1);
gobletMSWA.add('ANEMO', 1);
gobletMSWA.add('GEO', 1);
gobletMSWA.add('DENDRO', 1);
gobletMSWA.add('HYDRO', 1);
gobletMSWA.add('PYRO', 1);
gobletMSWA.add('CRYO', 1);
gobletMSWA.add('ELECTRO', 1);


const circletMSWA = new WeightedArray<string>();
circletMSWA.add('ATKP', 1);
circletMSWA.add('DEFP', 1);
circletMSWA.add('HPP', 1);
circletMSWA.add('CRITD', 1);
circletMSWA.add('CRITR', 1);
circletMSWA.add('EM', 1);

const artifactTypeMSWA = new WeightedArray<ArtifactType>;
artifactTypeMSWA.add(ArtifactType.Flower, 1);
artifactTypeMSWA.add(ArtifactType.Plume, 1);
artifactTypeMSWA.add(ArtifactType.Goblet, 1);
artifactTypeMSWA.add(ArtifactType.Circlet, 1);
artifactTypeMSWA.add(ArtifactType.Sands, 1);

//Service functions:
//=====================================================================================


export function generateArtifact(set: string = "Gladiator's Triumphus") {

    const type = artifactTypeMSWA.sample();
    let MSWA: WeightedArray<string>;
    let src: string;

    switch (type) {
        case ArtifactType.Flower:
            MSWA = flowerMSWA;
            src = flower
            break;

        case ArtifactType.Plume:
            MSWA = plumeMSWA
            src = feather
            break;

        case ArtifactType.Sands:
            MSWA = sandsMSWA
            src = timepiece
            break;
        
        case ArtifactType.Goblet:
            MSWA = gobletMSWA
            src = goblet
            break;
            
        case ArtifactType.Circlet:
            MSWA = circletMSWA
            src = circlet
            
    }   

    const result = buildArtifact(type, set, MSWA, src)
    return result;
}

function buildArtifact(artifactType: ArtifactType, set: string, MainStatWeightedArray: WeightedArray<string>, image: string, level: number = 0): Artifact {

    
    const mainStat = MainStatWeightedArray.sample();
    const subStats = getSubstats(mainStat);
    const result: Artifact = { set: set, type: artifactType, mainStat: mainStat, subStats: subStats, src: image, level: level }
    return result;

};

function getSubstats(mainStat: string): SubStat[] {

    const initialSubStatCount = Math.floor(Math.random() * 2) == 0 ? 3 : 4
    
    //This is placed here since we will need to purge a new object whenever a new artifact is created
    //Due to its frequency I might either have it preconstructed or think of an alternative method for storing the data
    const subStatWeightedArray = new WeightedArray<string>();
    subStatWeightedArray.add('HP', 1);
    subStatWeightedArray.add('HPP', 1);
    subStatWeightedArray.add('ATK', 1);
    subStatWeightedArray.add('ATKP', 1);
    subStatWeightedArray.add('DEF', 1);
    subStatWeightedArray.add('DEFP', 1);
    subStatWeightedArray.add('CRITR', 1);
    subStatWeightedArray.add('CRITD', 1);
    subStatWeightedArray.add('ER', 1);
    subStatWeightedArray.add('EM', 1);

    subStatWeightedArray.remove(mainStat)
    const result = []

    for (let i = 0; i < initialSubStatCount; i++) {
        const selectedStat: string = subStatWeightedArray.sample()
        const value = subStatValues[selectedStat][Math.floor(Math.random()*4)]
        result.push({stat: selectedStat, value: value})
        subStatWeightedArray.remove(selectedStat)

    }

    return result;
}

