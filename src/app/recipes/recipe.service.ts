import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test', 'This is test', 'https://goo.gl/XtBLs2'),
        new Recipe('A Test2', 'This is test', 'https://goo.gl/XtBLs2'),
        new Recipe('A Test3', 'This is test', 'https://goo.gl/XtBLs2'),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
