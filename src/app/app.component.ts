import { Component } from '@angular/core';
import { ProgressColor } from '@progress/kendo-angular-progressbar';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public value = 100;
  public animation = true;
  public colors: ProgressColor[] = [
    {
      from: 0,
      to: 25,
      color: '#F42E17',
    },
    {
      from: 25,
      to: 50,
      color: '#F8DE7E',
    },
    {
      from: 50,
      to: 75,
      color: '#F2E349',
    },
    {
      from: 75,
      to: 100,
      color: '#4A9E24',
    },
  ];
}
