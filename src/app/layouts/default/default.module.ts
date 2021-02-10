import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { ExecutiveDashboardComponent } from 'src/app/modules/executive-dashboard/executive-dashboard.component';
import { ManagerDashboardComponent } from 'src/app/modules/manager-dashboard/manager-dashboard.component';
import { OperatorDashboardComponent } from 'src/app/modules/operator-dashboard/operator-dashboard.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ExecutiveDashboardComponent,
    ManagerDashboardComponent,
    OperatorDashboardComponent ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatMenuModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
