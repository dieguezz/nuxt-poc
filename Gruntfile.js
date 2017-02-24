'use strict';

module.exports = function(grunt) {

    var serveStatic = require('serve-static');

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist',
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '0.0.0.0',
        ports: {
            server: grunt.option('serverPort') || 9000,
            liveReload: grunt.option('liveReloadPort') || 35729
        }
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        appConfig: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= appConfig.app %>/{,**/}*.js'],
                tasks: ['newer:jshint:all', 'includeSource:server'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            compass: {
                files: [
                    '<%= appConfig.app %>/styles/**/*.{scss,sass}',
                    '<%= appConfig.app %>/modules/*/styles/**/*.{scss,sass}'
                ],
                tasks: ['compass:server', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            html: {
                files: ['<%= appConfig.app %>/*.html'],
                tasks: ['includeSource:server']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '.tmp/*.html',
                    '<%= appConfig.app %>/**/*.html',
                    '<%= appConfig.app %>/**/*.json',
                    '.tmp/styles/{,*/}*.css',
                    '<%= appConfig.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: appConfig.ports.server,
                hostname: appConfig.hostname,
                livereload: appConfig.ports.liveReload
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function(connect) {
                        return [
                            serveStatic('.tmp'),
                            connect().use(
                                '/bower_components',
                                serveStatic('./bower_components')
                            ),

                            serveStatic(appConfig.app)
                        ];
                    }
                }
            },
            server: {
                options: {
                    middleware: function(connect) {
                        return [
                            serveStatic('.tmp'),
                            connect().use(
                                '/bower_components',
                                serveStatic('./bower_components')
                            ),

                            serveStatic(appConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    middleware: function(connect) {
                        return [
                            serveStatic('.tmp'),
                            serveStatic('dist')
                        ];
                    }
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= appConfig.app %>/{,**/}*.js',
                    '!<%= appConfig.app %>/vendor/*.js'
                ]
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.sass-cache',
                        '.tmp',
                        '.coverage',
                        '<%= appConfig.dist %>/{,*/}*',
                        '!<%= appConfig.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '**/*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            options: {
                //cwd: '<%= appConfig.app %>'
                'exclude': []
            },
            app: {
                src: [
                    '<%= appConfig.app %>/index.html',
                    '<%= appConfig.app %>/statics/*.html'
                ],
                ignorePath: /\.\.\//
            },
            sass: {
                src: ['<%= appConfig.app %>/styles/{,*/}*.{scss,sass}'],
                ignorePath: /(\.\.\/){1,2}bower_components\//
            }
        },

        includeSource: {
            options: {
                basePath: ['<%= appConfig.app %>', '.tmp'],
                baseUrl: '',
            },
            server: {
                files: {
                    '.tmp/index.html': '<%= appConfig.app %>/index.html'
                }
            },
            dist: {
                files: {
                    '<%= appConfig.dist %>/index.html': '<%= appConfig.app %>/index.html'
                }
            }
        },

        sass: {
            options: {
                sourceMap: true
            },
            all: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: ['styles/main.scss'],
                    dest: '.tmp',
                    ext: '.css'
                }]
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= appConfig.dist %>/{,**/}*.js',
                    '<%= appConfig.dist %>/styles/{,*/}*.css',
                    '<%= appConfig.dist %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= appConfig.dist %>/styles/fonts/*'
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= appConfig.dist %>/index.html',
            options: {
                dest: '<%= appConfig.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= appConfig.dist %>/{,**/}*.html'],
            css: ['<%= appConfig.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= appConfig.dist %>', '<%= appConfig.dist %>/images']
            }
        },

        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= appConfig.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },
        concat: {
            // Only one 'use strict'
            useStrict: {
                options: {
                    banner: '\'use strict\';\n',
                    process: function(src, filepath) {
                        return '// Source: ' +
                            filepath + '\n' +
                            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                    }
                },
                src: ['.tmp/concat/scripts/scripts.js'],
                dest: '.tmp/concat/scripts/scripts.js'
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= appConfig.app %>/images',
                    src: '**/*.{png,jpg,jpeg,gif}',
                    dest: '<%= appConfig.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= appConfig.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= appConfig.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= appConfig.dist %>',
                    src: ['*.html', 'views/{,*/}*.html', 'modules/{,*/}*.html'],
                    dest: '<%= appConfig.dist %>'
                }]
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= appConfig.dist %>/*.html']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= appConfig.app %>',
                    dest: '<%= appConfig.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '.htpasswd',
                        '*.html',
                        'statics/{,*/}*.html',
                        '!statics/{,*/}*.mock.html',
                        'images/{,*/}*',
                        'fonts/*',
                        'json/lang/*',
                        'modules/**',
                        '!modules/*/*.js'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= appConfig.dist %>/images',
                    src: ['generated/*']
                }, {
                    expand: true,
                    cwd: '.',
                    src: 'bower.json',
                    dest: '<%= appConfig.dist %>'
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= appConfig.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        versioncheck: {
            options: {
                skip: ['angular', 'angular-mocks', 'angular-sanitize'],
                hideUpToDate: true
            },
            run: {}
        },

        // release: {
        //   /* For more options: https://github.com/geddski/grunt-release#options */
        //   options: {
        //     additionalFiles: ['bower.json'],
        //     indentation: '\t', //default: '  ' (two spaces)
        //     commitMessage: 'Release v<%= version %>', //default: 'release <%= version %>'
        //     tagMessage: 'v<%= version %>', //default: 'Version <%= version %>',
        //     tagName: 'v<%= version %>',
        //     npm: false
        //   }
        // }

    });

    grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'wiredep',
            'includeSource:server',
            'sass',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'wiredep',
        'includeSource:dist',
        'useminPrepare',
        'sass',
        'imagemin',
        'autoprefixer',
        'concat:generated',
        'concat:useStrict',
        'copy:dist',
        // 'cdnify',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin',
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'build'
    ]);

};