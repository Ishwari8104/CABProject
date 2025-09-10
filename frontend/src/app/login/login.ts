import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 loginData = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

onSubmit() {
  this.http.post<{ message: string }>('http://localhost:8080/api/login', this.loginData)
    .subscribe({
      next: (response) => {
        console.log(response.message);
        alert(response.message);
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert(error.error.message || 'Login failed');
      }
    });
}

}
