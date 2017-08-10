/*var repoFactory = function () {
    this.getRepo = function (repoType) {
        if(repoType === 'task') {
            var taskRepo = require('./taskRepository')();
            return taskRepo;
        }
        if(repoType === 'user') {
            var taskRepo = require('./userRepository')();
            return userRepo;
        }
        if(repoType === 'project') {
            var projectRepo = require('./projectRepository')();
            return projectRepo;
        }
    }
}*/

//v2
var repoFactory = function() {
    var repos = this;
    var repoList = [{name: 'task', source:'./taskRepository'},
                    {name: 'user', sources:'./userRepository'},
                    {name: 'project', source:'./projectRepository'}];
    repoList.forEach(function(repo){
        repos[repo.name] = require(repo.source)();
    });
};

module.exports =  repoFactory;