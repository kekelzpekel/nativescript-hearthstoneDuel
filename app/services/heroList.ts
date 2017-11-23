import {Injectable} from '@angular/core';
import {Hero} from '../models/hero';
@Injectable()
export class HeroList {
    heroList: Array<Hero> = [
        {
            name: 'druid',
            id: 0,
            src: 'druid'
        },
        {
            name: 'hunter',
            id: 1,
            src: 'hunter'
        },
        {
            name: 'mage',
            id: 2,
            src: 'mage'
        },
        {
            name: 'paladin',
            id: 3,
            src: 'paladin'
        },
        {
            name: 'priest',
            id: 4,
            src: 'priest'
        },
        {
            name: 'rogue',
            id: 5,
            src: 'rogue'
        },
        {
            name: 'shaman',
            id: 6,
            src: 'shaman'
        },
        {
            name: 'warlock',
            id: 7,
            src: 'warlock'
        },
        {
            name: 'warrior',
            id: 8,
            src: 'warrior'
        }
    ];

    getHeroList() {
        return this.heroList;
    }
}