import { Component } from '@angular/core';

@Component({
  selector: 'app-barras-usuario',
  imports: [],
  templateUrl: './barras-usuario.component.html',
  styleUrl: './barras-usuario.component.css'
})
export class BarrasUsuarioComponent {
  graficoBarrasUrl = 'http://localhost:5000/api/grafico-barras';
  

}
