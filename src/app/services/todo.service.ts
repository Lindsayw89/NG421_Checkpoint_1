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
  editingTodo:ITodo;

  TODO_DATA
  : ITodo[] = this.todoList;
  constructor() { }
  getTodos(status: string){
    if(!status){
      return this.todoList
    }
    return this.todoList.filter(todo => todo.status=== status)
  }
  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
  addTodo(todo: ITodo):void {
    todo.id = this.todoId ++;
    this.todoList.push(todo);
  }
  getStatuses(): string[]{
    return this.statuses;
  }
  editTodo(description): ITodo{

    this.editingTodo.description =description
    return description;
  }
}
