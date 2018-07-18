import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  title = 'My Favourite Recipe Details';

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
