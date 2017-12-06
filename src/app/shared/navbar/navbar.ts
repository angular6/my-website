import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})


export class NavBar {

  isUserLoggedIn: any;

  constructor(public af: AngularFire) {

    this.af.auth.subscribe(auth => {
      if (auth) { this.isUserLoggedIn = 1; } else { this.isUserLoggedIn = 0; }
    });

  }

  ngOnInit() {

  }
}