var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

var TaskService = function() {
    return {
        complete: function(task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        },
        setCompleteDate: function(task) {
            task.completeDate = new Date();
            console.log(task.name + ' completed on ' + task.completeDate);
        }
    }
}();

//implement facade
var TaskServiceWrapper = function() {
    var completeAndNotify = function (task) {
        TaskService.complete(myTask);
        if(myTask.completed == true) {
            TaskService.setCompleteDate(myTask);
        }
    }

    return {
        completeAndNotify: completeAndNotify
    }
}();

var myTask = new Task({
   name: 'MyTask',
   priority: 1,
   project: 'Courses',
   user: 'Jon',
   completed: false 
});

TaskServiceWrapper.completeAndNotify(myTask);