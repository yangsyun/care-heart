import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AccordionModule} from 'ngx-bootstrap';
import {COMPONENT_PROVIDERS, PIPE_PROVIDERS, SERVICE_PROVIDERS} from './app.providers';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENT_PROVIDERS,
    ...PIPE_PROVIDERS,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    AccordionModule.forRoot(),
  ],
  providers: [
    SERVICE_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
