import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
  export class ContactComponent implements OnInit {
 
    model: any = {};
    showMsg: any;
    constructor(
      private http: HttpClient
    ){}
  
    ngOnInit() {
       }
       onSubmit(name, subject, email, message) {
          this.http.post('http://raviksharma.azurewebsites.net/contactData',
            { name: name, subject: subject, email: email, message: message },
            {responseType: 'text'}).subscribe(
              response => {
                console.log(response);
                if(response==="success"){
                  this.showMsg=true;
                }
              }
              
            );
        }  
}
