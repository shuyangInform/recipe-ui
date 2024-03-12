import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

export const routes: Routes = [
{path: '', component: RecipeListComponent},
{path: 'recipes', component: RecipeFormComponent},
{path: 'recipes/:id', component: RecipeFormComponent},
];
