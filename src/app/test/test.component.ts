import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{ name }}</h2>
    <button (click)="onClick()">Greet</button>
  `,
  styles: []
})

export class TestComponent implements OnInit {

  public name = "Natalia"
  public message = "Welcome to Angular 8"
  public date = new Date()

  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log("Welcome to Angular 8")
  }


}
