'use strict'

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    };
    complete() {
        console.log('completing task: ' + this.name);
        this.completed = true;
    };

    save () {
        console.log('saving tasks: ' + this.name);
    }
}

var task1 = new Task('A');
var task2 = new Task('B');
var task3 = new Task('C');

task1.complete();
task2.save();
task3.save();