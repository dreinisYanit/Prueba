import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  //{ path: 'home', component: HomeComponent },
  { 
    path: 'infinite', 
    loadChildren: () => { 
      return import('./components/infinite/infinite.module').then(m => m.InfiniteModule);
    }
  },
  { 
    path: '', 
    loadChildren: () => { 
      return import('./components/home/home.module').then(m => m.HomeModule);
    }
  },
  { 
    path: '**',
    loadChildren: () => {
      return import('./components/nopath/nopath.module').then(m => m.NopathModule);
    }
  }
];

//PreloadStrategy: para precargar modulos especificos y en base a una bandera que lee un servicio
//PreloadAllModules: precarga luego de haber hecho la carga inicial todos los modulos
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
