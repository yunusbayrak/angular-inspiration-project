import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular v14 Inspiration Project';
  menus = [
    { path: '/dashboard', text: 'Home' },
    { path: '/company', text: 'Company' },
  ];

  constructor(public location: Location) {}
}
