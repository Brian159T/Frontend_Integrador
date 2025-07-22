import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.http.get<any>('http://localhost:5000/api/usuarios').subscribe({
      next: (respuesta) => {
        this.usuarios = respuesta.usuarios;
      },
      error: (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    });
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.http.delete(`http://localhost:5000/api/usuarios/${id}`).subscribe({
        next: () => {
          this.usuarios = this.usuarios.filter(u => u.id_usuarios !== id);
        },
        error: (error) => {
          console.error('Error al eliminar usuario:', error);
        }
      });
    }
  }

  editarUsuario(usuario: any): void {
    const datosActualizados = {
      Correos: prompt('Nuevo correo:', usuario.Correos) || usuario.Correos,
      Latitudes: prompt('Nuevas Latitudes:', usuario.Latitudes) || usuario.Latitudes,
      Longitudes: prompt('Nuevas Longitudes:', usuario.Longitudes) || usuario.Longitudes,
      Celulares: prompt('Nuevo celular:', usuario.Celulares) || usuario.Celulares,
      Nombres: prompt('Nuevo nombre:', usuario.Nombres) || usuario.Nombres
    };

    this.http.put(`http://localhost:5000/api/usuarios/${usuario.id_usuarios}`, datosActualizados).subscribe({
      next: () => {
        this.obtenerUsuarios(); // Recargar
      },
      error: (error) => {
        console.error('Error al actualizar usuario:', error);
      }
    });
  }
}
