"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./components/home.component");
var top_bar_component_1 = require("./Components/top-bar/top-bar.component");
var side_bar_component_1 = require("./Components/side-bar/side-bar.component");
var dashboard_component_1 = require("./Components/dashboard/dashboard.component");
var login_component_1 = require("./Components/login/login.component");
var tables_component_1 = require("./Components/tables/tables.component");
var user_service_1 = require("./Services/user.service");
var auth_guard_1 = require("./Guards/auth.guard");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_2.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, top_bar_component_1.TopBarComponent, side_bar_component_1.SideBarComponent, dashboard_component_1.DashboardComponent, tables_component_1.TablesComponent, login_component_1.LoginComponent],
        providers: [auth_guard_1.AuthGuard, { provide: common_1.APP_BASE_HREF, useValue: '/' }, user_service_1.UserService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map