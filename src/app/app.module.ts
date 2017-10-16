import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home.component';
import { GuideComponent }  from './components/guide.component';
import { ProcedureComponent }  from './components/procedure.component';
import { QAComponent }  from './components/qa.component';
import { LeftComponent }  from './components/left.component';
import { RightComponent }  from './components/right.component';

import {routing} from './app.routing'


@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule,
      routing
    ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    GuideComponent,
    ProcedureComponent,
    QAComponent,
    LeftComponent,
    RightComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
