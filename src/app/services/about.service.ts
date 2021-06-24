import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AboutsModel } from '../models/abouts.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private url = "https://cvaepv-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) { }


  private crearArreglo (aboutObj: any) {
    const abouts: AboutsModel[] = [];

    Object.keys(aboutObj).forEach(key =>{
      const about: AboutsModel = aboutObj[key];
      about.id = key

      abouts.push(about);
    })

    return abouts;
  }

  aboutList() {
    return this.http.get(`${this.url}/about.json`).pipe(
      map( resp => this.crearArreglo(resp))
    );
  }

}
