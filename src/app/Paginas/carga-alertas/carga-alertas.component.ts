import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-carga-alertas',
  imports: [RouterLink,
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule],
  templateUrl: './carga-alertas.component.html',
  styleUrl: './carga-alertas.component.css'
})
export class CargaAlertasComponent implements OnInit {
  
  verPassword: boolean = false;

  registroForm = new FormGroup({
    cuenca: new FormControl('', Validators.required),
    rio: new FormControl('', Validators.required),
    nivel: new FormControl('', Validators.required),
    condicion: new FormControl('', Validators.required),
    pronostico: new FormControl('', Validators.required),
    periodo: new FormControl('', Validators.required)
  });

 

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.registroForm.valid) {
      const apiUrl = 'http://localhost:5000/api/registrar_alerta';
      this.http.post(apiUrl, this.registroForm.value).subscribe(
        (response) => {
          console.log('Formulario enviado con éxito:', response);
          this.snackBar.open('Alerta Guardada Correctamente.', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['custom-snackbar']
          });
          this.registroForm.reset({
            
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

