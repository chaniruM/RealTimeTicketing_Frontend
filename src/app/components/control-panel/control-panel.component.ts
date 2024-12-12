import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ApiService} from '../../services/api.service';
import {LogDisplayComponent} from '../log-display/log-display.component';

/**
 * ControlPanelComponent handles the user interface for controlling the simulation.
 * It displays the current status of the ticket pool and provides buttons to start and stop the simulation.
 */
@Component({
  selector: 'app-control-panel',
    imports: [
        RouterLink, LogDisplayComponent
    ],
  templateUrl: './control-panel.component.html'
})

export class ControlPanelComponent implements OnInit{
  ticketCount: number = 0;
  ticketsToRelease: number = 0;
  ticketsSold: number = 0;

  constructor(private apiService: ApiService) {}

  /**
   * Initializes the component and starts fetching the simulation status periodically.
   */
  ngOnInit(): void {
    this.fetchStatus();
    setInterval(() => this.fetchStatus(), 1000); // Fetch status every second
  }

  /**
   * Fetches the current status of the ticket pool from the backend and updates the component's state.
   */
  fetchStatus() {
    this.apiService.getSimulationStatus().subscribe({
      next: (status) => {
        this.ticketCount = status.currentTicketCount;
        this.ticketsToRelease = status.ticketsToRelease;
        this.ticketsSold = status.ticketsSold;
      },
      error: (error) => {
        console.error('Error fetching simulation status:', error);
        alert('Error fetching simulation status');
      }
    });
  }

  /**
   * Sends a request to the backend to start the simulation.
   */
  startSimulation() {
    this.apiService.startSimulation().subscribe({
      next: (response) => {
        console.log('Simulation started successfully:', response);
        alert(response.message); // Display the message from the backend
      },
      error: (error) => {
        console.error('Error starting simulation:', error);
        alert('Error starting simulation');
      }
    });
  }

  /**
   * Sends a request to the backend to stop the simulation.
   */
  stopSimulation() {
    this.apiService.stopSimulation().subscribe({
      next: (response) => {
        console.log('Simulation stopped successfully:', response);
        alert(response.message); // Display the message from the backend
      },
      error: (error) => {
        console.error('Error stopping simulation:', error);
        alert('Error stopping simulation');
      }
    });
  }

}
