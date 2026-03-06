import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {

  selectedProduct: Product | null = null;
  showModal: boolean = false;

  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 2999.00,
      stock: 45,
      status: 'Available',
      description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
      brand: 'SoundMax',
      rating: 4.5,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Running Shoes',
      category: 'Footwear',
      price: 3500.00,
      stock: 0,
      status: 'Out of Stock',
      description: 'Lightweight running shoes with advanced cushioning for long-distance comfort.',
      brand: 'SwiftStep',
      rating: 4.2,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Mechanical Keyboard',
      category: 'Electronics',
      price: 4200.00,
      stock: 12,
      status: 'Limited',
      description: 'Compact TKL mechanical keyboard with RGB backlight and tactile switches.',
      brand: 'KeyMaster',
      rating: 4.7,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      name: 'Yoga Mat',
      category: 'Sports',
      price: 850.00,
      stock: 80,
      status: 'Available',
      description: 'Non-slip eco-friendly yoga mat with alignment lines, 6mm thick.',
      brand: 'ZenFit',
      rating: 4.3,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      name: 'Stainless Water Bottle',
      category: 'Lifestyle',
      price: 650.00,
      stock: 5,
      status: 'Limited',
      description: 'Double-wall insulated 500ml water bottle, keeps drinks cold for 24 hours.',
      brand: 'HydroLife',
      rating: 4.6,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 6,
      name: 'Gaming Mouse',
      category: 'Electronics',
      price: 1800.00,
      stock: 30,
      status: 'Available',
      description: 'Ergonomic gaming mouse with 16000 DPI sensor and programmable buttons.',
      brand: 'ClickPro',
      rating: 4.4,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 7,
      name: 'Leather Wallet',
      category: 'Accessories',
      price: 1200.00,
      stock: 0,
      status: 'Out of Stock',
      description: 'Slim genuine leather bifold wallet with RFID blocking technology.',
      brand: 'CarryWell',
      rating: 4.1,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 8,
      name: 'Desk Lamp',
      category: 'Home',
      price: 950.00,
      stock: 22,
      status: 'Available',
      description: 'LED desk lamp with adjustable brightness, color temperature, and USB charging port.',
      brand: 'LumiBright',
      rating: 4.0,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 9,
      name: 'Backpack 30L',
      category: 'Bags',
      price: 2200.00,
      stock: 8,
      status: 'Limited',
      description: 'Water-resistant 30L backpack with laptop compartment and ergonomic straps.',
      brand: 'TrailPack',
      rating: 4.5,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 10,
      name: 'Smartwatch',
      category: 'Electronics',
      price: 6500.00,
      stock: 18,
      status: 'Available',
      description: 'Fitness smartwatch with heart rate monitor, GPS, and 7-day battery life.',
      brand: 'TimeTech',
      rating: 4.8,
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];

  viewProductDetails(product: Product): void {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProduct = null;
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}