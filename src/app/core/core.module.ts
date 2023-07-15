import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { ToolbarMenuComponent } from './toolbar-menu/toolbar-menu.component';


@NgModule({
  declarations: [
    SidebarMenuComponent,
    ToolbarMenuComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    SidebarMenuComponent,
    ToolbarMenuComponent
  ]
})
export class CoreModule { }
