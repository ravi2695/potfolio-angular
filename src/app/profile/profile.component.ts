import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private spinner : NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },2000);
  }

}
