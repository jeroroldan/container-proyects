import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


  const routes: Routes = [
    {
      path: '',
      redirectTo: 'sidebar',
      pathMatch: 'full',
    },
    {
      path: '',
      loadChildren: () =>
        import('../app/core/core.module').then((m) => m.CoreModule),
    },
    // {
    //   path: 'contact',
    //   loadChildren: () =>
    //     import('../app/modules/contact/contact.module').then(
    //       (m) => m.ContactModule
    //     ),
    // },
    // {
    //   path: 'about',
    //   loadChildren: () =>
    //     import('../app/modules/about/about.module').then((m) => m.AboutModule),
    // },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
