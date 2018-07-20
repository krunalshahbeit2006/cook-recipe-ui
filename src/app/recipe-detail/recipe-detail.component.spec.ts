import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailComponent } from './recipe-detail.component';

import { RECIPES } from '../mock-recipes';

describe('RecipeDetailComponent', () => {
  let component: RecipeDetailComponent;
  let fixture: ComponentFixture<RecipeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecipeDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;
    component.recipe = RECIPES[0];
    fixture.detectChanges();
  });

  it('should create the app-recipe-detail', async(() => {
    expect(component).toBeTruthy();
  }));
  it(`should have as title 'My Favourite Recipe Details'`, async(() => {
    expect(component.title).toEqual('My Favourite Recipe Details');
  }));
  it('should render title in a h2 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toEqual((component.recipe.name).toUpperCase().concat(' Recipe Details'));
  }));
});
