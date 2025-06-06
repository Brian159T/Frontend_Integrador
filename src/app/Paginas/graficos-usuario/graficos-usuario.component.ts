import { Component } from '@angular/core';

@Component({
  selector: 'app-graficos-usuario',
  templateUrl: './graficos-usuario.component.html',
  styleUrls: ['./graficos-usuario.component.css']
})
export class GraficosUsuarioComponent {
  graficoBarrasUrl = 'http://localhost:5000/api/grafico-barras';
  graficoTortaUrl = 'http://localhost:5000/api/grafico-torta';
}