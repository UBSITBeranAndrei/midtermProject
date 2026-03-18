import { Routes } from '@angular/router';
import { Services } from './services/services';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list';
import { SupplierDetailsComponent } from './components/supplier-details/supplier-details';
import { HomeComponent } from './components/home/home';
import { DataBindingComponent } from './components/data-binding/data-binding';

// Application route configuration
// Each route maps a URL path to a standalone Angular component
export const routes: Routes = [
  // Home page - landing/welcome screen
  { path: '', component: HomeComponent },

  // Products page - manages product CRUD using signals and shared service
  { path: 'products', component: Services },

  // Suppliers list - displays all suppliers in a table
  { path: 'suppliers', component: SuppliersListComponent },

  // Supplier details - parameterized route using :id to load specific supplier
  // ActivatedRoute reads the :id parameter to fetch the correct supplier
  { path: 'suppliers/:id', component: SupplierDetailsComponent },

  // Data binding examples - demonstrates all Angular binding types
  { path: 'data-binding', component: DataBindingComponent },

  // Wildcard route - redirects unknown paths back to home
  { path: '**', redirectTo: '' }
];