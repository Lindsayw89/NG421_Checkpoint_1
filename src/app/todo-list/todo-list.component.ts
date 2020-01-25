import { Component, OnInit, Input } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  //todoList: ITodo [] = [ ] // getter below instead
  constructor(private todoService : TodoService) { }
  @Input() status

  ngOnInit() {
   // this.todoList = this.todoService.getTodos(this.status); removed for get below
  }

   get todoList(){
     return this.todoService.getTodos(this.status); //.filter(t=>t.status===this.status)
  }
 }
