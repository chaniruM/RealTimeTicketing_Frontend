import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';

/**
 * LogDisplayComponent handles displaying real-time logs from the server.
 * It connects to a WebSocket endpoint and displays incoming log messages.
 */
@Component({
  selector: 'app-log-display',
  imports: [
    NgForOf
  ],
  templateUrl: './log-display.component.html'
})

export class LogDisplayComponent implements OnInit {

  //WebSocket object used for communication with the server
  private logSocket: WebSocket | null = null;

  //Array to store the received log messages.
  public logs: string[] = [];

  /**
   * Initializes the component and establishes a WebSocket connection for logs.
   */
  ngOnInit(): void {
    this.logSocket = new WebSocket('ws://localhost:8083/logs');

    /**
     * Handles incoming messages from the WebSocket.
     * - Parses the message and adds it to the beginning of the logs array.
     * @param event The WebSocket message event.
     */
    this.logSocket.onmessage = (event) => {
      const message = event.data;
      this.logs.unshift(message);
    };

    /**
     * Handles WebSocket errors.
     * - Logs the error message to the console.
     * @param error The WebSocket error event.
     */
    this.logSocket.onerror = (error) => {
      console.error('WebSocket error', error);
    };
  }
}
