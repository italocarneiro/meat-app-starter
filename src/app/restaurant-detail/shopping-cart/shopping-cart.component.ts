import { ShoppingCarService } from './shopping-car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCarService: ShoppingCarService) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.shoppingCarService.items;
  }

  total(): number{
    return this.shoppingCarService.total();
  }

  clear(){
    this.shoppingCarService.clear();
  }

  removeItem(item: any){
    this.shoppingCarService.removeItem(item);
  }

  addItem(item: any){
    this.shoppingCarService.addItem(item);
  }

}
