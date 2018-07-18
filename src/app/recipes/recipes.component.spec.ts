import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { RecipeService } from '../recipe.service';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';

describe('RecipesComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecipesComponent,
        RecipeDetailComponent
      ],
      providers: [
        RecipeService,
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app-recipes', async(() => {
    expect(component).toBeTruthy();
  }));
  it(`should have as title 'My Favourite Recipes Overview'`, async(() => {
    expect(component.title).toEqual('My Favourite Recipes Overview');
  }));
  it('should render title in a h2 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Recipes Overview');
  }));
});
