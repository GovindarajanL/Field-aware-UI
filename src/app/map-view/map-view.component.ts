import { Component, OnInit } from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { AppServiceService } from '../app-service.service';
import { Workforce } from '../domain/workforce';
import { Events } from '../domain/assigned-jobs';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'roadmap';
  workforce: Workforce[] = [];
  options:boolean = false;
  // These are all just random coordinates need to get these from the services
  markers = [];
  jobs: Events[] = [];
  mapDate:Date;
  constructor(private modalService: NgbModal, private appservice: AppServiceService) {
    this.getResponse();

  }

  ngOnInit() {
    console.log(" the map is called");
  }
  filterMap(){
    this.workforce = [];
    this.jobs = [];
    let filteredJobs = [];
    let filteredWorkForce = [];
    this.markers = [];
    let productsObservable = this.appservice.getfreeWorkForce();
    productsObservable.subscribe(res => {
      console.log(" the response from obser", res);
      res.forEach(item => {
        item.icon = 'https://img.icons8.com/color/32/000000/street-view.png';
        this.workforce.push(item);
        console.log(" the start date is",item.startDate,", filter date",this.datesmall(this.mapDate));
        if(this.datesmall(this.mapDate) == item.startDate){
          console.log(" filtered &&&&&",item.startDate);
          filteredWorkForce.push(item);
        }
      })
      filteredWorkForce.forEach(e =>{
        console.log(" the filtered work",e);
        this.markers.push(e);
      })
      
    });
    let jobObservable = this.appservice.getAssignedJobs();
    jobObservable.subscribe(re => {
      re.forEach(item => {
        if (item.severity == 'CRITICAL') {
          item.icon = 'https://img.icons8.com/bubbles/25/000000/calendar.png';
        } else if (item.severity == 'LOW') {
          item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
        } else {
          item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
        }
        this.jobs.push(item);
        console.log(" the start date is",item.startDate,", filter date",this.datesmall(this.mapDate));
        if(this.datesmall(this.mapDate) == item.startDate){
          filteredJobs.push(item);
        }
        
      });

      

      filteredJobs.forEach(e =>{
        console.log(" the filtered job",e);
        this.markers.push(e);
      })
    });

  }
  setPriority(val) {

    this.priority = val;
  }
  closeResult: string;

  selectedMarker;
  jobdesc: string;
  jobdate: Date;
  priority: string;
  numberOfWorkers: number;
  email:string;
  startdate:Date;
  username:string;
  iconBase =
    'https://developers.google.com/maps/documentation/javascript/examples/full/images/';



  addMarker(lat: number, lng: number) {
    this.latitude = lat;
    this.longitude = lng;
    this.markers.push({ lattitude: lat, longitude: lng, alpha: 0.4, icon: 'https://img.icons8.com/material/24/000000/calendar.png' });
  }


  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  getResponse() {
    let productsObservable = this.appservice.getfreeWorkForce();
    productsObservable.subscribe(res => {
      res.forEach(item => {
        item.icon = 'https://img.icons8.com/color/32/000000/street-view.png';
        this.latitude = item.lattitude;
        this.longitude = item.longitude;
        this.workforce.push(item);
        this.markers.push(item);
      })
      

    });
    let jobObservable = this.appservice.getAssignedJobs();
    jobObservable.subscribe(re => {
      re.forEach(item => {
        if (item.severity == 'CRITICAL') {
          item.icon = 'https://img.icons8.com/bubbles/25/000000/calendar.png';
        } else if (item.severity == 'LOW') {
          item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
        } else {
          item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
        }
        this.latitude = item.lattitude;
        this.longitude = item.longitude;
        this.jobs.push(item);
        this.markers.push(item);
      });
      
      
    });
  }

  selectMarker(event, content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }

  addUser(event, content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title2' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  submituser(){
    this.markers = [];
    let jobObservable = this.appservice.createUser(this.username,this.dateas(this.startdate),this.latitude,this.longitude,this.email);
    jobObservable.subscribe(resp => {
      let productsObservable = this.appservice.getfreeWorkForce();
      productsObservable.subscribe(res => {
        res.forEach(item => {
          item.icon = 'https://img.icons8.com/color/32/000000/street-view.png';
          this.latitude = item.lattitude;
          this.longitude = item.longitude;
          this.workforce.push(item);
          this.markers.push(item);
        });
      });
      this.jobs.forEach(item =>{
        this.markers.push(item);
      });
      
    });
  }

  submitbutton() {
    this.markers = [];
    setTimeout(function(){

    },200);
    let jobObservable = this.appservice.createEvents(this.jobdesc,this.latitude,this.longitude, this.numberOfWorkers, this.priority,
                            this.dateas(this.jobdate));
    jobObservable.subscribe(it => {
      let allResp = this.appservice.getAssignedJobs();
      allResp.subscribe(re => {
        re.forEach(item => {
          if (item.severity == 'CRITICAL') {
            item.icon = 'https://img.icons8.com/bubbles/25/000000/calendar.png';
          } else if (item.severity == 'LOW') {
            item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
          } else {
            item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
          }
          this.markers.push(item);
        });
        this.workforce.forEach(item =>{
          this.markers.push(item);
        });
      });

    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  dateas(date): string {
    return date.year+'-'+this.leftpad(date.month, 2)
      + '-' + this.leftpad(date.day, 2)
      +'T01:20:08.257Z';
  }

  datesmall(date): string {
    return date.year+'-'+this.leftpad(date.month, 2)
      + '-' + this.leftpad(date.day, 2)
      ;
  }

  leftpad(val, resultLength = 2, leftpadChar = '0'): string {
    return (String(leftpadChar).repeat(resultLength)
      + String(val)).slice(String(val).length);
  }

}
