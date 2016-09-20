import {Component} from '@angular/core';
import * as _ from 'lodash';
import {HeroList} from '../../shared/heroList';
import {Hero} from '../../models/hero';

@Component({
	templateUrl: 'pages/home/home.component.html',
	providers: [HeroList],
	styleUrls: ['pages/home/home.component.css']
})
export class HomePage {
	selectedHero: Hero;
	heroList: Array<Hero> = [];

	constructor(private hList: HeroList) {
		this.selectedHero = new Hero();
		this.heroList = this.hList.getHeroList();
		console.log(JSON.stringify(this.heroList, null, 4));
	}

	onTap() {
		var randomNumber = Math.floor(Math.random() * 8) + 1;
		this.selectedHero = _.find(this.heroList, function (q) {
			return q.id === randomNumber;
		});
	}
}
