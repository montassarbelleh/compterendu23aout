import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours.component';
import { ProgrammationComponent } from './programmation/programmation.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  {path:'',component:CoursComponent,
  children:[
  {path:'programmation',component:ProgrammationComponent},
  {path:'web',component:WebComponent},]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
