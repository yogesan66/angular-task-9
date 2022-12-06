import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Output() public ChildEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  public selected_movie=""
  
  onChange(event){
    this.selected_movie = event
    this.ChildEvent.emit(this.selected_movie)
   
  }

}