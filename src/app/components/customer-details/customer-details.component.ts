import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-customer-details',
  imports: [
    FormsModule, CommonModule, RouterLink
  ],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent {
  customer = {
    name: '',
    email: '',
    phone: ''
  };

  customers: Array<{ name: string; email: string; phone: string }> = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.apiService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  addCustomer(): void {
    if (this.customer.name && this.customer.email && this.customer.phone) {
      this.apiService.addCustomer(this.customer).subscribe(() => {
        this.loadCustomers(); // Reload customer list
        this.customer = { name: '', email: '', phone: '' }; // Clear the form
      });
    }
  }

  deleteCustomer(customerId: string): void {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.apiService.deleteCustomer(customerId).subscribe(() => {
        this.loadCustomers(); // Reload customer list after deletion
      });
    }
  }
}
