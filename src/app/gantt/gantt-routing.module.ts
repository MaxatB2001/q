import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GanttComponent } from './gant.component';
import { AuthGuardKeycloak } from '../classes/keycloak-auth.guard';

const routes: Routes = [{path: "", component: GanttComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GanttRoutingModule { }
