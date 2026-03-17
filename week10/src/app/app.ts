import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Student],
  templateUrl: './app.html',
  // template: "<h1>Welcome to AngularJS</h1>",
  styleUrl: './app.css'
  // styles: "h1 {color: blue;}"
})
export class App {
  protected readonly title = signal('Angular Examples');
  city: string = 'Toronto'; 
  today: Date = new Date(2026, 0, 17);
  now: Date = new Date();

stud: any = {
  sid: 1,
  firstname: 'Breno',
  lastname: 'Lopes Mafra',
  city: 'Toronto',
}

  onAlertClick(): void {
    alert(`Button clicked! ${this.city} is a great city!`);
  }
}
