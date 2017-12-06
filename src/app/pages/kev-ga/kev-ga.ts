import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-guides',
  templateUrl: './kev-ga.html',
  styleUrls: ['./kev-ga.scss']
})

export class KevGa {

  name: any;
  state: string = '';

  constructor(
    public af: AngularFire,
    private router: Router) {

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      } else {
        this.name = 'sdkjsdjksdkj';
      }
    });

  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/');
  }

  ngOnInit() {}
}
