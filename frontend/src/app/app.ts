import { Component, signal } from '@angular/core';
import { RouterOutlet , Router} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
   constructor(private router: Router) {}

  goToHelloPage(event: Event) {
    event.preventDefault(); // prevent page refresh
    this.router.navigate(['/hello']);
  }
}
