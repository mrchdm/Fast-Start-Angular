import { Component } from '@angular/core';
import { AuthService } from './modules/login/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fast-start-angular';


  isAuthenticated = true;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  isAuth(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }
}
