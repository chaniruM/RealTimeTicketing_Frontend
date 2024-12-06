import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ConfigurationFormComponent} from '../components/configuration-form/configuration-form.component';

@Component({
  selector: 'app-configuration',
  imports: [
    FormsModule, CommonModule, RouterLink, ConfigurationFormComponent
  ],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss'
})
export class ConfigurationComponent {
  config = {
    totalTickets: null,
    ticketReleaseRate: null,
    customerRetrievalRate: null,
    maxTicketCapacity: null,
  };

  numVendors = 0;
  numCustomers = 0;

  // Function to handle increment button click
  incrementVendors() {
    this.numVendors++;
  }

  incrementCustomers() {
    this.numCustomers++;
  }

// Function to handle decrement button click (add validation to prevent negative values)
  decrementVendors() {
    if (this.numVendors > 0) {
      this.numVendors--;
    }
  }

  decrementCustomers() {
    if (this.numCustomers > 0) {
      this.numCustomers--;
    }
  }

  saveVendors() {
    this.submitted = true;
    // Validation for numVendors
    if (this.numVendors <= 0) {
      alert('Number of Vendor threads must be greater than 0.');
      return;
    }
    console.log('No of vendor threads:', this.numVendors);
    // Perform HTTP POST request to save vendor configuration (if applicable)
  }

  saveCustomers() {
    this.submitted = true;
    // Validation for numCustomers
    if (this.numCustomers <= 0) {
      alert('Number of Customer threads must be greater than 0.');
      return;
    }
    console.log('No of customer threads:', this.numCustomers);
    // Perform HTTP POST request to save customer configuration (if applicable)
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    if (this.isValidForm()) {
      console.log('Configuration Saved:', this.config);
    }
    // Here, make an HTTP POST request to save the configuration to the backend
  }

  resetForm() {
    this.config = {
      totalTickets: null,
      ticketReleaseRate: null,
      customerRetrievalRate: null,
      maxTicketCapacity: null,
    };
  }
  isValidForm(): boolean {
    // Ensure all fields are non-null
    return (
      this.config.totalTickets !== null &&
      this.config.ticketReleaseRate !== null &&
      this.config.customerRetrievalRate !== null &&
      this.config.maxTicketCapacity !== null
    );
  }
}
