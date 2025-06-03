import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-land',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export default class LandComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100); // espera a que el DOM esté listo
        }
      }
    }
  }
}
