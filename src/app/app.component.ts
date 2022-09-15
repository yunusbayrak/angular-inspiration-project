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
    { path: '/comments', text: 'Comments' },
    { path: '/standalone', text: 'Standalone' },
  ];

  constructor(public location: Location) {}
}
