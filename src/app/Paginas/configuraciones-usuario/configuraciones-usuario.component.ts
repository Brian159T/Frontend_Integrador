import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configuraciones-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './configuraciones-usuario.component.html',
  styleUrl: './configuraciones-usuario.component.css'
})
export class ConfiguracionesUsuarioComponent {

  settings = [
    { icon: '💻', title: 'Sistema', description: 'Pantalla, notificaciones, aplicaciones' },
    { icon: '🔌', title: 'Dispositivos', description: 'Bluetooth, dispositivos varios' },
    { icon: '🌐', title: 'Red e Internet', description: 'Wi-Fi, modo avión, bloqueo' },
    { icon: '🎨', title: 'Personalización', description: 'Fondo, pantalla de bloqueo' },
    { icon: '👤', title: 'Cuentas', description: 'Cuentas, correo electrónico, sincronizar, trabajo, otros usuarios' },
    { icon: '⏰', title: 'Hora e idioma', description: 'Idioma, fecha' },
    { icon: '♿', title: 'Accesibilidad', description: 'Narrador, accesibilidad' },
    { icon: '🔒', title: 'Privacidad', description: 'Ubicación, cámara' },
    { icon: '🔄', title: 'Actualización y seguridad', description: 'Windows Update, seguridad' },
  ];

}
