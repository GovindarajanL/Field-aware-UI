import { Component, OnInit,ViewChild } from '@angular/core';
import {AppServiceService} from '../app-service.service';
import { Workforce } from '../domain/workforce';
import { Events } from '../domain/assigned-jobs';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  workforce:Workforce[] =[];
  jobs:Events[] = [];
  displayedColumns: string[] = ['id', 'name', 'status', 'role'];
  dataSource;
  

  @ViewChild(MatSort) sort: MatSort;

  constructor(private appservice:AppServiceService) { }

  ngOnInit() {
    //this.workforce = this.appservice.getfreeWorkForce();
    this.getData();

    /*this.appservice.getAssignedJobs().then(re =>{
      this.jobs = re;
    });*/
    
  }

  getData(){
    let jobObservable = this.appservice.getAssignedJobs();
    jobObservable.subscribe(re =>{
      re.forEach(item => {
        console.log(" the item is",item);
      item.latitude = item.zone.lattitude;
      item.longitude = item.zone.longitude;
      this.jobs.push(item);
      
      });
      this.dataSource = new MatTableDataSource([]);
      this.dataSource = new MatTableDataSource(this.jobs);
      this.dataSource.sort = this.sort;
      
      
      console.log(" the marker is",this.dataSource);
    });
  }

  reassign() {
    if(confirm("Are you sure to delete "+name)) {
      console.log("Implement delete functionality here");
    }
  }

  complete(id:string) {
    if(confirm("Are you sure to mark"+ id+"it complete ")) {

      let jobObservable = this.appservice.updateEvents(id);
      jobObservable.subscribe(re =>{
        this.getData();
      });
    }
  }

}
