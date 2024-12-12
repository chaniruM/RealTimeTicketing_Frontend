import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8083/api';

  constructor(private http: HttpClient) { }

  // Save configuration
  saveConfiguration(config: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/configuration`, config);
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

  //Add a customer
  addCustomer(customer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/customers`, customer);
  }

  //Get all customers
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/customers`);
  }

  //Add a vendor
  addVendor(vendor: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/vendors`, vendor);
  }

  //Get all vendors
  getVendors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/vendors`);
  }

  //Retrieve previous configuration
  getPreviousConfiguration(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/configuration`);
  }

}
