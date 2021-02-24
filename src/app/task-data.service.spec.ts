import { TestBed, inject } from '@angular/core/testing';
import { Task } from './task';

import { TaskDataService } from './task-data.service';

describe('TaskDataService', () => {
  let service: TaskDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllTasks()', () => {

    it('should return an empty array by default', inject([TaskDataService], (service: TaskDataService) => {
      expect(service.getAllTasks()).toEqual([]);
    }));

    it('should return all tasks', inject([TaskDataService], (service: TaskDataService) => {
      let task1 = new Task({ name: "Task 1", date: "1/02/2021", assigned: "Tester 1" });
      let task2 = new Task({ name: "Task 2", date: "1/03/2021", assigned: "Tester 2" });

      service.addTask(task1);
      service.addTask(task2);

      expect(service.getAllTasks()).toEqual([task1, task2]);
    }));

  });

  describe('#save(task)', () => {

    it('should automatically assign an id', inject([TaskDataService], (service: TaskDataService) => {
      let task1 = new Task({name: 'Test 1'});
      let task2 = new Task({name: 'Test 2'});
      service.addTask(task1);
      service.addTask(task2);
      expect(service.getTaskById(1)).toEqual(task1);
      expect(service.getTaskById(2)).toEqual(task2);
    }));

  });

  describe('#deleteTaskById(id)', () => {

    it('should remove task with the corresponding id', inject([TaskDataService], (service: TaskDataService) => {
      let task1 = new Task({title: 'Hello 1'});
      let task2 = new Task({title: 'Hello 2'});
      service.addTask(task1);
      service.addTask(task2);
      expect(service.getAllTasks()).toEqual([task1, task2]);
      service.deleteTaskById(1);
      expect(service.getAllTasks()).toEqual([task2]);
      service.deleteTaskById(2);
      expect(service.getAllTasks()).toEqual([]);
    }));

    it('should not removing anything if task with corresponding id is not found', inject([TaskDataService], (service: TaskDataService) => {
      let task1 = new Task({title: 'Hello 1'});
      let task2 = new Task({title: 'Hello 2'});
      service.addTask(task1);
      service.addTask(task2);
      expect(service.getAllTasks()).toEqual([task1, task2]);
      service.deleteTaskById(3);
      expect(service.getAllTasks()).toEqual([task1, task2]);
    }));

  });
});
