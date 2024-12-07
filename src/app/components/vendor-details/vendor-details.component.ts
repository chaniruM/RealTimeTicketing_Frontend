import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ApiService} from '../../services/api.service';

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

  constructor(private apiService : ApiService) {}

  ngOnInit(): void {
    this.loadVendors();
  }

  loadVendors(): void {
    this.apiService.getVendors().subscribe((data) => {
      this.vendors = data;
    });
  }

  addVendor(): void {
    if (this.vendor.name && this.vendor.email && this.vendor.phone) {
      this.apiService.addVendor(this.vendor).subscribe(() => {
        this.loadVendors(); // Reload customer list
        this.vendor = { name: '', email: '', phone: '' }; // Clear the form
      });
    }
  }

  protected readonly releaseEvents = releaseEvents;
}
