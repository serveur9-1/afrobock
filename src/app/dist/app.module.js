"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var ngx_toastr_1 = require("ngx-toastr");
var app_routing_module_1 = require("./app-routing.module");
var shared_module_1 = require("./theme/shared/shared.module");
var app_component_1 = require("./app.component");
var admin_component_1 = require("./theme/layout/admin/admin.component");
var auth_component_1 = require("./theme/layout/auth/auth.component");
var navigation_component_1 = require("./theme/layout/admin/navigation/navigation.component");
var nav_content_component_1 = require("./theme/layout/admin/navigation/nav-content/nav-content.component");
var nav_group_component_1 = require("./theme/layout/admin/navigation/nav-content/nav-group/nav-group.component");
var nav_collapse_component_1 = require("./theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component");
var nav_item_component_1 = require("./theme/layout/admin/navigation/nav-content/nav-item/nav-item.component");
var nav_bar_component_1 = require("./theme/layout/admin/nav-bar/nav-bar.component");
var nav_left_component_1 = require("./theme/layout/admin/nav-bar/nav-left/nav-left.component");
var nav_search_component_1 = require("./theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component");
var nav_right_component_1 = require("./theme/layout/admin/nav-bar/nav-right/nav-right.component");
var configuration_component_1 = require("./theme/layout/admin/configuration/configuration.component");
var toggle_full_screen_1 = require("./theme/shared/full-screen/toggle-full-screen");
/* Menu Items */
var navigation_1 = require("./theme/layout/admin/navigation/navigation");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                admin_component_1.AdminComponent,
                auth_component_1.AuthComponent,
                navigation_component_1.NavigationComponent,
                nav_content_component_1.NavContentComponent,
                nav_group_component_1.NavGroupComponent,
                nav_collapse_component_1.NavCollapseComponent,
                nav_item_component_1.NavItemComponent,
                nav_bar_component_1.NavBarComponent,
                nav_left_component_1.NavLeftComponent,
                nav_search_component_1.NavSearchComponent,
                nav_right_component_1.NavRightComponent,
                configuration_component_1.ConfigurationComponent,
                toggle_full_screen_1.ToggleFullScreenDirective
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                shared_module_1.SharedModule,
                ng_bootstrap_1.NgbDropdownModule,
                ng_bootstrap_1.NgbTooltipModule,
                ng_bootstrap_1.NgbButtonsModule,
                ng_bootstrap_1.NgbTabsetModule,
                ngx_toastr_1.ToastrModule.forRoot()
            ],
            providers: [navigation_1.NavigationItem],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
