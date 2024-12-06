import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-customer-vendor-config',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './customer-vendor-config.component.html',
  styleUrl: './customer-vendor-config.component.scss'
})
export class CustomerVendorConfigComponent {
  numVendors = 0;
  numCustomers = 0;

  constructor(private apiService: ApiService) {}

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

  saveThreadCounts() {
    this.submitted = true;
    if (this.numVendors <= 0) {
      alert('Number of Vendor threads must be greater than 0.');
      return;
    }
    if (this.numCustomers <= 0) {
      alert('Number of Customer threads must be greater than 0.');
      return;
    }

    const threadCounts = {
      numberOfVendors: this.numVendors,
      numberOfCustomers: this.numCustomers,
    };

    this.apiService.saveThreadCounts(threadCounts).subscribe(
      (response) => {
        // alert('Configuration saved successfully.');
        console.log('Thread counts saved successfully:', response);
        alert(response.message); // Display the message from the backend
      },
      (error) => {
        console.error('Error saving configuration:', error);
        alert('Error saving configuration');
      }
      // () => {
      //   alert('Thread counts saved successfully.');
      // },
      // (error) => {
      //   console.error('Error saving thread counts:', error);
      // }
    );
  }

  // saveThreadCounts() {
  //   this.submitted = true;
  //   // Validation for numCustomers
  //   if (this.numVendors <= 0) {
  //     alert('Number of Vendor threads must be greater than 0.');
  //     return;
  //   }
  //   if (this.numCustomers <= 0) {
  //     alert('Number of Customer threads must be greater than 0.');
  //     return;
  //   }
  //   console.log('No of customer threads:', this.numCustomers);
  //   // Perform HTTP POST request to save customer configuration (if applicable)
  // }

  submitted = false;
}
