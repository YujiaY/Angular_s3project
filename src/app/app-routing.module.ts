import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth/auth-guard.service';

const appRoute: Routes = [
  // { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: '', component: HomeComponent},
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},

  //Protecting Lazy Loaded Routes with canLoad:
  // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard] },
  //End of note.
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export  class AppRoutingModule {

}
