import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapViewComponent } from './map-view/map-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component'; 
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatPaginatorModule,MatSortModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    DashboardComponentComponent
  ],
  exports:[MapViewComponent],
  imports: [
    BrowserModule,
    MatMenuModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD4VHQyN_Q4myPPQIyr3m7konM7FSQo4eY'
      /* apiKey is required, unless you are a 
      premium customer, in which case you can 
      use clientId 
      */
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
