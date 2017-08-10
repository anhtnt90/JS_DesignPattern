//Module pattern: objectn literal
var repo =  function() {
    var privateValue = '';
    return {
        get: function(id) {
            console.log('Getting task ' + id);
            return {
                name: 'new task from db'
            }
        },
        save: function(task) {
            console.log('Saving ' + task.name + ' to the db');
        }
    }
}

module.exports = repo();