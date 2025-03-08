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

@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    SubjectComponent,
    LayoutComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
