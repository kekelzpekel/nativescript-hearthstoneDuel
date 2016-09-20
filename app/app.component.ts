import {Component} from '@angular/core';
import {HeroList} from './heroList';
import * as _ from 'lodash';
import {Hero} from './models/hero';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [HeroList]
})
export class AppComponent {
	selectedHero: Hero;
	heroList: Array<Hero> = [];

	constructor(private hList: HeroList) {
		this.selectedHero = new Hero();
		this.heroList = this.hList.getHeroList();
		console.log(JSON.stringify(this.heroList, null, 4));
	}

	onTap() {
		var randomNumber = Math.floor(Math.random() * 8) + 1;
		console.log(randomNumber);
		this.selectedHero = _.find(this.heroList, function (q) {
			return q.id === randomNumber;
		});
		console.log(JSON.stringify(this.selectedHero, null, 4));
	}
}
