import {Injectable} from '@angular/core';
import {Hero} from '../models/hero';
@Injectable()
export class HeroList {
    heroList: Array<Hero> = [
        {
            name: 'druid',
            id: 0,
            src: 'druid',
            dbfId: 274,
        },
        {
            name: 'hunter',
            id: 1,
            src: 'hunter',
            dbfId: 31,
        },
        {
            name: 'mage',
            id: 2,
            src: 'mage',
            dbfId: 637,
        },
        {
            name: 'paladin',
            id: 3,
            src: 'paladin',
            dbfId: 671,
        },
        {
            name: 'priest',
            id: 4,
            src: 'priest',
            dbfId: 813,
        },
        {
            name: 'rogue',
            id: 5,
            src: 'rogue',
            dbfId: 930,
        },
        {
            name: 'shaman',
            id: 6,
            src: 'shaman',
            dbfId: 1066,
        },
        {
            name: 'warlock',
            id: 7,
            src: 'warlock',
            dbfId: 893,
        },
        {
            name: 'warrior',
            id: 8,
            src: 'warrior',
            dbfId: 7,
        }
    ];

    getHeroList() {
        return this.heroList;
    }
}