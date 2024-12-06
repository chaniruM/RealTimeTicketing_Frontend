import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private apiUrl = 'http://localhost:8080/api/vendors';

  constructor(private http: HttpClient) {}

  addVendor(vendor: any): Observable<any> {
    return this.http.post(this.apiUrl, vendor);
  }

  getVendors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
