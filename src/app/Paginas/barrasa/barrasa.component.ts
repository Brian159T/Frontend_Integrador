import { Component } from '@angular/core';

@Component({
  selector: 'app-barrasa',
  imports: [],
  templateUrl: './barrasa.component.html',
  styleUrl: './barrasa.component.css'
})
export class BarrasaComponent {
  graficoBarrasUrl = 'http://localhost:5000/api/grafico-barras';

}
