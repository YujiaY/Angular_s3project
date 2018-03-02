import {Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Input() index: number;

  //  public img1_source = "recipe-img1.jpg";


  constructor(private recipeService: RecipeService,
              private  router: Router,
              private  route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }


}
