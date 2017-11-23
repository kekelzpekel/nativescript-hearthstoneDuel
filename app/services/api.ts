import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import "rxjs/add/operator/map";

let available = [];

@Injectable()
export class Api {
    cards: any = [];
    hero: string;
    draft: any = [];

    constructor(private http: Http) {}

    getJson() {
        this.http.get('https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json').map(res => res.json()).subscribe(result => {
            this.cards = result;
        });
    }

    getCard(hero: string, rarity: string[], index: number) {
        if (index === 0) available = this.cards.filter(c => (c.cardClass === hero || c.cardClass === 'NEUTRAL') && (c.rarity === rarity[0] || c.rarity === rarity[1]));
        let random = Math.floor(Math.random() * available.length);
        console.log(random);
        let card = available[random];
        console.log(JSON.stringify(card, null, 4));
        card.image = 'https://art.hearthstonejson.com/v1/render/latest/enUS/256x/' + card.id + '.png';
        return card;
    }

    getCards() {
        this.draft = [];
        console.log(JSON.stringify(this.cards[0], null, 4));
        let random = Math.floor(Math.random() * 100);
        let rarity: string[];
        if (random > 94) rarity = ["LEGENDARY"];
        else if (random <= 94 && random > 79) rarity = ['EPIC'];
        else if (random <= 79 && random > 49) rarity = ['RARE'];
        else if (random <= 49) rarity = ['COMMON', 'FREE'];
        for (let i = 0; i < 3; i++) {
            this.draft.push(this.getCard(this.hero, rarity, i));
        }
        return this.draft;
    }

    setHero(hero: string) {
        this.hero = hero;
    }
}