import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  constructor(private location: LocationStrategy) {
    // check if back or forward button is pressed.
    this.location.onPopState(() => {
      // set isBackButtonClicked to true.
      // this.someNavigationService.setBackClicked(true);
      return false;
    });
  }
  title = 'yinkweb';
}

