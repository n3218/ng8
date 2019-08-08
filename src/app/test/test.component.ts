import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
              Welcome {{name}}
            </h2>
            <input [id]="myId" type="text" value="Anatoly" />
            <input [disabled]="isDisabled" id={{myId}} type="text" value="Anatoly" />
            <input bind-disabled="isDisabled" id={{myId}} type="text" value="Anatoly" />

            `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = "Natalia"
  public myId = "testId"
  public isDisabled = false

  constructor() {}

  ngOnInit() {}
  greetUser() {
    return "greetUser: " + this.name;
  }
}
