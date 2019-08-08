import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',
  // selector: '.app-test',
  selector: '[app-test]',
  // templateUrl: './test.component.html',
  // template: '<div>Inline template</div>',
  template: `<div>
              Inline template
            </div>`,
  // styleUrls: ['./test.component.scss']
  styles: [`
    div {
      color: red
    }
    `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
