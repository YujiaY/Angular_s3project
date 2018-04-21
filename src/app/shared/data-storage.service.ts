import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  stroreRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://recipe-book-ng5-jack.firebaseio.com/recipe.json?auth=' + token,
      this.recipeService.getRecipes());
  }
  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://recipe-book-ng5-jack.firebaseio.com/recipe.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[])=> {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
