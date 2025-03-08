import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/Admin/admin.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/User/user.component';
import { HeaderComponent } from './components/User/header/header.component';
import { SidebarComponent } from './components/User/sidebar/sidebar.component';
import { DashboardComponent } from './components/User/dashboard/dashboard.component';
import { SubjectComponent } from './components/User/subject/subject.component';
import { SubjectDetailsComponent } from './components/User/subject-details/subject-details.component';
@NgModule({
  declarations: [AppComponent, AdminComponent, UserComponent, HeaderComponent, SidebarComponent, DashboardComponent, SubjectComponent, SubjectDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
