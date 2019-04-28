import { Component, OnInit,ViewChild } from '@angular/core';
import {AppServiceService} from '../app-service.service';
import { Workforce } from '../domain/workforce';
import { Events } from '../domain/assigned-jobs';
import {MatSort, MatTableDataSource,MatPaginator} from '@angular/material';
import * as CanvasJS from '../../assets/canvasjs.min';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  workforce:Workforce[] =[];
  jobs:Events[] = [];
  displayedColumns: string[] = ['id', 'name', 'status', 'date','role'];
  dataSource = new MatTableDataSource([]);;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  @ViewChild(MatSort) sort: MatSort;
  unassigned:number = 0;
  assigned:number = 0;
  inprogress:number = 0;
  completed:number = 0;
  

  constructor(private appservice:AppServiceService) { }

  ngOnInit() {
    //this.workforce = this.appservice.getfreeWorkForce();
    this.getData();
    

    



    /*this.appservice.getAssignedJobs().then(re =>{
      this.jobs = re;
    });*/
    
  }

  getData(){
    this.jobs = [];
    this.assigned = 0;
      this.unassigned = 0;
      this.completed = 0;
      this.inprogress = 0;
    let jobObservable = this.appservice.getAssignedJobs();
    jobObservable.subscribe(re =>{
      re.forEach(item => {
        console.log(" the item is",item);
      this.jobs.push(item);
      if(item.status == 'UNASSIGNED'){
        this.unassigned = this.unassigned +1;
      }else if(item.status == 'ASSIGNED'){
        this.assigned = this.assigned +1;
      }else if(item.status == 'COMPLETED'){
        this.completed = this.completed +1;
      }else{
        this.inprogress = this.inprogress + 1;
      }
      
      });
      this.dataSource = new MatTableDataSource([]);
      this.dataSource = new MatTableDataSource(this.jobs);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(" the inprogress",this.inprogress);
      

      let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Event Status"
        },
        data: [{
          type: "pie",
          dataPoints: [
            { y: this.assigned, label: "ASSIGNED" },
            { y: this.unassigned, label: "UN-ASSIGNED" },
            { y: this.inprogress, label: "IN-PROGRESS" },
            { y: this.completed, label: "COMPLETED" }
          ]
        }]
      });
        
      chart.render();
      
      
      console.log(" the marker is",this.dataSource);
    });
  }

  reassign() {
    if(confirm("Are you sure to delete "+name)) {
      console.log("Implement delete functionality here");
    }
  }

  complete(id:string) {
    if(confirm("The Event "+ id+" will be marked COMPLETED. Are you sure to proceed?")) {

      let jobObservable = this.appservice.updateEvents(id);
      jobObservable.subscribe(re =>{
        this.getData();
      });
    }
  }

}
