import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBindingComponent {

  // 1. Interpolation
  studentName: string = 'Andrei Louie Beran';
  course: string = 'APPDEV1';
  year: number = 2024;

  // 2. Property Binding
  isDisabled: boolean = true;
  imageUrl: string = 'https://via.placeholder.com/150';
  altText: string = 'Placeholder Image';
  buttonLabel: string = 'Click Me';

  // 3. Event Binding
  clickCount: number = 0;
  lastKey: string = 'None';
  isHovered: boolean = false;

  onButtonClick(): void {
    this.clickCount++;
  }

  onKeyPress(event: KeyboardEvent): void {
    this.lastKey = event.key;
  }

  onMouseEnter(): void { this.isHovered = true; }
  onMouseLeave(): void { this.isHovered = false; }

  // 4. Two-way Data Binding
  twoWayName: string = '';
  twoWayEmail: string = '';
  twoWayAge: number = 0;

  // 5. Signals
  counter = signal<number>(0);
  signalMessage = signal<string>('Hello from Signal!');

  increment(): void { this.counter.update(v => v + 1); }
  decrement(): void { this.counter.update(v => v - 1); }
  resetCounter(): void { this.counter.set(0); }
  updateMessage(e: Event): void {
    this.signalMessage.set((e.target as HTMLInputElement).value);
  }

  // 6. Class & Style Binding
  isActive: boolean = false;
  selectedColor: string = '#00f5ff';
  fontSize: number = 16;

  toggleActive(): void { this.isActive = !this.isActive; }
}