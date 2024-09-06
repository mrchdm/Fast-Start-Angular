import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export  default class LoginComponent implements OnInit  {
  @Output() isAuthenticated = new EventEmitter<boolean>();

  userLogin: any;
  userPassword: any;

  constructor(
    
    private readonly authService: AuthService) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public login() {
    this.authService.LogIn(this.userLogin, this.userPassword);
    if (this.authService.isAuthenticated()) {
      console.log("Выполнен вход в систему");
    }
    this.isAuthenticated.emit(this.authService.isAuthenticated());
    this.authService.GetUserInfo();
  }

}
