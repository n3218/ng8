import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
              Welcome {{name}}
            </h2>
            <h3 class="text-success">CodeEvolution</h3>
            <h3 [class]="successClass">CodeEvolution</h3>
            <h3 class="text-special" [class]="successClass">CodeEvolution</h3>
            <h3 [class.text-danger]="hasError">CodeEvolution</h3>
            <h3 [ngClass]="messageClasses">CodeEvolution</h3>
            `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})

export class TestComponent implements OnInit {
  public name = "Natalia"
  public successClass = "text-success"
  public hasError = true
  public isSpecial = true
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() {}

  ngOnInit() {}
  greetUser() {
    return "greetUser: " + this.name;
  }
}
