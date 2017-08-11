var repo = {
    tasks: {},
    commands: [],
    get: function (id) {
        console.log('Getting task: ' + id);
        return {
            name: 'new task from db'
        }
    },
    save: function(task) {
        repo.tasks[task.id] = task;
        console.log('Saving ' + task.name + ' to do db');
    },
    replay: function() {
        for(var i = 0; i< repo.commands.length; i++) {
            var command = repo.commands[i];
            repo.execute(command.name, command.obj);
        }
    }
}

repo.execute = function(name) {
    var args = Array.prototype.slice.call(arguments, 1);

    repo.commands.push({
        name: name,
        obj: args[0]
    });

    if(repo[name]) {
        return repo[name].apply(repo, args)
    }
    return false;
};

repo.execute('save', {
    id: 1,
    name: 'Task 1',
    completed: false
});

console.log(repo.tasks);