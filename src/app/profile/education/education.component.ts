import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  arrEducation: any = [];

  constructor(private profileServie:ProfileService) { }

  ngOnInit() {
    this.arrEducation = this.profileServie.educationData;
  }

}
