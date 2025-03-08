import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Role', this.authService.isAuthenticated());
    console.log('url auth', state.url);
    if (this.authService.isAuthenticated()) {
      // If logged in and trying to access login or register,
      // redirect to respective dashboard
      const userRoles = this.authService.getUserRoles();
      if (userRoles.includes('admin')) {
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.router.navigate(['/dashboard']);
      }
      return false;
    }

    // Allow navigation to login or signup if not logged in
    return true;
  }
}
