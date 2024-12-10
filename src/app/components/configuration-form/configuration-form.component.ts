import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-configuration-form',
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './configuration-form.component.html',
  styleUrl: './configuration-form.component.scss'
})
export class ConfigurationFormComponent {
  config = {
    totalTickets: null,
    ticketReleaseRate: null,
    customerRetrievalRate: null,
    maxTicketCapacity: null,
  };

  submitted = false;
  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.submitted = true;
    if (this.isValidForm()) {
      this.apiService.saveConfiguration(this.config).subscribe(
        // () => {
        (response) => {
          // alert('Configuration saved successfully.');
          console.log('Configuration saved successfully:', response);
          alert(response.message); // Display the message from the backend
        },
        (error) => {
          console.error('Error saving configuration:', error);
          alert('Error saving configuration');
        }
      );
    } else {
      alert('Error saving configuration');
    }
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
      this.config.totalTickets !== null && this.config.totalTickets > 0 &&
      this.config.ticketReleaseRate !== null && this.config.ticketReleaseRate > 0 &&
      this.config.customerRetrievalRate !== null && this.config.customerRetrievalRate > 0 &&
      this.config.maxTicketCapacity !== null && this.config.maxTicketCapacity > 0
    );
  }

  onLoadConfig() {
    this.apiService.getPreviousConfiguration().subscribe(
      (config) => {
        if (config) {
          this.config = config;
          console.log('Previous configuration loaded successfully:', config);
          alert('Previous configuration loaded successfully!');
        }
      },
      (error) => {
        console.error('Error loading previous configuration:', error);
      }
    );
  }
}
