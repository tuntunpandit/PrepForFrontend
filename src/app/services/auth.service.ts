import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Get user roles from localStorage if user is authenticated
  getUserRoles(): string[] {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user?.roles || [];
  }

  // Mock function to handle user login
  login(username: string, password: string): void {
    const data = {
      authToken: 'mock-auth-token-12345',
      user: {
        id: 1,
        username: `${username}`,
        password: `${password}`,
        roles: ['user', 'admin'],
      },
    };
    const { authToken, user } = data;
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/']);
  }

  // Mock function to handle user logout
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }
}
