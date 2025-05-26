import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'] // ← corregido
})
export class PerfilComponent {

  toggleSwitch(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle('active');
  }

}