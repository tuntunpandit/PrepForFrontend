import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  questions: any[] = [];
  get user() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllQuestions().subscribe({
      next: (data: any) => {
        console.log(data);
        this.questions = data;
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
