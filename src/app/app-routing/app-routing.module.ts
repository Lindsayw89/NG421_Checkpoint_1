import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component' ;
import {TodoTableComponent} from '../todo-table/todo-table.component';
import { BoardComponent } from '../board/board.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([ 
      {path: '', component: BoardComponent},

      {path:'todotable', component: TodoTableComponent }])
    ],
  
})
export class AppRoutingModule { }
