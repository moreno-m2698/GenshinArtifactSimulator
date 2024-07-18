import { type ArtifactAsset } from "./artifactTypes"

export interface Domain {
    name: string
    sets: string[]
}

interface DomainSet {
    name: string, 
    weight: number
}

//Order these by how they appear on the wiki
//0. Boss Domains
const domainNames = [
    "Bosses",
    "Clear Pool and Mountain Caverns",
    "Valley of Remembrance",
    "Domain of Guyun",
    "Midsummer Courtyard",
    "Hidden Palace of Zhou Formula",
    "Peak of Vindagnyr",
    "Ridge Watch",
    "Momiji-Dyed Court",
    "Slumbering Courtyard",
    "The Lost Valley",
    "Spire of Solitary Enlightenment",
    "City of Gold",
    "Molten Iron Fortress",
    "Denouncement of Sin",
    "Waterfall Wen",
    "Faded Theatre"
]

const setNames = [
    "Gladiator's Finale",
    "Wanderer's Troupe",
    "Noblesse Oblige",
    "Bloodstained Chivalry",
    "Maiden Beloved",
    "Viridescent Venerer",
    "Archaic Petra",
    "Retracing Bolide",
    "Thundersoother",
    "Thundering Fury",
    "Lavawalker",
    "Crimson Witch of Flames",
    "Blizzard Strayer",
    "Heart of Depth",
    "Tenacity of Millelith",
    "Pale Flame",
    "Shimenawa's Reminiscence",
    "Emblem of Severed Fate",
    "Husk of Opulent Dreams",
    "Ocean-Hued Clam",
    "Vermillion Hereafter",
    "Echoes of an Offering",
    "Deepwood Memories",
    "Gilded Dreams",
    "Desert Pavilion Chronicle",
    "Flower of Paradise Lost",
    "Nymph's Dream",
    "Vourukasha's Glow",
    "Marechaussee Hunter",
    "Golden Troupe",
    "Song of Days Past",
    "Nighttime Whispers in the Echoing Woods",
    "Fragment of Harmonic Whimsy",
    "Unfinished Reverie"
]


export const domains: Domain[] = [
    { name: domainNames[0], sets: [setNames[0], setNames[1]] },
    { name: domainNames[1], sets: [setNames[2], setNames[3]] },
    { name: domainNames[2], sets: [setNames[4], setNames[5]] },
    { name: domainNames[3], sets: [setNames[6], setNames[7]] },
    { name: domainNames[4], sets: [setNames[8], setNames[9]] },
    { name: domainNames[5], sets: [setNames[10], setNames[11]] },
    { name: domainNames[6], sets: [setNames[12], setNames[13]] },
    { name: domainNames[7], sets: [setNames[14], setNames[15]] },
    { name: domainNames[8], sets: [setNames[16], setNames[17]] },
    { name: domainNames[9], sets: [setNames[18], setNames[19]] },
    { name: domainNames[10], sets: [setNames[20], setNames[21]] },
    { name: domainNames[11], sets: [setNames[22], setNames[23]] },
    { name: domainNames[12], sets: [setNames[24], setNames[25]] },
    { name: domainNames[13], sets: [setNames[26], setNames[27]] },
    { name: domainNames[14], sets: [setNames[28], setNames[29]] },
    { name: domainNames[15], sets: [setNames[30], setNames[31]] },
    { name: domainNames[16], sets: [setNames[32], setNames[33]] }
]

//Line up the index's of the coords with the where they are on the sprite sheet:
export const domainAssetData: ArtifactAsset[] = [
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0}
]