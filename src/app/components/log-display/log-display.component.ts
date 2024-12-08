import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebSocketSubject} from 'rxjs/internal/observable/dom/WebSocketSubject';
import {webSocket} from 'rxjs/webSocket';
import {Subscription} from 'rxjs';
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
  // private logSocket!: WebSocketSubject<any>;
  private logSocket: WebSocket | null = null;
  public logs: string[] = [];

  ngOnInit(): void {
    // this.logSocket = new WebSocketSubject('ws://localhost:8085/logs');
    this.logSocket = new WebSocket('ws://localhost:8083/logs');
    // this.logSocket.subscribe(
    //   (message) => this.logs.push(message),
    //   (err) => console.error('WebSocket error', err)
    // );
    this.logSocket.onmessage = (event) => {
      const message = event.data;
      // this.logs.push(message); // Assuming message is plain text
      this.logs.unshift(message);
    };

    this.logSocket.onerror = (error) => {
      console.error('WebSocket error', error);
    };
  }
}
