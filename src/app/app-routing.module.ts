import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioPageModule' 

  },
  {
    path: 'noticia', loadChildren: './noticia/noticia.module#NoticiaPageModule' 
  },
  { path: 'detalhe-noticia', loadChildren: './detalhe-noticia/detalhe-noticia.module#DetalheNoticiaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
