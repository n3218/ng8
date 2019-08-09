import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
    <input #mySearch (keyup)="showSuggestions(mySearch.value)" type="text" placeholder="input search parameters" />
    <ul>
      <li *ngIf="mySearch.value==''">Suggestions</li>
      <li *ngFor="let s of suggestionsList">{{s}}</li>
    </ul>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public cities = ['Pleasanton', 'San Francisco', 'San Ramon', 'Dublin']
  public suggestionsList = []
  public regex = ''
  constructor() {}

  ngOnInit() {}

  showSuggestions(val) {
    console.log(val)
    let regex = new RegExp(val, 'gi')
    this.suggestionsList = this.cities.filter(city => city.match(regex))
  }
}
