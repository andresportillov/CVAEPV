import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExperiencesModel } from '../models/experiences.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private url = "https://cvaepv-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) { }


  private crearArreglo (experienceObj: any) {
    const experiences: ExperiencesModel[] = [];

    Object.keys(experienceObj).forEach(key =>{
      const experience: ExperiencesModel = experienceObj[key];
      experience.id = key

      experiences.push(experience);
    })

    return experiences;
  }

  experiencesList() {
    return this.http.get(`${this.url}/experience.json`).pipe(
      map( resp => this.crearArreglo(resp))
    );
  }

}