import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { UsuariosComponent } from './Paginas/usuarios/usuarios.component';
import { AlertasComponent } from './Paginas/alertas/alertas.component';
import { DashboardComponent } from './Paginas/dashboard/dashboard.component';
import { MapasComponent } from './Paginas/mapas/mapas.component';
import { ReportesComponent } from './Paginas/reportes/reportes.component';
export const routes: Routes = [
    {
    path: '',
    loadComponent: () => import('./app.component').then(m => m.AppComponent)
  },
  {
    path:'login',
    loadComponent: ()=>import('./authentication/login/login.component')

  },
  {
    path:'crear',
    loadComponent:()=>import('./Crear/crearc/crearc.component')

  },
  {
    path:'admi',
    loadComponent:()=>import('./InicioAdmi/inicio-a/inicio-a.component')

  },
  {
    path:'gestion',
    loadComponent:()=>import('./Gestionusuario/gestion/gestion.component')

  },
  {
    path:'iniciousuario',
    loadComponent:()=>import('./Iniciousuario/iniciou/iniciou.component')

  },
  {
    path:'land',
    loadComponent:()=>import('./landing/land/land.component')

  },
   {
    path:'prueba',
    loadComponent:()=>import('./landing/prueba/prueba.component')

  },
  {
    path:'Usuarios',component:UsuariosComponent
  },
  {
    path:'Alertas',component:AlertasComponent
  },
  {
    path:'Dashboard',component:DashboardComponent
  },
  {
    path:'Mapas',component:DashboardComponent
  },
  {
    path:'Reportes',component:DashboardComponent
  },
  
  
  
];
export const appRouterProviders = [provideRouter(routes)];