import { Component, OnInit } from '@angular/core';
import { ReceipeService } from '../../services/receipe.service'

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients;
  nutrients;
  constructor(
    private receipeService: ReceipeService
  ) { }

  ngOnInit() {
    // this.ingredients = this.receipeService.getIngredients();
    this.receipeService.getIngredients().subscribe((data)=>{
      
      this.ingredients = data.hints;
      this.nutrients = data;
      console.log(data);
    });
  }
}
