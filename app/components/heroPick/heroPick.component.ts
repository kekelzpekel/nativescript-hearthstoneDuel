import {Component, OnInit} from "@angular/core";
import {Hero} from "../../models/hero";
import {HeroList} from "../../services/heroList";
import {Api} from "../../services/api";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: './heroPick.component.html',
    styleUrls: ['./heroPick.component.css'],
})

export class HeroPickComponent implements OnInit {
    heroList: Array<Hero> = [];
    heroDraft: Hero[] = [];

    constructor(private hList: HeroList, private api: Api, private router: Router) {
        this.heroList = this.hList.getHeroList();
    }

    ngOnInit() {
        for (let i = 0; i < 3; i++) {
            let randomNumber = Math.floor(Math.random() * 8) + 1;
            this.heroDraft.push(this.heroList.find(hero => hero.id === randomNumber));
        }
    }

    selectHero(hero: Hero) {
        this.api.setHero(hero);
        this.router.navigate(['draft']);
    }
}