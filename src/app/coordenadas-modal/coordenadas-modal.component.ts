import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-coordenadas-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, NgIf],
  styles: [`
    .map-container {
      width: 100%;
      height: 80vh;
      padding: 0;
      margin: 0;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
    mat-dialog-content {
      padding: 0 !important;
      margin: 0 !important;
      overflow: hidden;
    }
    mat-dialog-actions {
      padding: 8px;
    }
  `],
  template: `
    <h2 mat-dialog-title>Ubicación en el Mapa</h2>
    <mat-dialog-content class="map-container">
      <iframe src="http://localhost:5000/api/mapa" allowfullscreen></iframe>
    </mat-dialog-content>
    <mat-dialog-actions align="start">
      <div *ngIf="coordenadas">
        <strong>Latitud:</strong> {{ coordenadas.lat }}<br>
        <strong>Longitud:</strong> {{ coordenadas.lng }}
      </div>
    </mat-dialog-actions>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cerrar</button>
    </mat-dialog-actions>
  `
})
export class CoordenadasModalComponent implements OnInit, OnDestroy {
  coordenadas: { lat: string; lng: string } | null = null;

  constructor(private dialogRef: MatDialogRef<CoordenadasModalComponent>) {}

  ngOnInit(): void {
    window.addEventListener('message', this.handleMessage);
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', this.handleMessage);
  }

  handleMessage = (event: MessageEvent) => {
    console.log('Mensaje recibido:', event.data);
    // Opcional: valida el origen si quieres seguridad extra
    // if (event.origin !== 'http://localhost:5000') return;

    if (event.data?.lat && event.data?.lng) {
      this.coordenadas = {
        lat: event.data.lat,
        lng: event.data.lng
      };

      // Cierra el modal y pasa las coordenadas al componente padre
      this.dialogRef.close(this.coordenadas);
    }
  }
}
