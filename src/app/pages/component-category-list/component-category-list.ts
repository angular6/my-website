import { Component } from '@angular/core';
import { SkillItems } from '../../shared/skill-items/skill-items';
import { ComponentPageTitle } from '../page-title/page-title';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2'; //

@Component({
  selector: 'app-component-category-list',
  templateUrl: './component-category-list.html',
  styleUrls: ['./component-category-list.scss']
})
export class ComponentCategoryList {

  bwc: any;

  constructor(public my_skills: SkillItems,
    public _componentPageTitle: ComponentPageTitle,
    public a7: AngularFire) {

    this.a7.auth.subscribe(auth => {
      if (auth) { this.bwc = 1; } else { this.bwc = 0; }
    });
  }
  ngOnInit() {
    this._componentPageTitle.title = 'Skills';
  }
}
