"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeroList = (function () {
    function HeroList() {
        this.heroList = [
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
    }
    HeroList.prototype.getHeroList = function () {
        return this.heroList;
    };
    HeroList = __decorate([
        core_1.Injectable()
    ], HeroList);
    return HeroList;
}());
exports.HeroList = HeroList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb0xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZXJvTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUd6QztJQURBO1FBRUksYUFBUSxHQUFnQjtZQUNwQjtnQkFDSSxJQUFJLEVBQUUsT0FBTztnQkFDYixFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsT0FBTztnQkFDWixLQUFLLEVBQUUsR0FBRzthQUNiO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLFFBQVE7Z0JBQ2IsS0FBSyxFQUFFLEVBQUU7YUFDWjtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxNQUFNO2dCQUNYLEtBQUssRUFBRSxHQUFHO2FBQ2I7WUFDRDtnQkFDSSxJQUFJLEVBQUUsU0FBUztnQkFDZixFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsU0FBUztnQkFDZCxLQUFLLEVBQUUsR0FBRzthQUNiO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLFFBQVE7Z0JBQ2IsS0FBSyxFQUFFLEdBQUc7YUFDYjtZQUNEO2dCQUNJLElBQUksRUFBRSxPQUFPO2dCQUNiLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxPQUFPO2dCQUNaLEtBQUssRUFBRSxHQUFHO2FBQ2I7WUFDRDtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsUUFBUTtnQkFDYixLQUFLLEVBQUUsSUFBSTthQUNkO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsS0FBSyxFQUFFLEdBQUc7YUFDYjtZQUNEO2dCQUNJLElBQUksRUFBRSxTQUFTO2dCQUNmLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxTQUFTO2dCQUNkLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSixDQUFDO0lBS04sQ0FBQztJQUhHLDhCQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBNURRLFFBQVE7UUFEcEIsaUJBQVUsRUFBRTtPQUNBLFFBQVEsQ0E2RHBCO0lBQUQsZUFBQztDQUFBLEFBN0RELElBNkRDO0FBN0RZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGVyb30gZnJvbSAnLi4vbW9kZWxzL2hlcm8nO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlcm9MaXN0IHtcbiAgICBoZXJvTGlzdDogQXJyYXk8SGVybz4gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdkcnVpZCcsXG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIHNyYzogJ2RydWlkJyxcbiAgICAgICAgICAgIGRiZklkOiAyNzQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdodW50ZXInLFxuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBzcmM6ICdodW50ZXInLFxuICAgICAgICAgICAgZGJmSWQ6IDMxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbWFnZScsXG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIHNyYzogJ21hZ2UnLFxuICAgICAgICAgICAgZGJmSWQ6IDYzNyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3BhbGFkaW4nLFxuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBzcmM6ICdwYWxhZGluJyxcbiAgICAgICAgICAgIGRiZklkOiA2NzEsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdwcmllc3QnLFxuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBzcmM6ICdwcmllc3QnLFxuICAgICAgICAgICAgZGJmSWQ6IDgxMyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3JvZ3VlJyxcbiAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgc3JjOiAncm9ndWUnLFxuICAgICAgICAgICAgZGJmSWQ6IDkzMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3NoYW1hbicsXG4gICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgIHNyYzogJ3NoYW1hbicsXG4gICAgICAgICAgICBkYmZJZDogMTA2NixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3dhcmxvY2snLFxuICAgICAgICAgICAgaWQ6IDcsXG4gICAgICAgICAgICBzcmM6ICd3YXJsb2NrJyxcbiAgICAgICAgICAgIGRiZklkOiA4OTMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICd3YXJyaW9yJyxcbiAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgc3JjOiAnd2FycmlvcicsXG4gICAgICAgICAgICBkYmZJZDogNyxcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBnZXRIZXJvTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVyb0xpc3Q7XG4gICAgfVxufSJdfQ==