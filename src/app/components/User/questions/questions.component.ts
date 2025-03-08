import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsBySubject } from 'src/app/misc/questions.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questionsBySubject: QuestionsBySubject = {};
  subjectId: string = '';
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.subjectId = params.get('id') || '';
    });
    this.loadQuestions();
  }

  loadQuestions() {
    this.userService.getAllQuestionsBySubject(this.subjectId).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.questionsBySubject = response.data;
        }
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
