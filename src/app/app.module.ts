import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { ManagerDashboardComponent } from './modules/manager-dashboard/manager-dashboard.component';
import { ExecutiveDashboardComponent } from './modules/executive-dashboard/executive-dashboard.component';
import { OperatorDashboardComponent } from './modules/operator-dashboard/operator-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerDashboardComponent,
    ExecutiveDashboardComponent,
    OperatorDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
