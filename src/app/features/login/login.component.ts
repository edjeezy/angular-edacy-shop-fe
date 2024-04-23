import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.authService.login(this.email, this.password);
  }
}
