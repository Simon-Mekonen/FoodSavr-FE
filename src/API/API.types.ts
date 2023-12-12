export enum AxiosMethod {
  Get = 'get',
  Post = 'post',
  // add more types when needed
}

export interface IIngredient {
  id: number,
  categoryId: number,
  name: string
}

export interface IRecipe {
  id: number,
  name?: string,
  description?: string,
  imgUrl?: string,
  portions: number,
  cookingTime: number
}

export interface IRecipeBlob extends IRecipe {
  matches: number
}