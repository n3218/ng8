import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
    <h2>{{ "Hello " + name}}</h2>
    <button (click)="eventFromChild()">Send Event</button>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  eventFromChild() {
    this.childEvent.emit('Hey, I am an Event from ChildComponent')
  }

}
