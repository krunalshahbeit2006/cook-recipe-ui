export enum IndicatorType {
  Veg = "Vegetarian",
  NonVeg = "Non Vegetarian",
}

export class RecipeDetail {
  dateOfCreation: Date;
  imageSrcUrl: string;
  typeOfDish: IndicatorType;
  numberOfPeopleDishSuitableFor: number;
  listOfIngredients: Array<String>;
  cookingInstructions: Array<String>;
}
