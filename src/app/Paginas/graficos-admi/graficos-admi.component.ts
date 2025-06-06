import { Component } from '@angular/core';

@Component({
  selector: 'app-graficos-admi',
  imports: [],
  templateUrl: './graficos-admi.component.html',
  styleUrl: './graficos-admi.component.css'
})
export class GraficosAdmiComponent {

  graficoBarrasUrl = 'http://localhost:5000/api/grafico-barras';
  graficoTortaUrl = 'http://localhost:5000/api/grafico-torta';

}
