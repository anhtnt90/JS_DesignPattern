var Task = require('./task');

var notificationService = function() {
    var message = 'Notifying';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};

var loggingService = function() {
    var message = 'Logging';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};

var auditingService = function() {
    var message = 'Auditing';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};

function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
    return this.observerList.push(obj);
}

ObserverList.prototype.get = function (index) {
    if( index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}

ObserverList.prototype.count = function() {
    return this.observerList.length;
}

ObserverList.prototype.indexOf = function(obj, startIndex) {
    var i =startIndex;
    while(i < this.observerList.length) {
        if(this.observerList[i] === obj) {
            return i
        };
        i++;
    }
    return -1;
}

var ObserverTask = function(data) {
    Task.call(this, data);
    this.observers = new ObserverList();
}

ObserverTask.prototype.addObserver = function(observer) {
    this.observers.add(observer);
}

ObserverTask.prototype.notify = function(context) {
    console.log('context: ' + Object.keys(context));
    this.observerCount = this.observers.count();
    for(var i=0; i< this.observerCount; i++) {
        this.observers.get(i)(context);
    }
}

ObserverTask.prototype.save = function(obsrver) {
    this.notify(this);
    Task.prototype.save.call(this);
}

ObserverTask.prototype.removeObserver = function(obsrver) {
    this.observers.observerList.splice(this.observers.indexOf(obsrver, 0), 1);
}

//var task1 = new Task({name: 'create a demo for constructors', user: 'Jon'});
var task1 = new ObserverTask({name: 'create a demo for constructors', user: 'Jon'});

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();


task1.addObserver(not.update);
task1.addObserver(ls.update);
task1.addObserver(audit.update);
task1.save();

task1.removeObserver(audit.update);
task1.save();