import { Component, OnInit } from '@angular/core';
import { ExperiencesModel } from '../../models/experiences.model';
import { ExperienceService } from '../../services/experience.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: ExperiencesModel[] = [];
  loading = false;

  constructor(private ExperienceService: ExperienceService) { }

  ngOnInit(): void {
    this.loading = true;
    this.ExperienceService.experiencesList().subscribe(
      resp => {
        this.loading = false;
        this.experiences = resp;
      }
    )
  }

  getInfoExperience(comment: string, i: number) {
    Swal.fire( {
      title: 'Infomation',
      text: comment, 
      icon: 'info', 
      showConfirmButton: true,
      showCancelButton: false
    })
}

}
