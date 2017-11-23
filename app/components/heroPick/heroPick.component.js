"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_1 = require("../../models/hero");
var heroList_1 = require("../../services/heroList");
var api_1 = require("../../services/api");
var router_1 = require("@angular/router");
var HeroPickComponent = (function () {
    function HeroPickComponent(hList, api, router) {
        this.hList = hList;
        this.api = api;
        this.router = router;
        this.heroList = [];
        this.selectedHero = new hero_1.Hero();
        this.heroList = this.hList.getHeroList();
    }
    HeroPickComponent.prototype.onTap = function () {
        var randomNumber = Math.floor(Math.random() * 8) + 1;
        this.selectedHero = this.heroList.find(function (hero) { return hero.id === randomNumber; });
    };
    HeroPickComponent.prototype.select = function (hero) {
        this.api.setHero(hero.name.toUpperCase());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb1BpY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVyb1BpY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLDBDQUF1QztBQUN2QyxvREFBaUQ7QUFDakQsMENBQXVDO0FBQ3ZDLDBDQUF1QztBQVF2QztJQUlJLDJCQUFvQixLQUFlLEVBQVUsR0FBUSxFQUFVLE1BQWM7UUFBekQsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRjdFLGFBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBR3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFDSSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssWUFBWSxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxJQUFVO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBakJRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDMUMsQ0FBQzt5Q0FNNkIsbUJBQVEsRUFBZSxTQUFHLEVBQWtCLGVBQU07T0FKcEUsaUJBQWlCLENBa0I3QjtJQUFELHdCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0hlcm99IGZyb20gXCIuLi8uLi9tb2RlbHMvaGVyb1wiO1xuaW1wb3J0IHtIZXJvTGlzdH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2hlcm9MaXN0XCI7XG5pbXBvcnQge0FwaX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaGVyb1BpY2suY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2hlcm9QaWNrLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBIZXJvUGlja0NvbXBvbmVudCB7XG4gICAgc2VsZWN0ZWRIZXJvOiBIZXJvO1xuICAgIGhlcm9MaXN0OiBBcnJheTxIZXJvPiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoTGlzdDogSGVyb0xpc3QsIHByaXZhdGUgYXBpOiBBcGksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEhlcm8gPSBuZXcgSGVybygpO1xuICAgICAgICB0aGlzLmhlcm9MaXN0ID0gdGhpcy5oTGlzdC5nZXRIZXJvTGlzdCgpO1xuICAgIH1cblxuICAgIG9uVGFwKCkge1xuICAgICAgICBsZXQgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCkgKyAxO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSGVybyA9IHRoaXMuaGVyb0xpc3QuZmluZChoZXJvID0+IGhlcm8uaWQgPT09IHJhbmRvbU51bWJlcik7XG4gICAgfVxuXG4gICAgc2VsZWN0KGhlcm86IEhlcm8pIHtcbiAgICAgICAgdGhpcy5hcGkuc2V0SGVybyhoZXJvLm5hbWUudG9VcHBlckNhc2UoKSk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZHJhZnQnXSk7XG4gICAgfVxufSJdfQ==