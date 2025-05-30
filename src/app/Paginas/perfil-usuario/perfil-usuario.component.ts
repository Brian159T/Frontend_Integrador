import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  imports: [RouterModule],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent {
   toggleSwitch(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle('active');
  }

}
