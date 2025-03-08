import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isSidebarOpen: boolean = true; // Sidebar state

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
