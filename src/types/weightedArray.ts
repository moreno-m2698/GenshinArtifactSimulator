import { ArtifactType } from "../types/enums"
import { type Domain } from "../types/domain"
//These are resources for a different data strucutre and NOT a WeightedArray
//Read them later
//https://apps.dtic.mil/sti/citations/ADA122046
//https://apps.dtic.mil/sti/pdfs/ADA122046.pdf

export class WeightedArray<T> {

    private _items: T[]
    private _weights: number[]
    private _totalWeigth: number

    constructor() {
        this._items = [];
        this._weights = [];
        this._totalWeigth = 0
    }

    public get items() {
        return this._items;
    }
    
    public get weights() {
        return this._weights;
    }

    public get totalWeight() {
        return this._totalWeigth
    }

    public add(item: T, weight: number) {
        this._items.push(item);
        this._weights.push(weight);
        this._totalWeigth += weight
    }

    public remove(item: T) {

        //Values is -1 if item is not within this.items
        const index = this._items.findIndex((element) => element === item)

        if ( index !== -1 ) {
            const removedWeight = this._weights[index]
            this._items.splice(index, 1)
            this._weights.splice(index, 1)
            this._totalWeigth -= removedWeight
        }

    }

    public sample(): T {

        const randomValue = Math.random() * this._totalWeigth;
        let cumulativeWeight = 0;

        for ( let i = 0; i < this._items.length; i++ ) {
            cumulativeWeight += this._weights[i];
            if (randomValue < cumulativeWeight) {
                return this._items[i]
            }

        }

        return this._items[this._items.length - 1]
    }

}

class SubStatWeightedArray extends WeightedArray<string> {
    constructor () {
        super();
        this.add("HP", 1);
        this.add('HPP', 1)
        this.add('ATK', 1)
        this.add('ATKP',1)
        this.add('DEF', 1)
        this.add('DEFP', 1)
        this.add('CRITR',1)
        this.add('CRITD', 1)
        this.add('ER' , 1)
        this.add('EM', 1)

    }
}

class FlowerWeightedArray extends WeightedArray<string> {
    constructor () {
        super();
        this.add("HP", 1);
    }
}

class PlumeWeightedArray extends WeightedArray<string> {
    constructor () {
        super(); 
        this.add("ATK", 1);
    }
}
class TimepieceWeightedArray extends WeightedArray<string> {
    constructor () {
        super();
        this.add('ATKP', 1);
        this.add('DEFP', 1);
        this.add('HPP', 1);
        this.add('EM', 1);
        this.add('ER', 1);
    }
}

class GobletWeightedArray extends WeightedArray<string> {
    constructor () {
        super();
        this.add('ATKP', 1);
        this.add('DEFP', 1);
        this.add('HPP', 1);
        this.add('EM', 1);
        this.add('PHYSICAL', 1);
        this.add('ANEMO', 1);
        this.add('GEO', 1);
        this.add('DENDRO', 1);
        this.add('HYDRO', 1);
        this.add('PYRO', 1);
        this.add('CRYO', 1);
        this.add('ELECTRO', 1);
    }
}

class CircletWeightedArray extends WeightedArray<string> {
    constructor () {
        super();
        this.add('ATKP', 1);
        this.add('DEFP', 1);
        this.add('HPP', 1);
        this.add('CRITD', 1);
        this.add('CRITR', 1);
        this.add('EM', 1);
    }
}
class ArtifactTypeWeightedArray extends WeightedArray<ArtifactType> {
    constructor () {
        super();
        this.add(ArtifactType.Flower, 1);
        this.add(ArtifactType.Plume, 1);
        this.add(ArtifactType.Goblet, 1);
        this.add(ArtifactType.Circlet, 1);
        this.add(ArtifactType.Sands, 1);
    }
}

class DomainSetWeigtedArray extends WeightedArray<string> {
    constructor (domain: Domain) {
        super();
        for (let i = 0; i<domain.sets.length, i++;) {
            this.add(domain.sets[i].name, domain.sets[i].weight)
        }
    }
} 

export class WeightedArrayFactory {

    constructor () {
    }

    public createFlowerWeightedArray(): WeightedArray<string>  {
        return new FlowerWeightedArray()
    }

    public createPlumeWeightedArray(): WeightedArray<string> {
        return new PlumeWeightedArray();

    }

    public createTimepieceWeightedArray(): WeightedArray<string> {
        return new TimepieceWeightedArray();

    }

    public createGolbletWeightedArray(): WeightedArray<string> {
        return new GobletWeightedArray();

    }

    public createCircletWeightedArray(): WeightedArray<string> {
        return new CircletWeightedArray();
    }

    public createSubStatWeightedArray(): WeightedArray<string> {
        return new SubStatWeightedArray();
    }

    public createArtifactTypeWeightedArray(): WeightedArray<ArtifactType> {
        return new ArtifactTypeWeightedArray();
    }

}
