import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL: string = 'https://prep-for-frontend-api.vercel.app';
  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get(`${this.apiURL}/users`);
  }
}
