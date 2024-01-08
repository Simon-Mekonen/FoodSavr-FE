export enum AxiosMethod {
  Get = "get",
  Post = "post",
  // add more types when needed
}

export interface IIngredient {
  id: number;
  categoryId: number;
  name: string;
}

export interface IRecipe {
  id: number;
  name?: string;
  description?: string;
  imgLink?: string;
  portions: number;
  cookingTime: number;
}

export interface IRecipeBlob extends IRecipe {
  matches: number;
}

export interface IRecipeIngredient {
  ingredientId: number;
  quantity: number;
  measurement?: string | null;
  originalIngredient?: string;
}

export interface IRecipeSteps {
  row: number;
  text?: string;
}

export interface IIngredientConverter {
  categoryId: number;
  ingredientId: number;
  originalIngredient?: string;
  replacementIngredient?: string;
}
export interface IRecipeComplete {
  recipe: IRecipe;
  recipeSteps: IRecipeSteps[];
  recipeIngredient: IRecipeIngredient[];
  ingredientConverter: IIngredientConverter[];
}
