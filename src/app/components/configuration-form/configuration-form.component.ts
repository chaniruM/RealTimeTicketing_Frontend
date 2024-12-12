import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink} from '@angular/router';
import {ApiService} from '../../services/api.service';

/**
 * ConfigurationFormComponent handles the UI for configuring the real-time ticketing system.
 * It allows users to input configuration settings and submit them to the backend.
 */
@Component({
  selector: 'app-configuration-form',
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './configuration-form.component.html'
})
export class ConfigurationFormComponent {

  //Configuration object to store user input values.
  config = {
    totalTickets: null,
    ticketReleaseRate: null,
    customerRetrievalRate: null,
    maxTicketCapacity: null,
  };

  //Flag to indicate if the form has been submitted.
  submitted = false;

  constructor(private apiService: ApiService) {}

  /**
   * Handles form submission.
   * Validates the form,
   * sends the configuration to the backend,
   * and displays appropriate messages.
   */
  onSubmit() {
    this.submitted = true;
    if (this.isValidForm()) {
      this.apiService.saveConfiguration(this.config).subscribe({
        next: (response) => {
          console.log('Configuration saved successfully:', response);
          alert(response.message); // Display the message from the backend
        },
        error: (error) => {
          console.error('Error saving configuration:', error);
          alert('Error saving configuration');
        },
        complete: () => {
          console.log('Request completed.');
        }
      });
    } else {
      alert('Error saving configuration');
    }
  }

  //Resets the form fields to their initial values.
  resetForm() {
    this.config = {
      totalTickets: null,
      ticketReleaseRate: null,
      customerRetrievalRate: null,
      maxTicketCapacity: null,
    };
  }

  /**
   * Validates the form fields to ensure they are not null and have valid values.
   *
   * @returns {boolean} True if the form is valid, false otherwise.
   */
  isValidForm(): boolean {
    return (
      this.config.totalTickets !== null && this.config.totalTickets > 0 &&
      this.config.ticketReleaseRate !== null && this.config.ticketReleaseRate > 0 &&
      this.config.customerRetrievalRate !== null && this.config.customerRetrievalRate > 0 &&
      this.config.maxTicketCapacity !== null && this.config.maxTicketCapacity > 0
    );
  }

  /**
   * Loads the previous configuration from the backend and populates the form fields.
   */
  onLoadConfig() {
    this.apiService.getPreviousConfiguration().subscribe({
      next: (config) => {
        if (config) {
          this.config = config;
          console.log('Previous configuration loaded successfully:', config);
          alert('Previous configuration loaded successfully!');
        }
      },
      error: (error) => {
        console.error('Error loading previous configuration:', error);
        alert('Error loading previous configuration');
      },
      complete: () => {
        console.log('Configuration loading process completed.');
      }
    });
  }
}
