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
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const requiredRoles = route.data['roles'] as Array<string>;
    // If user is logged in
    if (this.authService.isAuthenticated()) {
      const userRoles = this.authService.getUserRoles(); // Retrieve roles of logged-in user

      // If the user has one of the required roles, allow access
      if (userRoles.some((role) => requiredRoles.includes(role))) {
        return true;
      }
    }

    // If no matching role, redirect to login or show an error
    this.router.navigate(['/auth/login']);
    return false;
  }
}
