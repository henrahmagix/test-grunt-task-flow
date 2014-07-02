'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        'git-describe': {
            dev: {
                options: {
                    cwd: '.'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-git-describe');

    grunt.registerTask('default', ['test']);

    grunt.registerTask('log', 'Log to the console.', function (message) {
        console.log(message);
    });

    grunt.registerTask('one', 'log:one');
    grunt.registerTask('two', 'log:two');
    grunt.registerTask('three', 'log:three');
    grunt.registerTask('four', 'log:four');

    grunt.registerTask('event', 'Run a task that waits for an event.', function () {
        grunt.event.once('git-describe', function (rev) {
            console.log('event');
        });
        grunt.task.run(['git-describe:dev']);
    });

    grunt.registerTask('test', 'Test grunt task flow.', ['one', 'two', 'event', 'three', 'four']);
};
