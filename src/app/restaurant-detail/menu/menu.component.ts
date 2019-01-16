import { MenuItem } from './../menu-item/menu-item.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../../restaurants/restaurant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItens: MenuItem[];

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.menuOfRestaurant(this.route.parent.snapshot.params['id'])
      .subscribe(menuItem => this.menuItens = menuItem);
  }

  addMenuItem(menuItem: MenuItem){
    console.log(menuItem);
  }

}
