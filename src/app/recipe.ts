import {RecipeDetail} from "./recipeDetail";

export class Recipe {
  id: number;
  name: string;
  recipeDetail: RecipeDetail;

  constructor(id: number, name: string, recipeDetail: RecipeDetail) {
    this.id = id;
    this.name = name;
    this.recipeDetail = recipeDetail;
  }
}
