import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {
  ProfileComponent,
  LayoutComponent,
  QuestionsComponent,
  HeaderComponent,
} from './index';
import { AifC01Component } from './aif-c01/aif-c01.component';

@NgModule({
  declarations: [
    ProfileComponent,
    LayoutComponent,
    QuestionsComponent,
    HeaderComponent,
    AifC01Component,
  ],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
