import {Component, OnInit} from "@angular/core";
import {Api} from "../../services/api";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.css']
})

export class DraftComponent implements OnInit {
    cards: any = [];
    draftNumber = 0;
    code: string;

    constructor(private api: Api, private router: Router) {
        this.api.getJson();
    }

    ngOnInit() {
        this.api.getCards();
        this.draft();
    }

    draft(card?: any) {
        if (this.draftNumber === 29) {
            this.code = this.api.generateCode();
        }
        if (card) {
            this.api.addCard(card);
            this.draftNumber++;
        }
        this.cards = this.api.getCards();
    }

    new() {
        this.router.navigate(['hero']);
    }
}