import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      You selected id of {{departmentId}}
    </p>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  
  public departmentId:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;

  }

}
