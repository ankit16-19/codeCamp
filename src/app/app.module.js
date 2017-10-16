"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home.component");
var guide_component_1 = require("./components/guide.component");
var procedure_component_1 = require("./components/procedure.component");
var qa_component_1 = require("./components/qa.component");
var left_component_1 = require("./components/left.component");
var right_component_1 = require("./components/right.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            guide_component_1.GuideComponent,
            procedure_component_1.ProcedureComponent,
            qa_component_1.QAComponent,
            left_component_1.LeftComponent,
            right_component_1.RightComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map