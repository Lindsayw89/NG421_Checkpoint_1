import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {ITodo} from '../interfaces/itodo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  modalInstance: NgbModalRef;
  constructor() { }
  todo:ITodo; // changed name
  newDescription: string;
  ngOnInit() {
  }

  yes():void{
    this.modalInstance.close(this.newDescription);// changed from copied othr modal
 }
//  edit(description){
//   this.todo.description =description; // chaged from editing todo
//  this.yes();
// }

}
