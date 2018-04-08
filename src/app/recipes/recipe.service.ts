import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Schnitzel',
            'This is test',
            'https://goo.gl/Nv1k5U',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger',
            'This is test',
            'https://goo.gl/CzK7CT',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Buns', 2)
            ]),
        new Recipe(
            'A Test3',
            'This is test',
            'https://goo.gl/XtBLs2',
            []),
    ];

    constructor(private slService: ShoppingListService) {
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIgredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
