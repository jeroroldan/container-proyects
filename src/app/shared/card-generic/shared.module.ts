import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGenericComponent } from './card-generic.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    CardGenericComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    CardGenericComponent
  ]
})
export class SharedModule { }
