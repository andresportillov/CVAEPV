import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageModel } from '../models/img.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  private url = "https://cvaepv-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) { }


  private crearArreglo (imgObj: any) {
    const images: ImageModel[] = [];

    Object.keys(imgObj).forEach(key =>{
      const image: ImageModel = imgObj[key];
      image.id = key

      images.push(image);
    })

    return images;
  }

  imageList() {
    return this.http.get(`${this.url}/img.json`).pipe(
      map( resp => this.crearArreglo(resp))
    );
  }

}
