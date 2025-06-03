import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  verPassword: boolean = false;

  registroForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  onSubmit() {
    if (this.registroForm.valid) {
      const apiUrl = 'http://localhost:5000/api/control';

      const datos = {
        email: this.registroForm.value.correo,
        contrasena: this.registroForm.value.password,
      };

      this.http.post(apiUrl, datos).subscribe(
        (response: any) => {
          this.snackBar.open(`Bienvenido ${response.nombre}`, 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['custom-snackbar'],
          });

          this.registroForm.reset();

          // Redirigir según el rol recibido
          if (response.rol === 'Administrador') {
            this.router.navigate(['/Dashboard']);
          } else {
            this.router.navigate(['/Dashboard_usuario']);
          }
        },
        (error) => {
          this.snackBar.open('Credenciales incorrectas.', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          });
        }
      );
    } else {
      this.snackBar.open(
        'Por favor, complete todos los campos correctamente.',
        'Cerrar',
        {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['error-snackbar'],
        }
      );
    }
  }
}
