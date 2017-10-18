"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var exception_1 = require("./exception");
var exceptions_service_1 = require("./exceptions.service");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(_exception) {
        this._exception = _exception;
        this.exception = new exception_1.IException();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.fetchList();
    };
    AppComponent.prototype.fetchList = function () {
        var _this = this;
        this._exception.getExceptions()
            .subscribe(function (iexceptions) { return _this.iexceptions = iexceptions; });
    };
    AppComponent.prototype.addException = function () {
        this._exception.addException(this.exception);
        this.fetchList();
        this.reset();
    };
    AppComponent.prototype.reset = function () {
        this.exception.name = null;
        this.exception.code = null;
        this.exception.message = null;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        providers: [exceptions_service_1.ExceptionService]
    }),
    __metadata("design:paramtypes", [exceptions_service_1.ExceptionService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map