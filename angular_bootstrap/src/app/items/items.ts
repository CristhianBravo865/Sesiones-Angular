import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
  completed: boolean;
}

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './items.html',
  styleUrls: ['./items.css']
})
export class Items {
  items: Item[] = [
    { id: 1, name: 'Teclado', price: 120, quantity: 1, completed: false },
    { id: 2, name: 'Mouse', price: 60, quantity: 2, completed: false },
    { id: 3, name: 'Pantalla', price: 900, quantity: 1, completed: false }
  ];

  total: number = 0;

  constructor() {
    this.getTotal();
  }

  deleteItem(item: Item): void {
    this.items = this.items.filter(x => x.id !== item.id);
    this.getTotal();
  }

  toggleItem(item: Item): void {
    item.completed = !item.completed;
    this.getTotal();
  }

  getTotal(): void {
    this.total = this.items
      .filter(item => !item.completed)
      .map(item => item.price * item.quantity)
      .reduce((acc, val) => acc + val, 0);
  }
}
