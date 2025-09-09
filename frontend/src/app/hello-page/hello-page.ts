import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-page.html'
})
export class HelloPageComponent {
  response = '';

  constructor(private http: HttpClient) {}

  callApi() {
    this.http.get('http://localhost:8080/api/hello', { responseType: 'text' })
      .subscribe(res => {
        this.response = res;
      });
  }
}
