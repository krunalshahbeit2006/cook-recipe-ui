import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  title = 'My Favourite Recipes Overview';

  selectedRecipe: Recipe;

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;

    console.log("selectedRecipe: ".concat(JSON.stringify(this.selectedRecipe)));
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
        .subscribe(recipes => this.recipes = recipes);
  }

}
