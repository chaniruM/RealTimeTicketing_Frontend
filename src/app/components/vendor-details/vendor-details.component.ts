import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ApiService} from '../../services/api.service';

/**
 * VendorDetailsComponent manages the UI for viewing and adding vendors.
 * It allows users to see a list of existing vendors and add new ones.
 */
@Component({
  selector: 'app-vendor-details',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './vendor-details.component.html'
})
export class VendorDetailsComponent {
  //Object to store the new vendor details for adding.
  vendor = {
    name: '',
    email: '',
    phone: ''
  };

  //Array to store the list of fetched vendors.
  vendors: Array<{ name: string; email: string; phone: string }> = [];

  constructor(private apiService : ApiService) {}

  /**
   * Fetches the list of vendors from the backend on component initialization.
   */
  ngOnInit(): void {
    this.loadVendors();
  }

  /**
   * Loads the list of vendors by calling the ApiService.
   */
  loadVendors(): void {
    this.apiService.getVendors().subscribe((data) => {
      this.vendors = data;
    });
  }

  /**
   * Adds a new vendor by sending the vendor object to the backend API.
   * Validates the form fields before sending the request.
   */
  addVendor(): void {
    if (this.vendor.name && this.vendor.email && this.vendor.phone) {
      this.apiService.addVendor(this.vendor).subscribe({
        next: () => {
          this.loadVendors(); // Reload customer list
          this.vendor = { name: '', email: '', phone: '' }; // Clear the form
          alert('Vendor added successfully!'); // Alert the user
        },
        error: (error) => {
          console.error('Error adding vendor:', error);
          alert('Failed to add vendor. Please try again.');
        },
        complete: () => {
          console.log('Add vendor process completed.');
        }
      });
    } else {
      alert('Please fill in all fields to add a vendor.');
    }
  }
}
