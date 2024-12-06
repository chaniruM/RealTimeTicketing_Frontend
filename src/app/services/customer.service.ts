import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {}

  addCustomer(customer: any): Observable<any> {
    return this.http.post(this.apiUrl, customer);
  }

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}