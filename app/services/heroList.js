"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeroList = (function () {
    function HeroList() {
        this.heroList = [
            {
                name: 'druid',
                id: 0,
                src: 'druid'
            },
            {
                name: 'hunter',
                id: 1,
                src: 'hunter'
            },
            {
                name: 'mage',
                id: 2,
                src: 'mage'
            },
            {
                name: 'paladin',
                id: 3,
                src: 'paladin'
            },
            {
                name: 'priest',
                id: 4,
                src: 'priest'
            },
            {
                name: 'rogue',
                id: 5,
                src: 'rogue'
            },
            {
                name: 'shaman',
                id: 6,
                src: 'shaman'
            },
            {
                name: 'warlock',
                id: 7,
                src: 'warlock'
            },
            {
                name: 'warrior',
                id: 8,
                src: 'warrior'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb0xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZXJvTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUd6QztJQURBO1FBRUksYUFBUSxHQUFnQjtZQUNwQjtnQkFDSSxJQUFJLEVBQUUsT0FBTztnQkFDYixFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsT0FBTzthQUNmO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLFFBQVE7YUFDaEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsTUFBTTthQUNkO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsUUFBUTthQUNoQjtZQUNEO2dCQUNJLElBQUksRUFBRSxPQUFPO2dCQUNiLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxPQUFPO2FBQ2Y7WUFDRDtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsUUFBUTthQUNoQjtZQUNEO2dCQUNJLElBQUksRUFBRSxTQUFTO2dCQUNmLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLFNBQVM7YUFDakI7U0FDSixDQUFDO0lBS04sQ0FBQztJQUhHLDhCQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBbkRRLFFBQVE7UUFEcEIsaUJBQVUsRUFBRTtPQUNBLFFBQVEsQ0FvRHBCO0lBQUQsZUFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGVyb30gZnJvbSAnLi4vbW9kZWxzL2hlcm8nO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlcm9MaXN0IHtcbiAgICBoZXJvTGlzdDogQXJyYXk8SGVybz4gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdkcnVpZCcsXG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIHNyYzogJ2RydWlkJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaHVudGVyJyxcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgc3JjOiAnaHVudGVyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbWFnZScsXG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIHNyYzogJ21hZ2UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdwYWxhZGluJyxcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgc3JjOiAncGFsYWRpbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3ByaWVzdCcsXG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIHNyYzogJ3ByaWVzdCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3JvZ3VlJyxcbiAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgc3JjOiAncm9ndWUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdzaGFtYW4nLFxuICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICBzcmM6ICdzaGFtYW4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICd3YXJsb2NrJyxcbiAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgc3JjOiAnd2FybG9jaydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3dhcnJpb3InLFxuICAgICAgICAgICAgaWQ6IDgsXG4gICAgICAgICAgICBzcmM6ICd3YXJyaW9yJ1xuICAgICAgICB9XG4gICAgXTtcblxuICAgIGdldEhlcm9MaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZXJvTGlzdDtcbiAgICB9XG59Il19