import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier';

// SupplierService: Centralized service for managing all supplier data
// Injected as a singleton across the entire application (providedIn: 'root')
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  // Private mock data array - simulates a database of suppliers
  private suppliers: Supplier[] = [
    { id: 1, supplierName: 'TechHub Distributors', location: 'Quezon City', email: 'techhub@mail.com', contactPerson: 'Juan dela Cruz', phone: '09171234567', productsSupplied: ['Keyboards', 'Mice', 'Headsets'], category: 'Electronics', status: 'Active' },
    { id: 2, supplierName: 'GamingGear PH', location: 'Makati City', email: 'gaminggear@mail.com', contactPerson: 'Maria Santos', phone: '09281234567', productsSupplied: ['Controllers', 'Gaming Chairs', 'Monitors'], category: 'Gaming', status: 'Active' },
    { id: 3, supplierName: 'SnackWorld Inc.', location: 'Cebu City', email: 'snackworld@mail.com', contactPerson: 'Pedro Reyes', phone: '09391234567', productsSupplied: ['Chips', 'Drinks', 'Candy'], category: 'Food', status: 'Active' },
    { id: 4, supplierName: 'LoadCenter PH', location: 'Davao City', email: 'loadcenter@mail.com', contactPerson: 'Ana Gomez', phone: '09471234567', productsSupplied: ['Prepaid Load', 'Globe Cards', 'Smart Cards'], category: 'Telecommunications', status: 'Active' },
    { id: 5, supplierName: 'PeripheralsPro', location: 'Pasig City', email: 'peripheralspro@mail.com', contactPerson: 'Carlo Mendoza', phone: '09561234567', productsSupplied: ['USB Hubs', 'Webcams', 'Microphones'], category: 'Electronics', status: 'Active' },
    { id: 6, supplierName: 'ConsoleMasters', location: 'Taguig City', email: 'consolemasters@mail.com', contactPerson: 'Lisa Reyes', phone: '09671234567', productsSupplied: ['PlayStation', 'Xbox', 'Nintendo Switch'], category: 'Gaming', status: 'Inactive' },
    { id: 7, supplierName: 'FurnitureForce', location: 'Mandaluyong', email: 'furnitureforce@mail.com', contactPerson: 'Ben Torres', phone: '09771234567', productsSupplied: ['Gaming Chairs', 'Desks', 'Monitor Stands'], category: 'Furniture', status: 'Active' },
    { id: 8, supplierName: 'CoolingZone PH', location: 'Caloocan City', email: 'coolingzone@mail.com', contactPerson: 'Iris Lim', phone: '09871234567', productsSupplied: ['Electric Fans', 'Air Coolers', 'Mini Fridges'], category: 'Appliances', status: 'Active' },
    { id: 9, supplierName: 'Apparel Kings', location: 'Baguio City', email: 'apparelkings@mail.com', contactPerson: 'Rex Villanueva', phone: '09911234567', productsSupplied: ['Tshirts', 'Slippers', 'Hoodies'], category: 'Apparel', status: 'Active' },
    { id: 10, supplierName: 'BeverageBoss', location: 'Las Piñas', email: 'beverageboss@mail.com', contactPerson: 'Nina Cruz', phone: '09921234567', productsSupplied: ['Mountain Dew', 'Energy Drinks', 'Water'], category: 'Beverages', status: 'Inactive' },
  ];

  // Returns all suppliers in the mock data array
  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  // Finds and returns a single supplier by its ID
  // Returns undefined if no supplier is found
  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(s => s.id === id);
  }

  // Updates an existing supplier by finding its index and replacing it
  // Uses spread operator to create a new object (immutability best practice)
  updateSupplier(updatedSupplier: Supplier): void {
    const idx = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
    if (idx !== -1) this.suppliers[idx] = { ...updatedSupplier };
  }
}