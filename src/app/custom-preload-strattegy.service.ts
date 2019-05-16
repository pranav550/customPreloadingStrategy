import { Injectable } from '@angular/core';
import {PreloadingStrategy, Route} from "@angular/router";
import {Observable} from "rxjs/observable";
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadStrattegyService implements PreloadingStrategy {
  preload(route:Route , load:() =>Observable<any>):Observable<any>{

    if(route.data && route.data['preload']){
      console.log('Preload Patrh is:'+route.path);
      return load();
    }
    else{
      return Observable.of(null)
    }

  }
  constructor() { }
}
