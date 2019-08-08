import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
              Welcome {{name}}
            </h2>
            <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
            <h2 [style.color]="highlightColor" >Style Binding 2</h2>
            <h2 [ngStyle]="titleStyle">Style Binding 3</h2>
            `,
  styles: []
})

export class TestComponent implements OnInit {
  public name = "Natalia"
  public hasError = true
  public isSpecial = true
  public highlightColor = "orange"
  public titleStyle = {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() {}

  ngOnInit() {}
  greetUser() {
    return "greetUser: " + this.name;
  }
}
