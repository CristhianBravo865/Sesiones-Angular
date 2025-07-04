import { Routes } from '@angular/router';
import { AppComponent } from './app';
import { Items } from './items/items';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: AppComponent },
  { path: 'carrito', loadComponent: () => import('./items/items').then(m => m.Items) }
];
