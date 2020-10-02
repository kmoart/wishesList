import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) //EL path vacío está apuntando a la dirección localhost:8100
  },
  //{
  //  path: 'agregar',
  //  loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule)
  //}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
