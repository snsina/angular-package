import { Component, NgModule } from '@angular/core';

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}

var SngCardComponent = /** @class */ (function () {
    function SngCardComponent() {
    }
    SngCardComponent.prototype.ngOnInit = function () {
    };
    SngCardComponent = __decorate([
        Component({
            selector: 'sng-card',
            template: "Snsina Card presents",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], SngCardComponent);
    return SngCardComponent;
}());

var SngCardModule = /** @class */ (function () {
    function SngCardModule() {
    }
    SngCardModule = __decorate([
        NgModule({
            imports: [],
            exports: [SngCardComponent],
            declarations: [SngCardComponent],
            providers: [],
        })
    ], SngCardModule);
    return SngCardModule;
}());

export { SngCardModule, SngCardComponent };
//# sourceMappingURL=main.esm.js.map
