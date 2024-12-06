import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-purchase-ticket',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './purchase-ticket.component.html',
  styleUrl: './purchase-ticket.component.scss'
})
export class PurchaseTicketComponent {
  ticket = {
    // matchName: '',
    // dateTime: '',
    // location: '',
    numberOfTickets: 0,
    purchaserName: '',
    email: '',
    contactNumber: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:8089/api/tickets/purchase', this.ticket).subscribe({
      next: (response) => {
        alert('Ticket purchased successfully!');
        this.ticket = {
          // matchName: '',
          // dateTime: '',
          // location: '',
          numberOfTickets: 0,
          purchaserName: '',
          email: '',
          contactNumber: ''
        };
      },
      error: (err) => {
        alert('Failed to purchase ticket. Please try again.');
        console.error(err);
      }
    });
  }
}
