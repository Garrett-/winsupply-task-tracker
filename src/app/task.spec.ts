import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let task = new Task({
      name: "test",
      date: '1/02/2021',
      assigned: "Tester"
    });
    expect(task.name).toEqual("test");
    expect(task.date).toEqual("1/02/2021");
    expect(task.assigned).toEqual("Tester");
  });
});
