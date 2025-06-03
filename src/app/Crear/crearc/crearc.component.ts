import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crearc',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  templateUrl: './crearc.component.html',
  styleUrls: ['./crearc.component.css']
})
export class CrearcComponent implements OnInit {
  
  verPassword: boolean = false;

  registroForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    coordenadas: new FormControl('', Validators.required),
    celular: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    rol: new FormControl('Usuario')
  });

 

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.registroForm.valid) {
      const apiUrl = 'http://localhost:5000/api/registrar_usuario';
      this.http.post(apiUrl, this.registroForm.value).subscribe(
        (response) => {
          console.log('Formulario enviado con éxito:', response);
          this.snackBar.open('Cuenta Creada Correctamente.', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['custom-snackbar']
          });
          this.registroForm.reset({
            rol: 'Usuario'
          });
        },
        (error) => {
          console.error('Error al enviar el formulario:', error);
          this.snackBar.open('Error al enviar el formulario.', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
        }
      );
    } else {
      this.snackBar.open('Por favor, complete el formulario correctamente.', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['error-snackbar']
      });
    }
  }
}
