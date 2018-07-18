import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';

import { Recipe } from './recipe';

import { RECIPES } from './mock-recipes';

const httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin':'*' })
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesUrl = 'http://localhost:8080/api/recipes';  // URL to web api

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getRecipes(): Observable<Recipe[]> {
    let httpRequest: Observable<Recipe[]>;
    let httpResponse: Observable<Recipe[]>;

    let response: Object;
    let error: Object;

    httpRequest = this.http.get<Recipe[]>(this.recipesUrl, httpHeaders);
    httpRequest.subscribe(
        response => response = response,
        error => error = error/*,
        console.log("response: ", response),
        console.error("error: ", error)*/);

      httpResponse = httpRequest.pipe(tap(recipes => {
          const msg = (recipes !== null) ? `fetched` : `did not find`;
          this.log(`recipes ${msg}`);
          console.log("recipes: ", recipes);
        }
      ), catchError(this.handleError('listAllRecipes', []))
    );
    /*httpResponse = null;
    return httpResponse !== null ? httpResponse : of(RECIPES);*/
    return httpResponse;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error("error: {}", error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`RecipeService: ${message}`);
    console.log("message: ", message);
  }
}
