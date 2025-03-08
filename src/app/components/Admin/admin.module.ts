import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {
  HeaderComponent,
  DashboardComponent,
  SubjectComponent,
  LayoutComponent,
  SidebarComponent,
} from './index';
import { ReactiveFormsModule } from '@angular/forms';
import { CapitalizePipe } from 'src/app/pipes/capitalize.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    SubjectComponent,
    LayoutComponent,
    SidebarComponent,
    CapitalizePipe,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
