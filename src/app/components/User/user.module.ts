import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {
  ProfileComponent,
  LayoutComponent,
  QuestionsComponent,
  HeaderComponent,
} from './index';

@NgModule({
  declarations: [
    ProfileComponent,
    LayoutComponent,
    QuestionsComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
