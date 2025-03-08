import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './guards/role.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/Auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/Admin/admin.module').then((m) => m.AdminModule),
    canActivate: [RoleGuard],
    data: { roles: ['admin'] },
  },
  {
    path: '',
    loadChildren: () =>
      import('./components/User/user.module').then((m) => m.UserModule),
    canActivate: [RoleGuard],
    data: { roles: ['user'] },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
