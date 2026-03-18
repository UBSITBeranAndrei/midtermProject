import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetailsComponent {

  @Input() selectedProduct: Product | null = null;
  @Input() showModal: boolean = false;
  @Output() modalClosed = new EventEmitter<void>();

  isEditing: boolean = false;
  updateMessage: string = '';
  editProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  closeModal(): void {
    this.isEditing = false;
    this.updateMessage = '';
    this.editProduct = null;
    this.modalClosed.emit();
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  startEditing(): void {
    this.editProduct = { ...this.selectedProduct! };
    this.isEditing = true;
    this.updateMessage = '';
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.editProduct = null;
    this.updateMessage = '';
  }

  saveChanges(): void {
    if (this.editProduct) {
      this.productService.edit(this.editProduct);
      this.selectedProduct = { ...this.editProduct };
      this.isEditing = false;
      this.updateMessage = 'Product updated successfully!';
    }
  }
}