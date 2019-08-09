import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
    <h2>{{ date }}</h2>
  `,
  styles: []
})

export class TestComponent implements OnInit {

  public name = "Natalia"
  public message = "Welcome to Angular 8"
  public date = new Date()

  constructor() {}

  ngOnInit() {}


}
