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
  displayedColumns: string[] = ['id', 'name', 'status', 'role'];
  dataSource = new MatTableDataSource([]);;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  @ViewChild(MatSort) sort: MatSort;
  unassigned:number = 0;
  assigned:number = 0;
  inprogress:number = 0;
  

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
      if(item.status == 'UNASSIGNED'){
        this.unassigned = this.unassigned +1;
      }else if(item.status == 'ASSIGNED'){
        this.assigned = this.assigned +1;
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
            { y: this.inprogress, label: "IN-PROGRESS" }
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
    if(confirm("Are you sure to mark"+ id+"it complete ")) {

      let jobObservable = this.appservice.updateEvents(id);
      jobObservable.subscribe(re =>{
        this.getData();
      });
    }
  }

}
