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

var myTask = new task('Legacy Task');


var urgentTask = new task('Urgent task');
urgentTask.priority = 2;
urgentTask.notify = function() {
    console.log('notifying important people');
}

urgentTask.complete();
urgentTask.save = function() {
    this.notify();
    task.prototype.save.call(this);
};

urgentTask.save();

myTask.complete();
myTask.save();