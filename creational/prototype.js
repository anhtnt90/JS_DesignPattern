var task = function(name) {
    this.name = name;
    this.completed = false;
}

task.prototype.complete = function() {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

task.prototype.save = function() {
    console.log('saving task: ' + this.name);
}

var task1 = new task('A');
var task2 = new task('B');
var task3 = new task('C');

task1.complete();
task2.save();
task3.save();