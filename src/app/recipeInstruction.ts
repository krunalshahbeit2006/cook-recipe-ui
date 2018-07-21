export class RecipeInstruction {
  id: number;
  instruction: string;

  constructor(id: number, instruction: string) {
    this.id = id;
    this.instruction = instruction;
  }
}
