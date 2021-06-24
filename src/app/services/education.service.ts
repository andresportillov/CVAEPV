import { HttpClient } from '@angular/common/http';
import { Injectable, KeyValueDiffers } from '@angular/core';
import { map, delay } from 'rxjs/operators';
import { EducationsModel } from '../models/educations.model';

@Injectable({
    providedIn: 'root'
})

export class EducationService {

    private url = 'https://cvaepv-default-rtdb.firebaseio.com/';

    constructor( private http: HttpClient) { }

    private crearArreglo (educationObj: any) {
        const educations: EducationsModel[] = [];

        Object.keys(educationObj).forEach(key => {
            const education: EducationsModel = educationObj[key];
            education.id = key;

            educations.push(education);
        })

        return educations;
    }

    educationList() {
        return this.http.get(`${this.url}/studies.json`).pipe(
            map(resp => this.crearArreglo(resp))
        )
    }

    getEducation(id: string) {
        return this.http.get(`${this.url}/studies/${id}.json`);
    }
}