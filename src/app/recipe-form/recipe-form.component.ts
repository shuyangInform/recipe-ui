import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {

  model={id:null,name:null,description:null}

constructor(private router: Router) { }

  onSubmit() {
      if(this.model.id){
      }else{

      }
      this.router.navigate(['/']);
  }

}
