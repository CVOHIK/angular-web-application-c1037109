import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "./child.component";
@Component({
  selector: 'app-parent',
  template: `
    Message: {{message}}
    
    
    <app-child [message1]=messaga1 (messageEvent)="receiveMessage($event)"></app-child>
    <br>
    C Nummer: {{message3}}
  `
})
export class ParentComponent implements /*OnInit*/ AfterViewInit {

@ViewChild(ChildComponent) child;

  constructor() { }
  messaga1 = "Zayou Slima";

  message:string= "Thank you for your time";

  ngAfterViewInit(){
    this.message3 = this.child.message3;
  }

  ngOnInit(){}

  receiveMessage($event) {
    this.message = $event
  }
}