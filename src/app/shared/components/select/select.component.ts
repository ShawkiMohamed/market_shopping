import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  //to recieve data from parent to child
  @Input() title:string = "";
  @Input() data:any[] = [];

  //to recieve data from child to parent
  @Output() selectedValue = new EventEmitter()  

  constructor() { }

  ngOnInit(): void {
  }

  // function to know the selected item
  detectData(event:any)
  {
    this.selectedValue.emit(event)
  }

}
