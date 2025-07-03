import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container">
      <h1>Formulario</h1>
      <form>
        <div class="campo">
          <label>Nombre:</label>
          <input type="text" [(ngModel)]="name" name="name" />
        </div>
        <div class="campo">
          <label>Edad:</label>
          <input type="number" [(ngModel)]="age" name="age" />
        </div>
      </form>
      <div class="resultado">
        <h2>Nombre: {{ name }}</h2>
        <h2>Edad: {{ age }}</h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 400px;
      margin: 2rem auto;
      font-family: Arial, sans-serif;
      padding: 1.5rem;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color: #f9f9f9;
    }
    .campo {
      margin-bottom: 1rem;
    }
    label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.25rem;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #aaa;
    }
    .resultado {
      margin-top: 2rem;
      padding: 1rem;
      background: #eee;
      border-radius: 6px;
    }
  `]
})
export class AppComponent {
  name: string = 'Cristhian Bravo';
  age: number = 20;
}
