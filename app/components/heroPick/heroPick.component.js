"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var heroList_1 = require("../../services/heroList");
var api_1 = require("../../services/api");
var router_1 = require("@angular/router");
var HeroPickComponent = (function () {
    function HeroPickComponent(hList, api, router) {
        this.hList = hList;
        this.api = api;
        this.router = router;
        this.heroList = [];
        this.heroDraft = [];
        this.heroList = this.hList.getHeroList();
    }
    HeroPickComponent.prototype.ngOnInit = function () {
        var _loop_1 = function (i) {
            var randomNumber = Math.floor(Math.random() * 8) + 1;
            this_1.heroDraft.push(this_1.heroList.find(function (hero) { return hero.id === randomNumber; }));
        };
        var this_1 = this;
        for (var i = 0; i < 3; i++) {
            _loop_1(i);
        }
    };
    HeroPickComponent.prototype.selectHero = function (hero) {
        this.api.setHero(hero);
        this.router.navigate(['draft']);
    };
    HeroPickComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './heroPick.component.html',
            styleUrls: ['./heroPick.component.css'],
        }),
        __metadata("design:paramtypes", [heroList_1.HeroList, api_1.Api, router_1.Router])
    ], HeroPickComponent);
    return HeroPickComponent;
}());
exports.HeroPickComponent = HeroPickComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb1BpY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVyb1BpY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBRWhELG9EQUFpRDtBQUNqRCwwQ0FBdUM7QUFDdkMsMENBQXVDO0FBUXZDO0lBSUksMkJBQW9CLEtBQWUsRUFBVSxHQUFRLEVBQVUsTUFBYztRQUF6RCxVQUFLLEdBQUwsS0FBSyxDQUFVO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIN0UsYUFBUSxHQUFnQixFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUduQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELG9DQUFRLEdBQVI7Z0NBQ2EsQ0FBQztZQUNOLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyRCxPQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxZQUFZLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQzlFLENBQUM7O1FBSEQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUFqQixDQUFDO1NBR1Q7SUFDTCxDQUFDO0lBRUQsc0NBQVUsR0FBVixVQUFXLElBQVU7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFsQlEsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUMxQyxDQUFDO3lDQU02QixtQkFBUSxFQUFlLFNBQUcsRUFBa0IsZUFBTTtPQUpwRSxpQkFBaUIsQ0FtQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIZXJvfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2hlcm9cIjtcbmltcG9ydCB7SGVyb0xpc3R9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9oZXJvTGlzdFwiO1xuaW1wb3J0IHtBcGl9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGlcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlcm9QaWNrLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9oZXJvUGljay5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgSGVyb1BpY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGhlcm9MaXN0OiBBcnJheTxIZXJvPiA9IFtdO1xuICAgIGhlcm9EcmFmdDogSGVyb1tdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhMaXN0OiBIZXJvTGlzdCwgcHJpdmF0ZSBhcGk6IEFwaSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLmhlcm9MaXN0ID0gdGhpcy5oTGlzdC5nZXRIZXJvTGlzdCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpICsgMTtcbiAgICAgICAgICAgIHRoaXMuaGVyb0RyYWZ0LnB1c2godGhpcy5oZXJvTGlzdC5maW5kKGhlcm8gPT4gaGVyby5pZCA9PT0gcmFuZG9tTnVtYmVyKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RIZXJvKGhlcm86IEhlcm8pIHtcbiAgICAgICAgdGhpcy5hcGkuc2V0SGVybyhoZXJvKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydkcmFmdCddKTtcbiAgICB9XG59Il19