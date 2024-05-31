export interface Domain {
    name: string
    sets: DomainSet[]
}

interface DomainSet {
    name: string, 
    weight: number
}