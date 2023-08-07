import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from fff{{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angularx
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
