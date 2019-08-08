import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
              Welcome {{name}}
            </h2>
            <h2>{{2 + 2}}</h2>
            <h2>{{"Welcome " + name }}</h2>
            <h2>{{ name.length }}</h2>
            <h2>{{ name.toUpperCase() }}</h2>
            <h2>{{ greetUser()}}</h2>
            <h3>{{ siteUrl }}</h3>
            `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = "Anatoly"
  public siteUrl = window.location.href
  constructor() {}

  ngOnInit() {}
  greetUser() {
    return "greetUser: " + this.name;
  }
}
