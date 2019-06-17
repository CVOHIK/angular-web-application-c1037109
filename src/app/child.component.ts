import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      <button (click)="sendMessage()">Send Message</button>
      <br>
      App made by: {{message1}}
      
  `
})
export class ChildComponent {

  message: string = "Have a great summer"
  message3 = "c1037109"

  @Output() messageEvent = new EventEmitter<string>();
  @Input() message1: string;
  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}