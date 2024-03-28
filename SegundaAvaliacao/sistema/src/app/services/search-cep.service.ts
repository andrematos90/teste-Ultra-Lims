import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchCepService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAddressService(cep: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${cep}/json`);
  }
}
