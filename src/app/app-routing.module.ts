import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


  const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      loadChildren: () =>
        import('../app/modules/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'contact',
      loadChildren: () =>
        import('../app/modules/contact/contact.module').then(
          (m) => m.ContactModule
        ),
    },
    {
      path: 'about',
      loadChildren: () =>
        import('../app/modules/about/about.module').then((m) => m.AboutModule),
    },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
