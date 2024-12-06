import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CustomerService} from '../../services/customer.service';
import {RouterLink} from '@angular/router';

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

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  addCustomer(): void {
    if (this.customer.name && this.customer.email && this.customer.phone) {
      this.customerService.addCustomer(this.customer).subscribe(() => {
        this.loadCustomers(); // Reload customer list
        this.customer = { name: '', email: '', phone: '' }; // Clear the form
      });
    }
  }
}
