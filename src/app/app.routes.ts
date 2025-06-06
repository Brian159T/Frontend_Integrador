import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { UsuariosComponent } from './Paginas/usuarios/usuarios.component';
import { AlertasComponent } from './Paginas/alertas/alertas.component';
import { DashboardComponent } from './Paginas/dashboard/dashboard.component';
import { MapasComponent } from './Paginas/mapas/mapas.component';
import { ReportesComponent } from './Paginas/reportes/reportes.component';
import { AlertasUsuarioComponent } from './Paginas/alertas-usuario/alertas-usuario.component';
import { DashboardUsuarioComponent } from './Paginas/dashboard-usuario/dashboard-usuario.component';
import { GraficosUsuarioComponent } from './Paginas/graficos-usuario/graficos-usuario.component';
import { ConfiguracionesComponent } from './Paginas/configuraciones/configuraciones.component';
import { ConfiguracionesUsuarioComponent } from './Paginas/configuraciones-usuario/configuraciones-usuario.component';
import { PerfilComponent } from './Paginas/perfil/perfil.component';
import { PerfilUsuarioComponent } from './Paginas/perfil-usuario/perfil-usuario.component';
import { MapasAdmiComponent } from './Paginas/mapas-admi/mapas-admi.component';
import { ReportesUsuarioComponent } from './Paginas/reportes-usuario/reportes-usuario.component';
import { ProyectosComponent } from './Paginas/proyectos/proyectos.component';
import { CrearcComponent } from './Crear/crearc/crearc.component';
import { LoginComponent } from './authentication/login/login.component';
import { GraficosAdmiComponent } from './Paginas/graficos-admi/graficos-admi.component';
import { CargaAlertasComponent } from './Paginas/carga-alertas/carga-alertas.component';
import { AnadirUsuarioComponent } from './Paginas/anadir-usuario/anadir-usuario.component';
import { BarrasUsuarioComponent } from './Paginas/barras-usuario/barras-usuario.component';
import { CirculouComponent } from './Paginas/circulou/circulou.component';
import { BarrasaComponent } from './Paginas/barrasa/barrasa.component';
import { CirculoaComponent } from './Paginas/circuloa/circuloa.component';


export const routes: Routes = [
   
  {
    path:'login',component:LoginComponent

  },
  {
    path:'circuloa',component:CirculoaComponent

  },
  {
    path:'barrasa',component:BarrasaComponent

  },
  {
    path:'circulou',component:CirculouComponent

  },
  {
    path:'barrasu',component:BarrasUsuarioComponent

  },
  {
    path:'anadir',component:AnadirUsuarioComponent

  },
  {
    path:'Graficos_admi',component:GraficosAdmiComponent

  },
  {
    path:'Cargar_alertas',component:CargaAlertasComponent

  },
  {
    path:'crear',component:CrearcComponent

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
    path:'',
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
    path:'Reportes',component:ReportesComponent
  },
  {
    path:'Alertas_usuario',component:AlertasUsuarioComponent
  },
  {
    path:'Dashboard_usuario',component:DashboardUsuarioComponent
  },
  {
    path:'Graficos_usuario',component:GraficosUsuarioComponent
  },
  {
    path:'Mapas_usuario',component:MapasComponent
  },
   {
    path:'Configuraciones_admi',component:ConfiguracionesComponent
  },
   {
    path:'Configuraciones_usuario',component:ConfiguracionesUsuarioComponent
  },
  {
    path:'Perfil',component:PerfilComponent
  },
  {
    path:'Perfil_usuario',component:PerfilUsuarioComponent
  },
  {
    path:'Mapas_admi',component:MapasAdmiComponent
  },
  {
    path:'Reportes_usuario',component:ReportesUsuarioComponent
  },
  {
    path:'Proyectos',component:ProyectosComponent
  },
  
  
  
];
export const appRouterProviders = [provideRouter(routes)];