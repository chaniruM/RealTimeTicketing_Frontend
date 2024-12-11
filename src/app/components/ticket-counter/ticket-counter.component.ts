import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ApiService} from '../../services/api.service';
import {LogDisplayComponent} from '../log-display/log-display.component';

@Component({
  selector: 'app-ticket-counter',
    imports: [
        RouterLink, LogDisplayComponent
    ],
  templateUrl: './ticket-counter.component.html',
  styleUrl: './ticket-counter.component.scss'
})

// export class TicketCounterComponent implements OnInit, OnDestroy{
export class TicketCounterComponent implements OnInit{
  ticketCount: number = 0;
  ticketsToRelease: number = 0;
  ticketsSold: number = 0;

  constructor(private apiService: ApiService) {}
  // constructor(private webSocketService: WebSocketService) {
  // }

  ngOnInit(): void {
    this.fetchStatus();
    setInterval(() => this.fetchStatus(), 1000); // Fetch status every 2 seconds
  }

  fetchStatus() {
    this.apiService.getSimulationStatus().subscribe(
      (status) => {
        this.ticketCount = status.currentTicketCount;
        this.ticketsToRelease = status.ticketsToRelease;
        this.ticketsSold = status.ticketsSold;
      },
      (error) => {
        console.error('Error fetching simulation status:', error);
      }
    );
  }

  startSimulation() {
    this.apiService.startSimulation().subscribe(
      (response) => {
        // alert('Configuration saved successfully.');
        console.log('Simulation started successfully:', response);
        alert(response.message); // Display the message from the backend
      },
      (error) => {
        console.error('Error starting simulation:', error);
        alert('Error starting simulation:');
      }
    );
  }

  stopSimulation() {
    this.apiService.stopSimulation().subscribe(
      (response) => {
        console.log('Simulation stopped successfully:', response);
        alert(response.message); // Display the message from the backend
      },
      (error) => {
        console.error('Error stopping simulation:', error);
        alert('Error stopping simulation:');
      }
    );
  }

}
