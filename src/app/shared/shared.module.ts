import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { SharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule
  ]
})
export class SharedModule { }
