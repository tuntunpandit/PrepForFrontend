import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent, DashboardComponent, SubjectComponent } from './index';

@NgModule({
  declarations: [HeaderComponent, DashboardComponent, SubjectComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
