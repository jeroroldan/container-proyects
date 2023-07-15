import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'proyectos', component: PageHomeComponent },
      { path: '**', redirectTo: 'proyectos' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
