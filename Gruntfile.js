'use strict';

var hooker = require('hooker');


module.exports = function (grunt) {
    hooker.hook(grunt.task, function (opt) {
        // console.log(arguments);
        // console.log(grunt.task);
        console.log(grunt.task.current);
    });

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.registerTask('log', 'Log to the console.', function (message) {
        console.log(message);
    });
    grunt.registerTask('default', function () {
        grunt.task.run('concurrent');
    });
    grunt.initConfig({
        concurrent: {
            logNo: {
                options: {
                    logConcurrentOutput: false
                },
                tasks: ['log:one', 'log:two']
            },
            logYes: {
                options: {
                    logConcurrentOutput: true
                },
                tasks: ['log:one', 'log:two']
            }
        }
    });
};
