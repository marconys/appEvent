import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: 'home', icon: 'home' },
    { title: 'usuarios', url: 'usuarios', icon: 'people' },
    { title: 'Eventos', url: 'eventos', icon: 'bar-chart' },
   
  ];

  constructor() {}
 
}
