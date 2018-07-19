import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Recipe} from "../recipe";
import {RecipeDetail, IndicatorType} from "../recipeDetail";
import { RecipeDetailComponent } from './recipe-detail.component';

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
    let recipe: Recipe;
    let recipeDetail: RecipeDetail;

    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;

    recipeDetail = new RecipeDetail(new Date("01/07/2018"), "../assets/images/recipes/11.jpg", IndicatorType.Veg, 2, ["1/4 cup butter shopping list", "3/4 cup milk", "3/4 cup flour", "3 eggs", "1 cup apple filling (or another flavor)"], ["Melt butter in an 8x8 inch pan", "Mix milk, flour, and eggs until smooth", "Pour into pan", "Spoon on apple filling", "Bake at 400 degrees Fahrenheit for 30 minutes", "Serve immediately, it will fall"]);
    recipe = new Recipe(11, "Pannenkoeken", recipeDetail);
    component.recipe = recipe;
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
    expect(compiled.querySelector('h2').textContent).toContain('Recipe Details');
  }));
});
