import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'


import { HomeComponent }  from './components/home.component';
import { GuideComponent }  from './components/guide.component';
import { ProcedureComponent }  from './components/procedure.component';
import { QAComponent }  from './components/qa.component';


const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'guidelines',
        component: GuideComponent
    },
    {
        path:'procedure',
        component: ProcedureComponent
    },
    {
        path:'qa',
        component: QAComponent
    }
]

    export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);