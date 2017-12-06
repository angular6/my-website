import {Injectable} from '@angular/core';

export interface GuideItem {
  id: string;
  name: string;
  document: string;
}

const GUIDES = [
  {
    id: 'experience',
    name: 'Experience',
    document: '/assets/documents/about-me/experience.html',
  },
  {
    id: 'education',
    name: 'Education',
    document: '/assets/documents/about-me/education.html',
  }
];

@Injectable()
export class GuideItems {

  getAllItems(): GuideItem[] {
    return GUIDES;
  }

  getItemById(id: string): GuideItem {
    return GUIDES.find(i => i.id === id);
  }
}
