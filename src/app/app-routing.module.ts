import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapViewComponent} from '../app/map-view/map-view.component'
import {DashboardComponentComponent} from '../app/dashboard-component/dashboard-component.component'

const routes: Routes = [{
  path: 'map',
  component: MapViewComponent
},{
  path:'',
  component:DashboardComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
