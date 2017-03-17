import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
 import { SpaceComponent } from '../space/space.component';


const appRoutes: Routes = [ 
{ path: 'space', component: SpaceComponent } ];

 @NgModule({ imports: [RouterModule.forRoot(appRoutes)], exports: [RouterModule] }) 
export class RoutingModule { }
