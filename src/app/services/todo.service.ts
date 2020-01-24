import { Injectable } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
import {Subject} from'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoId: number = 0;
  update:Subject<any>= new Subject;
  todoList: ITodo [] = [
    // example of how to make an item in todo list
    { title: 'Install Angular CLI', id: this.todoId, status:'Todo', createdAt: new Date(), description: 'need to get done by tomorrow' },
  ]
  statuses:string[]=['Todo', 'Doing', 'Done'];

  constructor() { }
  getTodos(){
    return this.todoList;
  }
  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
  addTodo(todo: ITodo):void {
    todo.id = this.todoId ++;
    this.todoList.push(todo);
  }
}
