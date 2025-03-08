import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  // Handle form submission and call login method from AuthService if form is valid
  onSubmit(): void {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    }
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password);
  }
}
