import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    // private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    console.log('Profile component initialized');
    // this.spinner.show();
    // setTimeout(() => {
    //     this.spinner.hide();
    // }, 2000);
  }

}
