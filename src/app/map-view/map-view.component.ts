import { Component, OnInit } from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {AppServiceService} from '../app-service.service';
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
  workforce:Workforce[] =[];
  // These are all just random coordinates need to get these from the services
  markers = [];
  jobs:Events[] = [];
  constructor(private modalService: NgbModal, private appservice:AppServiceService) {
    this.getResponse();
    
   }

  ngOnInit() {
    
  }
  closeResult: string;

  selectedMarker;
  jobdesc:string;
  jobdate:Date;
  iconBase =
            'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

  
    
  addMarker(lat: number, lng: number) {
    this.markers.push({ latitude:lat, longitude:lng, alpha: 0.4,icon:'https://img.icons8.com/material/24/000000/calendar.png' });
  }


  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  getResponse(){
    let productsObservable = this.appservice.getfreeWorkForce();
    productsObservable.subscribe(res =>{
      console.log(" the response from obser",res);
      res.forEach(item => {
        item.icon ='https://img.icons8.com/color/32/000000/street-view.png';
        item.latitude = item.zone.lattitude;
        item.longitude = item.zone.longitude;
        this.latitude = item.zone.lattitude;
        this.longitude = item.zone.longitude;
        this.workforce.push(item);
        //this.markers.push(item);
      })
      
      
    });
    let jobObservable = this.appservice.getAssignedJobs();
    console.log(" the workforce",this.markers);
    jobObservable.subscribe(re =>{
      re.forEach(item => {
        if(item.severity == 'CRITICAL'){
          item.icon = 'https://img.icons8.com/bubbles/25/000000/calendar.png';
      }else if(item.severity == 'LOW'){
        item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
      }else {
        item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
      }
      item.latitude = item.zone.lattitude;
      item.longitude = item.zone.longitude;
      this.markers.push(item);
      });
      
      console.log(" the marker is",this.markers);
    });
  }

  selectMarker(event,content) {
    console.log("open marker called ",content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    console.log("icon base is",this.iconBase);
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }

  addUser(event,content){
    console.log("content",content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title2'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  submitbutton(){
    console.log("submit button is called",this.jobdesc,",",this.jobdate,",",this.selectedMarker);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  

}
