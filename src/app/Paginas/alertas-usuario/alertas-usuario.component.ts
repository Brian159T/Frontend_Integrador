import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alertas-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alertas-usuario.component.html',
  styleUrls: ['./alertas-usuario.component.css']
})
export class AlertasUsuarioComponent implements OnInit {
  alertas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerAlertas();
  }

  obtenerAlertas(): void {
    this.http.get<any>('http://localhost:5000/api/alertas').subscribe({
      next: (respuesta) => {
        this.alertas = respuesta.alertas;
      },
      error: (error) => {
        console.error('Error al obtener alertas:', error);
      }
    });
  }
}
