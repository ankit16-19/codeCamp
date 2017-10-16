"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home.component");
var guide_component_1 = require("./components/guide.component");
var procedure_component_1 = require("./components/procedure.component");
var qa_component_1 = require("./components/qa.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'guidelines',
        component: guide_component_1.GuideComponent
    },
    {
        path: 'procedure',
        component: procedure_component_1.ProcedureComponent
    },
    {
        path: 'qa',
        component: qa_component_1.QAComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map