import { Component } from '@angular/core'; // Solo necesitas esta importación una vez

@Component({
  selector: 'app-nosotros',
  standalone:true,
  imports:[],
  template: `
    <h1>{{ Titulo}}</h1>
    <p>
      nosotros works!
    </p>
  `,
  styles: `
    h1{
      color: #00f;
    }
  `
})
export class NosotrosComponent {
  Titulo = 'Bienvenidos a la sección Nosotros'; 
}
