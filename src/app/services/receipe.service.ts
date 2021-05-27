import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReceipeService {
  constructor(
    private http: HttpClient
  ) { }
  public getIngredients() {
    return this.http.get('https://api.edamam.com/api/food-database/v2/parser?ingr=garlic&app_id=92718ca2&app_key=581d77b97d5aec69fcbf53bda44f9419');
  }
}
