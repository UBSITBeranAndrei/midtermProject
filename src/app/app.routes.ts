import { Routes } from '@angular/router';
import { Services } from './services/services';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list';
import { SupplierDetailsComponent } from './components/supplier-details/supplier-details';
import { HomeComponent } from './components/home/home';
import { DataBindingComponent } from './components/data-binding/data-binding';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: Services },
  { path: 'suppliers', component: SuppliersListComponent },
  { path: 'suppliers/:id', component: SupplierDetailsComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: '**', redirectTo: '' }
];