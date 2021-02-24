import { Component } from '@angular/core';
import { TaskDataService } from './task-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  providers: [TaskDataService]
})
export class AppComponent {
  constructor(public taskDataService: TaskDataService) {

  }
}
