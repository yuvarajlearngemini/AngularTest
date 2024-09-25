import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/AppComponent', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router: Router) { }
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  users = [
    { email: 'user@mail.com', password: 'password' },
    { email: 'user2@mail.com', password: 'password2' },
    { email: 'user3@mail.com', password: 'password3' }
  ];

  Login() {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      if (this.rememberMe) {
        sessionStorage.setItem('email', this.email);
        sessionStorage.setItem('password', this.password);
      }
      this.router.navigate(['/home']);
    } else {
      alert('Email atau password Salah!');
    }
  }
}
