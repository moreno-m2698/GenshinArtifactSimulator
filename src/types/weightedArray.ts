//Referencing this article: https://apps.dtic.mil/sti/citations/ADA122046
//https://apps.dtic.mil/sti/pdfs/ADA122046.pdf

export class WeightedArray {

    private _items: string[]
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


    public add(item: string, weight: number) {
        this._items.push(item);
        this._weights.push(weight);
        this._totalWeigth += weight
    }

    public remove(item: string) {

        //Values is -1 if item is not within this.items
        const index = this._items.findIndex((element) => element === item)

        if ( index !== -1 ) {
            const removedWeight = this._weights[index]
            this._items.splice(index, 1)
            this._weights.splice(index, 1)
            this._totalWeigth -= removedWeight
        }

    }

    public sample(): string {

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
