export interface Hero {
    name: string;
    id: number;
    src: string;
    dbfId: number;
}

export interface Card {
    artist: string
    cardClass: string,
    collectible: boolean,
    cost: number,
    dbfId: number,
    flavor: string,
    id: string,
    name: string,
    playRequirements: any,
    playerClass: string,
    rarity: string,
    set: string,
    text: string,
    type: string
}