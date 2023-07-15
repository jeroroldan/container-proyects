import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProFormulariosRoutingModule } from './pro-formularios-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulariosTodoComponent } from './formularios-todo/formularios-todo.component';
import { ContenedorFormComponent } from './contenedor-form/contenedor-form.component';
import { ValueAccesorComponent } from './value-accesor/value-accesor.component';
import { ValidacionesFormuldariosComponent } from './validaciones-formuldarios/validaciones-formuldarios.component';
import { SharedModule } from 'src/app/shared/card-generic/shared.module';


@NgModule({
  declarations: [
    FormulariosTodoComponent,
    ContenedorFormComponent,
    ValueAccesorComponent,
    ValidacionesFormuldariosComponent
  ],
  imports: [
    CommonModule,
    ProFormulariosRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    FormulariosTodoComponent
  ]
})
export class ProFormulariosModule { }
