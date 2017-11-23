import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import {HeroPickComponent} from "./components/heroPick/heroPick.component";
import {DraftComponent} from "./components/draft/draft.component";


const routes: Routes = [
    { path: "", redirectTo: "/hero", pathMatch: "full" },
    { path: "hero", component: HeroPickComponent },
    { path: "draft", component: DraftComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }