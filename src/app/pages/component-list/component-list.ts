import {Component} from '@angular/core';
import {
  SkillItems,
  SkillCategory
} from '../../shared/skill-items/skill-items';
import {ActivatedRoute} from '@angular/router';
import {ComponentPageTitle} from '../page-title/page-title';

@Component({
  selector: 'app-components',
  templateUrl: './component-list.html',
  styleUrls: ['./component-list.scss']
})
export class ComponentList {
  category: SkillCategory;

  constructor(public docItems: SkillItems,
              private _componentPageTitle: ComponentPageTitle,
              private _route: ActivatedRoute) {
    _route.params.subscribe(p => {
      this.category = docItems._getTheCategoryById(p['id']);
      this._componentPageTitle.title = this.category.name;
    });
  }
}
