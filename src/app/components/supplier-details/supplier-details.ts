import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../../models/supplier';
import { SupplierService } from '../../services/supplier';

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-details.html',
  styleUrls: ['./supplier-details.css']
})
export class SupplierDetailsComponent implements OnInit {

  supplier: Supplier | undefined;
  saveMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.supplier = this.supplierService.getSupplierById(id);
    });
  }

  saveChanges(): void {
    if (this.supplier) {
      this.supplierService.updateSupplier(this.supplier);
      this.saveMessage = 'Supplier updated successfully!';
    }
  }

  goBack(): void {
    this.router.navigate(['/suppliers']);
  }
}