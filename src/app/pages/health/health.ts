import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


@Component({
  selector: 'health',
  templateUrl: './health.html',
  styleUrls: ['./health.scss']
})


export class Health {

  name: any;
  state: string = '';
  constructor(
    public af: AngularFire, private router: Router) {

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      } else {
        this.name = '';

      }
    });

  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/');
  }
  ngOnInit() {}


}
