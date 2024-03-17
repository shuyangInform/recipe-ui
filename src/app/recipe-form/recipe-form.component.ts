import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {

  model={id:null,name:null,description:null}

constructor(private router: Router,private service:RecipeService) { }

  ngOnInit() {
    this.service.getRecipe(this.router.url.split('/')[2]).subscribe((data: any) => {
      this.model = data;
    });
  }
  onSubmit() {
      if(this.model.id){
        //update
        this.service.updateRecipe(this.model,this.model.id).subscribe((data: any) => {
          this.router.navigate(['/']);
        });
      }else{
        //create
        this.service.createRecipe(this.model).subscribe((data: any) => {
          this.router.navigate(['/']);
        });
      }
      // this.router.navigate(['/']);
  }

}
