import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public LogIn(login: string, password: string): void {
    const token = '12345678'
    localStorage.setItem('login', login)
    localStorage.setItem('password', password)
    localStorage.setItem('token', token)
    console.log(login);
  }
  
  public LogOut(): void {
    console.log('logout')
    localStorage.removeItem('login')
    localStorage.removeItem('token')
  }
  
  public isAuthenticated(): boolean {
 
    return localStorage.getItem('login') != null

  }
  
  public GetUserInfo(): string | null {
    const userInfo = localStorage.getItem('login')
    console.log(userInfo)
    return userInfo 
  }
}
