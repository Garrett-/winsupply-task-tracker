import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.styl']
})
export class CreateTaskComponent implements OnInit {
  @Input() taskDataService;

  newTask: Task = new Task();

  errors = {
    name: false,
    date: false,
    assigned: false
  }

  // shorthand for service DI
  constructor() {
  }

  ngOnInit(): void {
  }

  private resetErrors() {
    for (const key in this.errors) {
      if (Object.prototype.hasOwnProperty.call(this.errors, key)) {
        this.errors[key] = false;
      }
    }
  }

  addTask() {
    let hasErrors = false;
    const { name, date, assigned } = this.newTask;

    this.resetErrors();

    if ( !name ) {
      this.errors.name = true;
      hasErrors = true;
    }
    if ( !date ) {
      this.errors.date = true;
      hasErrors = true;
    }
    if ( !assigned ) {
      this.errors.assigned = true;
      hasErrors = true;
    }


    if ( hasErrors === false ) {
      this.taskDataService.addTask(this.newTask);
      this.newTask = new Task();
    }
  }

}
