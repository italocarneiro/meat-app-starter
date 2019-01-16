import { MEAT_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurante.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';
import { ErrorHandler } from 'app/app.error-handler';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  restaurant(): Observable<Restaurant[]>{
    return this.http.get(`${MEAT_API}/restaurantsdd`).map(response => response.json()).catch(ErrorHandler.errorHandler);
  }

}
