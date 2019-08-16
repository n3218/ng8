import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-department-details',
  template: `
    <h3>You selected department of <strong>{{departmentId}}</strong></h3>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'))
    let id = this.route.snapshot.paramMap.get('id')
    this.departmentId = id;
  }

}
