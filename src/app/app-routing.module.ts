import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'', redirectTo:'department',pathMatch:'full'},
  {path:'department/:id',component:DepartmentDetailComponent},
  {path:'department', component:DepartmentListComponent},
  {path:'employee', component:EmployeeListComponent},
  {path:"**",component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,EmployeeListComponent,DepartmentDetailComponent,PageNotFoundComponent];