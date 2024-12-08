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
// export class LogDisplayComponent implements Object, OnDestroy {
//   logs: string[] = [];
//   private logSocket!: WebSocketSubject<string>;
//   private logSubscription!: Subscription;
//
//   ngOnInit(): void {
//     this.logSocket = webSocket('ws://localhost:8085/logs');
//     this.logSubscription = this.logSocket.subscribe({
//       next: (message: string) => this.logs.unshift(message), // Add log at the beginning
//       error: (err: any) => console.error('WebSocket error:', err),
//       complete: () => console.log('WebSocket closed'),
//     });
//   }
//
//   ngOnDestroy(): void {
//     if (this.logSubscription) {
//       this.logSubscription.unsubscribe();
//     }
//     if (this.logSocket) {
//       this.logSocket.complete();
//     }
//   }
//
// }

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
