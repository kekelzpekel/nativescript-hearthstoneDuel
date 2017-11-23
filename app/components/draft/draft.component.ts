import {Component, OnInit} from "@angular/core";
import {Api} from "../../services/api";

@Component({
    moduleId: module.id,
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.css']
})

export class DraftComponent implements OnInit {
    cards: any = [];

    constructor(private api: Api) {
        this.api.getJson();
    }

    ngOnInit() {
        this.api.getCards();
    }

    draft() {
        this.cards = this.api.getCards();
        console.log(this.cards);
    }
}