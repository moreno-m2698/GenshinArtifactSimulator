import { type Artifact, type SubStat, ArtifactType } from "../utilities/types/artifactTypes"
import { subStatValues } from "../utilities/types/values"
import { type WeightedArray, WeightedArrayFactory } from "../utilities/types/weightedArray"
import { domains } from "../utilities/types/domain"
import flower from "../assets/img/flower.webp"
import feather from "../assets/img/feather.webp"
import timepiece from "../assets/img/timepiece.webp"
import goblet from "../assets/img/goblet.webp"
import circlet from "../assets/img/circlet.webp"

const factory = new WeightedArrayFactory();

export function generateArtifact(domainIndex: number = 0) {

    console.log("This is the domain index: " + (domainIndex - 1).toString())
    const artifactsWeightedArray = factory.createArtifactTypeWeightedArray();
    const type = artifactsWeightedArray.sample();
    let MSWA: WeightedArray<string>;
    let src: string;

    switch (type) {
        case ArtifactType.Flower:
            MSWA = factory.createFlowerWeightedArray();
            src = flower
            break;

        case ArtifactType.Plume:
            MSWA = factory.createPlumeWeightedArray();
            src = feather
            break;

        case ArtifactType.Sands:
            MSWA = factory.createTimepieceWeightedArray();
            src = timepiece
            break;
        
        case ArtifactType.Goblet:
            MSWA = factory.createGolbletWeightedArray();
            src = goblet
            break;
            
        case ArtifactType.Circlet:
            MSWA = factory.createCircletWeightedArray();
            src = circlet
            
    }   

    const result = buildArtifact(type, domainIndex, MSWA, src)
    return result;
}

function buildArtifact(artifactType: ArtifactType, domainIndex: number, MainStatWeightedArray: WeightedArray<string>, image: string, level: number = 0): Artifact {

    const set = "replace me"
    const mainStat = MainStatWeightedArray.sample();
    const subStats = getSubstats(mainStat);
    const result: Artifact = { set: set, type: artifactType, mainStat: mainStat, subStats: subStats, src: image, level: level }
    return result;

};

function getSubstats(mainStat: string): SubStat[] {

    const initialSubStatCount = Math.floor(Math.random() * 2) == 0 ? 3 : 4
    const subStatWeightedArray = factory.createSubStatWeightedArray()

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

