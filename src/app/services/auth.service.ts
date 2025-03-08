import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL: string = 'http://localhost:5001/api';

  constructor(private router: Router, private http: HttpClient) {}

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }
  // Get token from localStorage if user is authenticated
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Get user roles from localStorage if user is authenticated
  getUserRoles(): string[] {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user?.roles || [];
  }

  // Mock function to handle user login
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/auth/login`, {
      username,
      password,
    });
  }
  // Mock function to handle user registration
  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/auth/register`, {
      username,
      password,
    });
  }
  // Mock function to handle user logout
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }

  setUserDataToLocalStorage(data: any): void {
    const { token, user } = data;
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
}
