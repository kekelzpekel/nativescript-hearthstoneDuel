import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import * as  base64 from "base-64";
import "rxjs/add/operator/map";
import {Card, Hero} from "../models/hero";

let available = [];

@Injectable()
export class Api {
    cards: Card[] = [];
    hero: Hero;
    draft: any = [];
    drafted: string[] = [];
    code: number[] = [];
    deck1 = [];
    deck2 = [];

    constructor(private http: Http) {
    }

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
            this.draft.push(this.getCard(this.hero.name.toUpperCase(), rarity, i));
        }
        return this.draft;
    }

    setHero(hero: Hero) {
        this.code = [];
        this.deck1 = [];
        this.deck2 = [];
        this.drafted = [];
        this.hero = hero;
    }

    addCard(card: Card) {
        this.drafted.push(''+card.dbfId);
        if (card.rarity === 'LEGENDARY') this.deck1.push(card.dbfId);
        else this.deck2.push(card.dbfId);
        this.removeCardFromPool(card);
    }

    removeCardFromPool(card) {
        this.cards.splice(this.cards.findIndex(c => c.id === card.id), 0);
    }

    generateCode() {
        this.code.push(0);
        this.code.push(0);
        this.code.push(0);
        this.code.push(0);
        this.code.push(this.hero.dbfId);
        this.code.push(this.deck1.length);
        for (let i = 0; i < this.deck1.length; i++) {
            this.code.push(this.deck1[i]);
        }
        this.code.push(this.deck2.length);
        for (let i = 0; i < this.deck2.length; i++) {
            this.code.push(this.deck2[i]);
        }
        this.code.push(0);
        return base64.encode(this.code.join(''));
    }
}