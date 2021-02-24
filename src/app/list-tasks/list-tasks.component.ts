import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../task';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.styl']
})
export class ListTasksComponent implements OnInit {
  @Input() taskDataService;

  get tasks() {
    return this.taskDataService.getAllTasks();
  }

  // shorthand for service DI
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.http.get('./assets/data.json', {
      responseType: 'json'
    })
    .subscribe((data: Task[]) => {
      // TODO: validate data
      data.forEach(task => {
        this.taskDataService.addTask(task);
      });
    });
  }

  deleteTaskById(id: number) {
    this.taskDataService.deleteTaskById(id);
  }

}
