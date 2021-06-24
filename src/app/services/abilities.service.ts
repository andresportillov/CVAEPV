import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbilitiesModel } from '../models/abilities.model';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesService {

  private url = "https://cvaepv-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) { }

  private crearArreglo (abilityObj: any) {
    const abilities: AbilitiesModel[] = [];

    Object.keys(abilityObj).forEach(key =>{
      const ability: AbilitiesModel = abilityObj[key];
      ability.id = key

      abilities.push(ability);
    })

    return abilities;
  }

  abilitiesList(){
    return this.http.get(`${this.url}/abilities.json`).pipe(
      map(resp => this.crearArreglo(resp))
    )
  }
}
