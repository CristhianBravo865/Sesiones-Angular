import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // <-- Importar esto también

export const routes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./app/app').then(m => m.AppComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./app/about/about').then(m => m.AboutComponent)
  },
  {
    path: 'hello',
    loadComponent: () => import('./app/hello-world/hello-world').then(m => m.HelloWorldComponent)
  }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`
})
export class RootComponent {}

bootstrapApplication(RootComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
