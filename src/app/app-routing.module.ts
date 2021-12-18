import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/modules/main-page/main-page.module').then((m) => m.MainPageModule)
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./shared/modules/details-page/details-page.module').then((d) => d.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
