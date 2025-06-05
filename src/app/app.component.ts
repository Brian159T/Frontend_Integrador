import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from './Components/menu/menu.component';
import { filter } from 'rxjs/operators';
import { MenuUsuarioComponent } from './Components/menu-usuario/menu-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,      // Necesario para *ngIf
    RouterOutlet,
    RouterLink,
    MenuComponent,
    MenuUsuarioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  currentRoute: string = '';

  constructor(private router: Router) {
    // Escuchar los cambios de ruta reales (NavigationEnd)
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }

  shouldShowMenu(): boolean {
    // Añade aquí las rutas donde deseas que SÍ se muestre el menú
    return [
      '/Dashboard',
      '/Alertas',
      '/Usuarios',
      '/Mapas',
      '/Reportes',
      '/Configuraciones_admi',
      '/Perfil',
      '/Mapas_admi',
      '/Proyectos',
      '/Graficos_admi',
      '/Cargar_alertas',
      '/anadir',

    ].includes(this.currentRoute);
  }

   shouldShowMenu_usuario(): boolean {
    // Añade aquí las rutas donde deseas que SÍ se muestre el menú
    return [
      '/Dashboard_usuario',
      '/Alertas_usuario',
      '/Graficos_usuario',
      '/Mapas_usuario',
      '/Configuraciones_usuario',
      '/Perfil_usuario',
      '/Reportes_usuario',
     
      
    ].includes(this.currentRoute);
  }
}
