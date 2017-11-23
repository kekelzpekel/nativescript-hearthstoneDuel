import {Component} from "@angular/core";
import {Hero} from "../../models/hero";
import {HeroList} from "../../services/heroList";
import {Api} from "../../services/api";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: './heroPick.component.html',
    styleUrls: ['./heroPick.component.css'],
})

export class HeroPickComponent {
    selectedHero: Hero;
    heroList: Array<Hero> = [];

    constructor(private hList: HeroList, private api: Api, private router: Router) {
        this.selectedHero = new Hero();
        this.heroList = this.hList.getHeroList();
    }

    onTap() {
        let randomNumber = Math.floor(Math.random() * 8) + 1;
        this.selectedHero = this.heroList.find(hero => hero.id === randomNumber);
    }

    select(hero: Hero) {
        this.api.setHero(hero.name.toUpperCase());
        this.router.navigate(['draft']);
    }
}