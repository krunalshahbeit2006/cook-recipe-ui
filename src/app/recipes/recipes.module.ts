import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RecipesComponent } from './recipes.component';

@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    RecipesComponent
  ],
  providers: []
})

export class RecipesModule { }
