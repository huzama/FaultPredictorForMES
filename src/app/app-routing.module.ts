import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ExecutiveDashboardComponent } from './modules/executive-dashboard/executive-dashboard.component';
import { ManagerDashboardComponent } from './modules/manager-dashboard/manager-dashboard.component';
import { OperatorDashboardComponent } from './modules/operator-dashboard/operator-dashboard.component';
const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: OperatorDashboardComponent
  },
  {
    path: 'executive',
    component: ExecutiveDashboardComponent
  },
  {
    path: 'manager',
    component: ManagerDashboardComponent
  },
  {
    path: 'operator',
    component: OperatorDashboardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
