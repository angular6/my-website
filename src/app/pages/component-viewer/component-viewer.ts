import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SkillItems, SkillItem} from '../../shared/skill-items/skill-items';
import {ComponentPageTitle} from '../page-title/page-title';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';



@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.html',
  styleUrls: ['./component-viewer.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentViewer {
  componentDocItem: SkillItem;
  isUserLoggedIn: any; 


  constructor(private _route: ActivatedRoute,
              public af: AngularFire,
              public _componentPageTitle: ComponentPageTitle,
              public docItems: SkillItems) {


        this.af.auth.subscribe(auth => {if (auth) { this.isUserLoggedIn = 1; } else { this.isUserLoggedIn = 0;}});


    _route.params.subscribe(p => {
      this.componentDocItem = docItems._getTheItemById(p['id']);
      this._componentPageTitle.title = `${this.componentDocItem.name}`;
    });
  }
}
