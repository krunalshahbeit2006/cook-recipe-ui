import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    RecipeDetailComponent
  ],
  providers: []
})

export class RecipeDetailModule { }
