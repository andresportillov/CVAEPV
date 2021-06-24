import { HttpClient } from '@angular/common/http';
import { Injectable, KeyValueDiffers } from '@angular/core';
import { CoursesModel } from '../models/courses.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CourseService {

    private url = 'https://cvaepv-default-rtdb.firebaseio.com/';

    constructor( private http: HttpClient) { }

    private crearArreglo (courseObj: any) {
        const courses: CoursesModel[] = [];

        Object.keys(courseObj).forEach(key => {
            const course: CoursesModel = courseObj[key];
            course.id = key;

            courses.push(course);
        })

        return courses;
    }

    courseList() {
        return this.http.get(`${this.url}/course.json`).pipe(
            map(resp => this.crearArreglo(resp))
        )
    }
}
