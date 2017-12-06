import { Injectable } from '@angular/core';

export interface SkillItem {
  id: string;
  name: string;
  examples ? : string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  items: SkillItem[];
}

const x = [

  {
    id: 'front_end',
    name: 'Front End',
    summary: '',
    items: [
      { id: 'node', name: 'Node' },
      { id: 'angular', name: 'Angular' },
      { id: 'es6', name: 'ES6' },
      { id: 'sass', name: 'Sass' },
      { id: 'libraries', name: 'Libraries' },
      { id: 'responsive_design', name: 'Responsive Design' }
    ]
  },
  {
    id: 'back end',
    name: 'Back End',
    summary: '',
    items: [
      { id: 'testing', name: 'Testing' },
      { id: 'vc', name: 'VC' },
      { id: 'code_reviews', name: 'Code Reviews' },
      { id: 'server_side', name: 'Server Side' },
      { id: 'software', name: 'Software' }
    ]
  },
  {
    id: 'custom',
    name: 'Custom',
    summary: '',
    items: [
      { id: 'custom1', name: 'Happiness'},
      { id: 'custom2', name: 'Barretstown'},
      { id: 'custom3', name: 'Logistics'},
      { id: 'custom4', name: 'Following Orders'},
      { id: 'custom5', name: 'M3'},
    ]
  },





];


const ALL_THE_ITEMS_ = x.reduce((result, category) => result.concat(category.items), []);

@Injectable()
export class SkillItems {


  gtfic(): SkillItem[] {
    return x;
  }

  _getAllTheItems(): SkillItem[] {
    return ALL_THE_ITEMS_;
  }

  _getTheItemById(id: string): SkillItem {
    return ALL_THE_ITEMS_.find(x => x.id === id);
  }

  _getTheCategoryById(id: string): SkillCategory {
    return x.find(x => x.id == id);
  }
}
