import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiURL: string = 'http://localhost:5001/api';

  constructor(private router: Router, private http: HttpClient) {}

  saveQuestion(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/questions`, data);
  }
}
