import { Component, signal, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.interface';
import { ProductService } from './product';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {

  private svc = inject(ProductService);

  displayedItems = signal<Product[]>([]);
  selectedProduct = signal<Product | null>(null);
  searchResult = signal<Product | null>(null);
  searchId = signal<number | null>(null);
  searchQuery = signal<string>('');
  updateMessage = signal<string>('');

  ngOnInit() {
    this.displayedItems.set(this.svc.getAll());
  }

  onSearch(e: Event) {
    const q = (e.target as HTMLInputElement).value;
    this.searchQuery.set(q);
    this.displayedItems.set(q ? this.svc.search(q) : this.svc.getAll());
  }

  viewProduct(product: Product) {
    this.selectedProduct.set(
      this.selectedProduct()?.id === product.id ? null : { ...product }
    );
  }

  searchById() {
    const id = this.searchId();
    if (id !== null) {
      const found = this.svc.getById(id);
      this.searchResult.set(found ? { ...found } : null);
      this.updateMessage.set(found ? '' : 'Product not found.');
    }
  }

  saveUpdate() {
    const result = this.searchResult();
    if (result) {
      this.svc.edit(result);
      this.displayedItems.set(this.svc.getAll());
      this.updateMessage.set('Product updated successfully!');
    }
  }

  deleteProduct(id: number) {
    this.svc.delete(id);
    this.displayedItems.set(this.svc.getAll());
    if (this.selectedProduct()?.id === id) this.selectedProduct.set(null);
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth_token');
  }

  login(): void { sessionStorage.setItem('auth_token', 'demo-token'); }
  logout(): void { sessionStorage.removeItem('auth_token'); }
}