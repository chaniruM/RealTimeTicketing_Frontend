import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-log-display',
  imports: [
    NgForOf
  ],
  templateUrl: './log-display.component.html',
  styleUrl: './log-display.component.scss'
})

export class LogDisplayComponent implements OnInit {
  private logSocket: WebSocket | null = null;
  public logs: string[] = [];

  ngOnInit(): void {
    this.logSocket = new WebSocket('ws://localhost:8083/logs');

    this.logSocket.onmessage = (event) => {
      const message = event.data;
      // this.logs.push(message);
      this.logs.unshift(message);
    };

    this.logSocket.onerror = (error) => {
      console.error('WebSocket error', error);
    };
  }
}
