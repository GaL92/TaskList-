import { Component } from '@angular/core';
import {Task} from './Task';
import {TASKS} from './mock-tasklist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getTask(): Task[]{
    return TASKS
  }
}
