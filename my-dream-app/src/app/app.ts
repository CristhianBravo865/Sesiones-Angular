import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // se importa para los imports del componente
import { DataService, Post } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  template: `
    <div class="container">
      <h1>Hola {{ name }}</h1>
      <p>Edad: {{ age }}</p>

      <h2>Posts</h2>
      <ul>
        <li *ngFor="let post of posts">
          <strong>{{ post.title }}</strong><br />
          {{ post.body }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  name = 'Cristhian';
  age = 20;
  posts: Post[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data.slice(0, 5);
    });
  }
}
