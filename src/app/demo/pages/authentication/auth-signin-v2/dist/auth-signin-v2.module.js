"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthSigninV2Module = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var auth_signin_v2_routing_module_1 = require("./auth-signin-v2-routing.module");
var auth_signin_v2_component_1 = require("./auth-signin-v2.component");
var AuthSigninV2Module = /** @class */ (function () {
    function AuthSigninV2Module() {
    }
    AuthSigninV2Module = __decorate([
        core_1.NgModule({
            declarations: [auth_signin_v2_component_1.AuthSigninV2Component],
            imports: [
                common_1.CommonModule,
                auth_signin_v2_routing_module_1.AuthSigninV2RoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ]
        })
    ], AuthSigninV2Module);
    return AuthSigninV2Module;
}());
exports.AuthSigninV2Module = AuthSigninV2Module;
