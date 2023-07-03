import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
// import { tap } from 'rxjs/operators';

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class CardService {
  private URL_API = 'https://jsonplaceholder.typicode.com/todos';
  limit = 10;
  todos: ITodo[] = [];

  constructor(private http: HttpClient) {}

  fetchData(): Observable<ITodo[]> {
    return this.http
      .get<ITodo[]>(`${this.URL_API}?_limit=${this.limit}`)
      .pipe(tap((todos: ITodo[]) => (this.todos = todos)));
  }

  remove(id: number) {
    const todos = this.todos.filter((todo) => todo.id !== id);
    console.log(todos);
    this.todos = todos;
    console.log('remove');
  }

  toggle(id: number) {
    const ind = this.todos.findIndex((ind) => ind.id === id);
    this.todos[ind].completed = !this.todos[ind].completed;
    // console.log(this.checked);
  }

  addTodo(todo: ITodo) {
    // this.todos = [todo, ...this.todos]
    this.todos.unshift(todo);
  }
}
