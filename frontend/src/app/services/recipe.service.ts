import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

<<<<<<< HEAD
import { IRecipe } from '../models/models';
import { recipesList } from '../pages/recipes-page/generator';
import { getCategories } from '../layouts/main/generator';
=======
import { ICategoriesList, IRecipe } from '../models/models';
import { recipesList } from '../pages/recipes-page/generator';
import { getCategories } from '../layouts/main/generator';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = {
  'Authorization': `Bearer ${localStorage.getItem('token')}`,
};
>>>>>>> a96d3f678b85bf0d0073e491f2e93b6641975979

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

<<<<<<< HEAD
  private categories = getCategories;
  private recipes = recipesList;

  constructor() { }
=======
  BASE_URL = "http://127.0.0.1:8000"
  private categories = getCategories;
  private recipes = recipesList;


  constructor(private client: HttpClient) { }
>>>>>>> a96d3f678b85bf0d0073e491f2e93b6641975979

  getRecipesByCategory(id: number): Observable<IRecipe[]> {
    const filteredRecipes = this.recipes.filter((recipe: IRecipe) => recipe.category_id === id);
    return of(filteredRecipes);
  }
<<<<<<< HEAD
=======

  getCategoryById(id: number): Observable<any> {
    return this.client.get<any>(`${this.BASE_URL}/categories/${id}`);
  }

  getCategoryByID(id: number): Observable<any> {
    return this.client.get<any>(`${this.BASE_URL}/categories/${id}`);
  }

  getCategories(): Observable<ICategoriesList[]> {
    return this.client.get<ICategoriesList[]>(`${this.BASE_URL}/categories`);
  }

  createRecipe(recipe: IRecipe): Observable<IRecipe> {
    console.log(headers);
    
    return this.client.post<IRecipe>(`${this.BASE_URL}/recipes/create/`, recipe, {headers});
  }
>>>>>>> a96d3f678b85bf0d0073e491f2e93b6641975979
}
