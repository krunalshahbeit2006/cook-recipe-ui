export class RecipeDetail {
  id: number;
  dateOfCreation: Date;
  numberOfPeopleDishSuitableFor: number;

  constructor(id: number, dateOfCreation: Date, numberOfPeopleDishSuitableFor: number) {
    this.id = id;
    this.dateOfCreation = dateOfCreation;
    this.numberOfPeopleDishSuitableFor = numberOfPeopleDishSuitableFor;
  }
}
