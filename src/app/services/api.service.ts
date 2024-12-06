import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8085/api';

  constructor(private http: HttpClient) { }

  // Save configuration
  saveConfiguration(config: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/configuration`, config);
  }

  // Save thread counts
  saveThreadCounts(threadCounts: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/threads/save`, threadCounts);
  }

  // Start simulation
  startSimulation(): Observable<any> {
    return this.http.post(`${this.baseUrl}/threads/start`, {});
  }

  // Stop simulation
  stopSimulation(): Observable<any> {
    return this.http.post(`${this.baseUrl}/threads/stop`, {});
  }

  // Get current simulation status
  getSimulationStatus(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ticket-pool/status`);
  }



}
