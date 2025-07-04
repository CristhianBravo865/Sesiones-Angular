import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DataService, Post } from './data';
import { HelloWorldComponent } from './hello-world/hello-world';
import { UserComponent } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    HelloWorldComponent,
    UserComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Titulo';
  name = 'Cristhian Bravo';
  email = 'cbravoa@unsa.edu.pe';
  webpage = 'https://www.unsa.edu.pe/';
  hobbies = ['Leer', 'Programar', 'Correr'];
  show = false;
  users = ['ryan', 'joe', 'cameron', 'john'];
  posts: Post[] = []; // <- Agregado para tu servicio

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data.slice(0, 5);
    });
  }

  toggleHobbies() {
    this.show = !this.show;
  }

  showhobbies() {
    return this.show;
  }

  newHobby(hobby: string) {
    this.hobbies.push(hobby);
  }

  sayHello() {
    alert('Hola desde AppComponent');
  }

  deleteUser(user: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i] === user) {
        this.users.splice(i, 1);
        break;
      }
    }
  }

  addUser(newUser: HTMLInputElement) {
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }
}
