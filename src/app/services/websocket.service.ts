// import { Injectable } from '@angular/core';
// import {Observable, Subject} from 'rxjs';
// import * as Stomp from '@stomp/stompjs';
// import SockJS from 'sockjs-client';
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class WebsocketService {
//   private stompClient: Stomp.Client | null = null;
//   private ticketStatusSubject = new Subject<any>();
//
//   connect(): void {
//     const socket = new SockJS('http://localhost:8085/ws-ticketing');
//     this.stompClient = Stomp.over(socket);
//
//     this.stompClient?.connect({}, () => {
//       console.log('Connected to WebSocket');
//       this.stompClient?.subscribe('/topic/ticket-status', (message) => {
//         if (message.body) {
//           this.ticketStatusSubject.next(JSON.parse(message.body));
//         }
//       });
//     });
//   }
//
//   disconnect(): void {
//     this.stompClient?.disconnect(() => {
//       console.log('Disconnected from WebSocket');
//     });
//   }
//
//   getTicketStatusUpdates(): Observable<any> {
//     return this.ticketStatusSubject.asObservable();
//   }
//
//   startSimulation(): Observable<any> {
//     // Adjust this as needed if your backend has a specific WebSocket endpoint for starting simulation
//     // Example using REST for now
//     return this.http.post('http://localhost:8085/api/threads/start', {});
//   }
//
//   stopSimulation(): Observable<any> {
//     // Adjust this as needed if your backend has a specific WebSocket endpoint for stopping simulation
//     // Example using REST for now
//     return this.http.post('http://localhost:8085/api/threads/stop', {});
//   }
//
//   constructor() { }
// }
