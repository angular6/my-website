import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MaterialModule} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable} from 'rxjs/Observable';

import { SkillItems } from '../../shared/skill-items/skill-items';
import {ComponentPageTitle} from '../page-title/page-title';
import {ComponentList} from './component-list';

const CATEGORY_ID = 'forms';
const mockActivatedRoute = {
  params: Observable.create(observer => {
    observer.next({id: CATEGORY_ID});
    observer.complete();
  })
};

describe('ComponentList', () => {
  let fixture: ComponentFixture<ComponentList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ComponentList],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        ComponentPageTitle,
        SkillItems,
      ]
    });

    fixture = TestBed.createComponent(ComponentList);
  }));

  it('should set the category from router params', done => {
    const component = fixture.componentInstance;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const actual = component.category;
      const expected = component.docItems._getTheCategoryById(CATEGORY_ID);
      expect(actual).toEqual(expected);
      done();
    });
  });
});
