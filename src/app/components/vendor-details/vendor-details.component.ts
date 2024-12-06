import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {VendorService} from '../../services/vendor.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-vendor-details',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './vendor-details.component.html',
  styleUrl: './vendor-details.component.scss'
})
export class VendorDetailsComponent {
  vendor = {
    name: '',
    email: '',
    phone: ''
  };

  vendors: Array<{ name: string; email: string; phone: string }> = [];

  constructor(private vendorService: VendorService) {}

  ngOnInit(): void {
    this.loadVendors();
  }

  loadVendors(): void {
    this.vendorService.getVendors().subscribe((data) => {
      this.vendors = data;
    });
  }

  addVendor(): void {
    if (this.vendor.name && this.vendor.email && this.vendor.phone) {
      this.vendorService.addVendor(this.vendor).subscribe(() => {
        this.loadVendors(); // Reload customer list
        this.vendor = { name: '', email: '', phone: '' }; // Clear the form
      });
    }
  }
}
