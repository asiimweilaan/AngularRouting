import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    
    <h2 (click)="function1(department)"  *ngFor="let department of arr1">
      {{department.id}}{{department.name}}

    </h2>
  
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  arr1=[
    {"id":1,"name":"Reynold"},
    {"id":2,"name":"Jim"},
    {"id":3,"name":"Jacob"},
    {"id":4,"name":"Layla"}

  ];

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
  function1(department:any){
    
    let id = this.route.navigate(['/department',department.id]);

  }

}
