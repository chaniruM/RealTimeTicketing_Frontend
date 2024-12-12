import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ApiService} from '../../services/api.service';

/**
 * CustomerDetailsComponent manages the UI for viewing and adding customers.
 * It allows users to see a list of existing customers and add new ones.
 */
@Component({
  selector: 'app-customer-details',
  imports: [
    FormsModule, CommonModule, RouterLink
  ],
  templateUrl: './customer-details.component.html'
})
export class CustomerDetailsComponent {

  /**
   * Object to store the new customer details for adding.
   */
  customer = {
    name: '',
    email: '',
    phone: ''
  };

  //Array to store the list of fetched customers.
  customers: Array<{ name: string; email: string; phone: string }> = [];

  constructor(private apiService: ApiService) {}

  /**
   * Fetches the list of customers from the backend on component initialization.
   */
  ngOnInit(): void {
    this.loadCustomers();
  }

  /**
   * Loads the list of customers by calling the ApiService.
   */
  loadCustomers(): void {
    this.apiService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  /**
   * Adds a new customer by sending the customer object to the backend API.
   * Validates the form fields before sending the request.
   */
  addCustomer(): void {
    if (this.customer.name && this.customer.email && this.customer.phone) {
      this.apiService.addCustomer(this.customer).subscribe({
        next: () => {
          this.loadCustomers(); // Reload customer list
          this.customer = { name: '', email: '', phone: '' }; // Clear the form
          alert('Customer added successfully!'); // Alert the user
        },
        error: (error) => {
          console.error('Error adding customer:', error);
          alert('Failed to add customer. Please try again.');
        },
        complete: () => {
          console.log('Add customer process completed.');
        }
      });
    } else {
      alert('Please fill in all fields to add a customer.');
    }
  }
}
