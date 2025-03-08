import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // apiURL: string = 'https://prep-for-frontend-api.vercel.app';
  apiURL: string = 'http://localhost:5001/api';
  constructor(private _http: HttpClient) {}
  // Get all users
  getUsers() {
    return this._http.get(`${this.apiURL}/users`);
  }
  // Get all questions
  getAllQuestions() {
    return this._http.get(`${this.apiURL}/questions`);
  }
  // Get all questions by subject
  getAllQuestionsBySubject(subjectId: string) {
    return this._http.get(`${this.apiURL}/questions/${subjectId}`);
  }
}
