import {RecipeDetail} from "./recipeDetail";
import {RecipeIngredient} from "./recipeIngredient";
import {RecipeInstruction} from "./recipeInstruction";

export enum IndicatorType {
  Veg = "Vegetarian",
  NonVeg = "Non-vegetarian",
}

export class Recipe {
  id: number;
  name: string;
  typeOfDish: IndicatorType;
  details: Array<RecipeDetail>;
  ingredients: Array<RecipeIngredient>;
  instructions: Array<RecipeInstruction>;

  constructor(id: number, name: string, typeOfDish: IndicatorType,
              details: Array<RecipeDetail>,
              ingredients: Array<RecipeIngredient>,
              instructions: Array<RecipeInstruction>) {
    this.id = id;
    this.name = name;
    this.typeOfDish = typeOfDish;
    this.details = details;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}
