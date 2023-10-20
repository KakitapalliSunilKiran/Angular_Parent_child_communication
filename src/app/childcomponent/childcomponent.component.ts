import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent {

  @Input() childelement='';

 @Output() public childEvent=new EventEmitter()

  fireevent(){
    this.childEvent.emit("Hello prashant");
  }
}
