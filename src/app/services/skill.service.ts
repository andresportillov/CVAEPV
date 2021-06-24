import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillModel } from '../models/skill.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class SkillService {

  private url = "https://cvaepv-default-rtdb.firebaseio.com/";

  constructor( private http: HttpClient) { }

  private crearArreglo (skillObj: any) {
    const skills: SkillModel[] = [];

    Object.keys(skillObj).forEach(key =>{
      const skill: SkillModel = skillObj[key];
      skill.id = key

      skills.push(skill);
    })

    return skills;
  }

  skillsList() {
    return this.http.get(`${this.url}/skills.json`).pipe(
      map(resp => this.crearArreglo(resp))
    );
  }

}
