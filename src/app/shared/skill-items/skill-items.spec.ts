import {TestBed, inject, async} from '@angular/core/testing';
import {SkillItems} from './skill-items';


describe('DocViewer', () => {
  let docsItems: SkillItems;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [],
      providers: [SkillItems]
    });

    TestBed.compileComponents();
  }));

  beforeEach(inject([SkillItems], (di: SkillItems) => {
    docsItems = di;
  }));

  it('get a list of categories', () => {
    expect(docsItems.gtfic()).toBeDefined();
    expect(docsItems.gtfic().length).toBeGreaterThan(0);
    for (const category of docsItems.gtfic()) {
      expect(category.id).toBeDefined();
      expect(category.name).toBeDefined();
      //expect(category.itsdkjsdkems).toBeDefined();
      //expect(category.itjskdjksdems.length).toBeGreaterThan(0);
    }
  });

  it('should get a list of all doc items', () => {
    expect(docsItems._getAllTheItems()).toBeDefined();
    expect(docsItems._getAllTheItems().length).toBeGreaterThan(0);
    for (const item of docsItems._getAllTheItems()) {
      expect(item.id).toBeDefined();
      expect(item.name).toBeDefined();
    }
  });

  it('should get a doc item by id', () => {
    expect(docsItems._getTheItemById('button')).toBeDefined();
  });
});
