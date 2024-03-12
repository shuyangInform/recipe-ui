import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  constructor() { }

    recipes=[
      {id:1,name:'Biryani',description:'Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, pork, lamb, prawn, or fish), and sometimes, in addition, eggs and/or potatoes in certain regional varieties.'},
      {id:2,name:'Pulao',description:'Pulao is a rice dish, originating from the Indian subcontinent, in which rice is cooked in a seasoned broth. Depending on the local cuisine, it may also contain meat, fish, vegetables, and (dried) fruits.'},
      {id:3,name:'Fried Rice',description:'Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat.'},
    ]


  ngOnInit() {
  }

}
