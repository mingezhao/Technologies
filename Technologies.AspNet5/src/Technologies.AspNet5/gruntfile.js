/// <binding BeforeBuild='min, install' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        clean: ["wwwroot/lib/*", "wwwroot/temp/*"],
        bower: {
            install: {
                options: {
                    targetDir: "wwwroot/lib",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'wwwroot/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'wwwroot/css',
                    ext: '.min.css'
                }]
            }
        }
        //uglify: {
        //    buildCss: {
        //        options: {
        //            mangle: true,
        //            preserveComments: 'false',
        //        },
        //        files: {
        //            'wwwroot/css/site.min.css': ['wwwroot/css/site.css']
        //        }
        //    },
        //}
    });

    grunt.registerTask("install", ["clean", "bower:install"]);
    grunt.registerTask("min", ["cssmin"]);

    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-clean");
    //grunt.loadNpmTasks("grunt-contrib-uglify");
};