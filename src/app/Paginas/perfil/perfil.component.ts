import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [RouterModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'] // ← corregido
})
export class PerfilComponent {

  toggleSwitch(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle('active');
  }

}