import { Component, OnInit } from '@angular/core';
import { CoursesModel  } from '../../models/courses.model';
import { CourseService } from '../../services/course.service';
import { EducationsModel } from '../../models/educations.model';
import { EducationService } from '../../services/education.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: EducationsModel[] = [];
  courses: CoursesModel[] = [];
  loading = false;

  constructor(
    private EducationService: EducationService,
    private CourseService: CourseService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.EducationService.educationList().subscribe( respEdu => {
      this.educations = respEdu
      console.log(this.educations);
      this.CourseService.courseList().subscribe( respCour => {
        this.loading = false;
        this.courses = respCour;      
      })
    })
    
    }

    getInfoEducation(comment: string, i: number) {
        Swal.fire( {
          title: 'Infomation',
          text: comment, 
          icon: 'info', 
          showConfirmButton: true,
          showCancelButton: false
        })
    }


}
