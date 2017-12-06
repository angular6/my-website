import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SkillItems } from '../../shared/skill-items/skill-items';
import { MdSidenav } from '@angular/material';
import { Router } from '@angular/router';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2'; //


const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-component-sidenav',
  templateUrl: './component-sidenav.html',
  styleUrls: ['./component-sidenav.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentSidenav {

  bwc: any;

  constructor(public docItems: SkillItems,
    private _router: Router,
    public a7: AngularFire) {

    this.a7.auth.subscribe(auth => {
      if (auth) { this.bwc = 1; } else { this.bwc = 0; }
    });

  }

  @ViewChild(MdSidenav) sidenav: MdSidenav;

  ngOnInit() {
    this._router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }

  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }
}
