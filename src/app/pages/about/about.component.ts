import { Component, OnInit } from '@angular/core';
import { AboutsModel } from "../../models/abouts.model";
import { AboutService } from "../../services/about.service";
import { SkillModel } from "../../models/skill.model";
import { SkillService } from "../../services/skill.service";
import { AbilitiesModel } from '../../models/abilities.model';
import { AbilitiesService } from '../../services/abilities.service';

// import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  abouts: AboutsModel[] = [];
  skills: SkillModel[] = [];
  abilities: AbilitiesModel[] = [];
  loading = false;

  constructor(
    private AboutService: AboutService,
    private SkillService: SkillService,
    private AbilityService: AbilitiesService
    ) { }

  ngOnInit(): void {
    this.loading= true;
    this.AboutService.aboutList().subscribe(respAbout => {
        this.abouts = respAbout;
        this.SkillService.skillsList().subscribe(respSkill => {
          this.skills = respSkill;
          this.AbilityService.abilitiesList().subscribe(respAbility => {
            this.loading = false;
            this.abilities = respAbility;
          });
        });
    });
  }

}
