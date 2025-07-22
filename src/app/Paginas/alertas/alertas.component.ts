import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestionar-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AlertasComponent implements OnInit {
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

  eliminarAlerta(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta alerta?')) {
      this.http.delete(`http://localhost:5000/api/alertas/${id}`).subscribe({
        next: () => {
          this.alertas = this.alertas.filter(a => a.id_alertas !== id);
        },
        error: (error) => {
          console.error('Error al eliminar alerta:', error);
        }
      });
    }
  }

  editarAlerta(alerta: any): void {
    const datosActualizados = {
      Cuencas: prompt('Nueva cuenca:', alerta.Cuencas) || alerta.Cuencas,
      Rios: prompt('Nuevo río:', alerta.Rios) || alerta.Rios,
      Niveles: prompt('Nuevo nivel:', alerta.Niveles) || alerta.Niveles,
      Condiciones: prompt('Nueva condición:', alerta.Condiciones) || alerta.Condiciones,
      Pronosticos: prompt('Nuevo pronóstico:', alerta.Pronosticos) || alerta.Pronosticos,
      Periodos: prompt('Nuevo periodo:', alerta.Periodos) || alerta.Periodos,
    };

    this.http.put(`http://localhost:5000/api/alertas/${alerta.id_alertas}`, datosActualizados).subscribe({
      next: () => this.obtenerAlertas(),
      error: (error) => {
        console.error('Error al actualizar alerta:', error);
      }
    });
  }

  alertarUsuario(alerta: any): void {
    this.http.post('http://localhost:5000/api/alerta_personalizada', {
      alerta: alerta
    }).subscribe({
      next: (respuesta) => {
        console.log('✅ Alertas enviadas:', respuesta);
        alert('📤 Alertas enviadas con éxito');
      },
      error: (error) => {
        console.error('❌ Error al enviar las alertas:', error);
        alert('⚠️ Ocurrió un error al enviar las alertas');
      }
    });
  }
}
