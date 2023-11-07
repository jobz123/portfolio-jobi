import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

arrWorkExp: any

  constructor(private profileService:ProfileService) { }

    ngOnInit() {
      this.arrWorkExp =  this.profileService.exprienceData;
    }
}
