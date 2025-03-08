import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  categories = [
    { name: 'Angular', totalQuestions: 50, completed: 30, remaining: 20 },
    { name: 'JavaScript', totalQuestions: 60, completed: 40, remaining: 20 },
    { name: 'DSA', totalQuestions: 80, completed: 50, remaining: 30 },
  ];

  constructor() {}
}
