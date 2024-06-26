
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test','https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg')
  ];

  constructor(){
    console.log(this.recipes)
  }

  ngOnInit(){}

}
