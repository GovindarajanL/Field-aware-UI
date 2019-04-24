import { Injectable } from '@angular/core';
import {Events} from '../app/domain/assigned-jobs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Workforce} from '../app/domain/workforce';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  outResp:Events[] =[];
  outWorkForseResp:Workforce[]=[];

  constructor(private http : HttpClient) { }
  // Need to make the rest call and get the response from the AWS service

  getfreeWorkForce():Observable<any>{
    var out:Workforce[] =[];
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    });
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.get(
      'http://fieldserviceapi-env.zhmbvkhakb.ap-southeast-1.elasticbeanstalk.com/workforce-service/api/v1/users/',{headers: headers})
      ;
   /* return this.http.get(
        'http://fieldserviceapi-env.zhmbvkhakb.ap-southeast-1.elasticbeanstalk.com/workforce-service/api/v1/users/',{headers: headers})
        .subscribe(responseval =>{
          this.initializeWork(responseval)
          console.log(" the out response is",this.outWorkForseResp);
          this.outWorkForseResp.forEach(item => {
            item.icon ='https://img.icons8.com/color/32/000000/street-view.png';
            
          })
          
        });*/
        //return this.outWorkForseResp;
  }

  updateEvents(id:string):Observable<any>{
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    });
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(
      'http://fieldserviceapi-env.zhmbvkhakb.ap-southeast-1.elasticbeanstalk.com/workforce-service/api/v1/events/'+id+'/COMPLETED',{headers: headers});
    
  }

  getAssignedJobs():Observable<any>{
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    });
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    /*return new Promise(resolve => {
      this.http.get(
        'http://fieldserviceapi-env.zhmbvkhakb.ap-southeast-1.elasticbeanstalk.com/workforce-service/api/v1/events/',{headers: headers})
        .subscribe(responseval =>{
          this.initialize(responseval)
          console.log(" the response is",this.outResp);
          
        });
        this.outResp.forEach(item => {
          if(item.severity == 'CRITICAL'){
            item.icon = 'https://img.icons8.com/bubbles/25/000000/calendar.png';
        }else if(item.severity == 'LOW'){
          item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
        }else {
          item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
        }
          
        })*/
        return this.http.get(
          'http://fieldserviceapi-env.zhmbvkhakb.ap-southeast-1.elasticbeanstalk.com/workforce-service/api/v1/events/',{headers: headers});
        
       
  }

  initialize(lst: any) {
    this.outResp = lst;
    // from now on your object will be set
 }

 initializeWork(lst: any) {
   this.outWorkForseResp = lst;
  // from now on your object will be set
}
}
