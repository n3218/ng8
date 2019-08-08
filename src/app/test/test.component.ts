import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  
  <ng-template #thenBlock>
    <h2>It is thenBlock</h2>
  </ng-template>
  <ng-template #elseBlock>
    <h2>It is elseBlock</h2>
  </ng-template>

  <hr/>
  <h2 *ngIf="displayName; else otherBlock">
    Welcome to Angular
  </h2>
  <ng-template #otherBlock>
    <h2>
      Name is hidden
    </h2>
  </ng-template>
            
            `,
  styles: []
})

export class TestComponent implements OnInit {
  displayName = false


  constructor() {}
  ngOnInit() {}

}
