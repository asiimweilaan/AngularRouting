import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      You selected id of {{departmentId}}
    </p>
    <p><a (click)="getPrevious()">Previous</a></p>
    <p><a (click)="getNext()">Next</a></p>
    <button (click)="getOptional()">Back</button>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  
  public departmentId:any;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(<string>params.get('id'));
      this.departmentId = id;
    });

  }

  getNext(){
    let nextId = this.departmentId + 1;
    
    this.router.navigate(['/department',nextId]);

  }
  
  getPrevious(){
    let previousId = this.departmentId - 1;
    
    this.router.navigate(['/department',previousId]);
  }
  
  getOptional(){
    let selectedId = this.departmentId?this.departmentId:null;
    this.router.navigate(['/department',{'id':selectedId}]);
  }

}
