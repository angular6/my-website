import {Component, ViewEncapsulation} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  host: {
    '[class.docs-dark-theme]': 'isDarkTheme',
  },
  encapsulation: ViewEncapsulation.None,
})
export class MyApp {
  isDarkTheme = false;
  showShadow = false;

  constructor(router: Router) {
    router.events.subscribe((data: NavigationStart) => {
      this.showShadow = data.url.startsWith('/components');
    });
  }
}
