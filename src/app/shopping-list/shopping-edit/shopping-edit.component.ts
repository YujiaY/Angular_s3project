<<<<<<< Updated upstream
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
=======
import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
>>>>>>> Stashed changes

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
<<<<<<< Updated upstream
export class ShoppingEditComponent implements OnInit, OnDestroy {
@ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode =false;
  editedItemIndex: number;
  editedItem: Ingredient;

=======
export class ShoppingEditComponent implements OnInit {
>>>>>>> Stashed changes

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startEditing
      .subscribe(
        (index: number)=> {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
        }
          )
        }
      );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
<<<<<<< Updated upstream

  onAddItem(form: NgForm) {
    const value = form.value;
      const newIngredient = new Ingredient(value.name, value.amount);
      if (this.editMode) {
        this.slService.updateIngredient(this.editedItemIndex, newIngredient);
      } else {
        this.slService.addIngredient(newIngredient);
      }
      this.editMode = false;
      form.reset();
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    if(this.editMode) {
      this.slService.deleteIngredient(this.editedItemIndex);
      this.onClear();
    }
=======
  onAddItem(form: NgForm) {
      const value = form.value;
      const newIngredient = new Ingredient(value.name, value.amount);
      this.slService.addIngredient(newIngredient);
>>>>>>> Stashed changes
  }

}
