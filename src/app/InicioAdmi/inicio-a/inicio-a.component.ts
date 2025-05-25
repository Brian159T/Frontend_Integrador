import { Component } from '@angular/core';
import { MenuComponent } from '../../Components/menu/menu.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-inicio-a',
  standalone:true,
  imports: [RouterOutlet,MenuComponent],
  templateUrl: './inicio-a.component.html',
  styleUrl: './inicio-a.component.css'
})
export default class InicioAComponent {

}
