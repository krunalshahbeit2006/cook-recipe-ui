export enum IndicatorType {
  Veg = "Vegetarian",
  NonVeg = "Non-vegetarian",
}

export class RecipeDetail {
  dateOfCreation: Date;
  imageSrcUrl: string;
  typeOfDish: IndicatorType;
  numberOfPeopleDishSuitableFor: number;
  listOfIngredients: Array<String>;
  cookingInstructions: Array<String>;

  constructor(dateOfCreation: Date, imageSrcUrl: string, typeOfDish: IndicatorType,
              numberOfPeopleDishSuitableFor: number, listOfIngredients: Array<String>, cookingInstructions: Array<String>) {
    this.dateOfCreation = dateOfCreation;
    this.imageSrcUrl = imageSrcUrl;
    this.typeOfDish = typeOfDish;
    this.numberOfPeopleDishSuitableFor = numberOfPeopleDishSuitableFor;
    this.listOfIngredients = listOfIngredients;
    this.cookingInstructions = cookingInstructions;
  }
}
