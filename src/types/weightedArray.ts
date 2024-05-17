//Referencing this article: https://apps.dtic.mil/sti/citations/ADA122046
//https://apps.dtic.mil/sti/pdfs/ADA122046.pdf

export class WeigthedArray {

    items: string[]
    weights: number[]
    totalWeigth: number

    constructor() {
        this.items = [];
        this.weights = [];
        this.totalWeigth = 0
    }

    add(item: string, weight: number) {
        this.items.push(item);
        this.weights.push(weight);
        this.totalWeigth += weight
    }

    remove(item: string) {

        //Values is -1 if item is not within this.items
        const index = this.items.findIndex((element) => element === item)

        if ( index !== -1 ) {
            const removedWeight = this.weights[index]
            this.items.splice(index, 1)
            this.weights.splice(index, 1)
            this.totalWeigth -= removedWeight
        }
        
    }

    sample(): string | undefined {
        if (this.items.length === 0) return undefined

        const randomValue = Math.random() * this.totalWeigth;
        let cumulativeWeight = 0;

        for ( let i = 0; i < this.items.length; i++ ) {
            cumulativeWeight += this.weights[i];
            if (randomValue < cumulativeWeight) {
                return this.items[i]
            }

        }

    }

}
