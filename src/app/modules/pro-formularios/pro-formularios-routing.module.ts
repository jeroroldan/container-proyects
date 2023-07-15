import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosTodoComponent } from './formularios-todo/formularios-todo.component';
import { SidebarMenuComponent } from 'src/app/core/sidebar-menu/sidebar-menu.component';
import { ContenedorFormComponent } from './contenedor-form/contenedor-form.component';
import { ValidacionesFormuldariosComponent } from './validaciones-formuldarios/validaciones-formuldarios.component';
import { ValueAccesorComponent } from './value-accesor/value-accesor.component';

const routes: Routes = [
  {
    path: '',
    component: ContenedorFormComponent,
    children: [
      { path: 'formulario-todo', component: FormulariosTodoComponent },
      { path: 'controles-formularios', component: ValueAccesorComponent },
      { path: 'validaciones-formularios', component: ValidacionesFormuldariosComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProFormulariosRoutingModule { }
