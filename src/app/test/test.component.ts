import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngFor="let color of colors; odd as o">
      <h2 [style.color]=color>{{o}} {{color}}</h2>
    </div>
    <div *ngFor="let color of colors; last as l">
      <h2 [style.font-style]="l ? 'italic' : ''">{{l}} {{color}}</h2>
    </div>
    <hr/>
    <div *ngFor="let color of colors; first as f">
      <h2 [style.text-decoration]="f ? 'underline' : ''">{{f}} {{color}}</h2>
    </div>
    <hr/>
    <div *ngFor="let color of colors; index as i">
      <h2>{{i}} {{color}}</h2>
    </div>
  `,

  styles: []
})
export class TestComponent implements OnInit {

  public colors = ["red", "blue", "green", "yellow"]

  constructor() {}

  ngOnInit() {}

}
