import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  filtro = {
    fechaInicio: '',
    fechaFin: '',
    categoria: '',
    estado: ''
  };

  resultados = [
    { id: '001', fecha: '2024-01-15', categoria: 'Ventas', descripcion: 'Venta de producto A', estado: 'Completado', valor: '$1,250.00' },
    { id: '002', fecha: '2024-01-16', categoria: 'Marketing', descripcion: 'Campaña publicitaria', estado: 'Activo', valor: '$850.00' },
    { id: '003', fecha: '2024-01-17', categoria: 'Finanzas', descripcion: 'Pago de servicios', estado: 'Pendiente', valor: '$450.00' },
    { id: '004', fecha: '2024-01-18', categoria: 'Recursos Humanos', descripcion: 'Capacitación personal', estado: 'Completado', valor: '$320.00' }
  ];

  generarReporte() {
    alert('Generando reporte...');
  }

  exportarPDF() {
    alert('Exportando a PDF...');
  }

  exportarExcel() {
    alert('Exportando a Excel...');
  }

  limpiarFiltros() {
    this.filtro = {
      fechaInicio: '',
      fechaFin: '',
      categoria: '',
      estado: ''
    };
    alert('Filtros limpiados');
  }
}
