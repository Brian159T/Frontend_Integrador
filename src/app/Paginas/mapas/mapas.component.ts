import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrl: './mapas.component.css'
})
export class MapasComponent implements OnInit, OnDestroy {
  coordenadas: { lat: string; lng: string } | null = null;

  ngOnInit(): void {
    window.addEventListener('message', this.handleMessage);
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', this.handleMessage);
  }

  handleMessage = (event: MessageEvent) => {
    console.log('Mensaje recibido:', event.data);
    // ⚠️ Valida el origen si lo necesitas
    // if (event.origin !== 'http://localhost:5000') return;

    if (event.data?.lat && event.data?.lng) {
      this.coordenadas = {
        lat: event.data.lat,
        lng: event.data.lng
      };
    }
  }
}