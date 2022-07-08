import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    
    <h2 (click)="function1(department)" [class.selected]="isSelected(department)" *ngFor="let department of arr1">
      {{department.id}}{{department.name}}

    </h2>
  
  `,
  styles: [`
  .selected{
    background-color:#f10943;

  }
  `
  ]
})
export class DepartmentListComponent implements OnInit {

  public selectedId:any;

  arr1=[
    {"id":1,"name":"Reynold"},
    {"id":2,"name":"Jim"},
    {"id":3,"name":"Jacob"},
    {"id":4,"name":"Layla"}

  ];

  constructor(private route:Router, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(<string>params.get('id'));
      this.selectedId = id;
  })
}
  function1(department:any){
    
    this.route.navigate(['/department',department.id]);

  }
  isSelected(department:any){
    return department.id ===this.selectedId;
  }

}
