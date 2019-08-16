import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-department-details',
  template: `
    <h3>You selected department of <strong>{{departmentId}}</strong></h3>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId
  public paramMap
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'))
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'))
      this.departmentId = id
    })
  }
  goPrevious() {
    let previousId = this.departmentId - 1
    this.router.navigate(['/departments', previousId])
  }
  goNext() {
    let nextId = this.departmentId + 1
    this.router.navigate(['/departments', nextId])
  }

}
