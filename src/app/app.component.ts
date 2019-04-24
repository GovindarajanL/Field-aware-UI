import { Component } from '@angular/core';
import { Events } from './domain/assigned-jobs';
import {AppServiceService} from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'field-scheduling';
  assignedJobs:Events[] = [];

  constructor(public appservice: AppServiceService) { }

  ngOnInit() {
    //this.assignedJobs = this.appservice.getAssignedJobs();
    this.getEvents();
  }

  getEvents(){
    /*try {
      this.appservice.getAssignedJobs()
        .subscribe(resp => {
          console.log(resp, "res");
          this.assignedJobs = resp
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }*/
    console.log(" thee assigned jobs is",this.assignedJobs);
  }

  
}
