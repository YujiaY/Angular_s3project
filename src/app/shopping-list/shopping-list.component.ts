import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10 )
  ];

  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(addedIngredient: Ingredient) {
    if((addedIngredient.name !== '') && (addedIngredient.amount > 0 )) {
      this.ingredients.push(addedIngredient);
    }
    else alert("Please check the Name and Amount")
  }

}
