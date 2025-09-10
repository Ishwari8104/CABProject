import { Component, signal } from '@angular/core';
import { RouterOutlet , Router} from '@angular/router';
import { Login } from './login/login';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet,Login,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
   constructor(private router: Router) {}

  goToHelloPage() {
    this.router.navigate(['/login']);
  }
}
