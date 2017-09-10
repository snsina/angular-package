(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.main = {}),global.core));
}(this, (function (exports,core) { 'use strict';

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
        core.Component({
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
        core.NgModule({
            imports: [],
            exports: [SngCardComponent],
            declarations: [SngCardComponent],
            providers: [],
        })
    ], SngCardModule);
    return SngCardModule;
}());

exports.SngCardModule = SngCardModule;
exports.SngCardComponent = SngCardComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=main.umd.js.map
