export class Task {
    id: number;
    name: string;
    date: string;
    assigned: string;
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
