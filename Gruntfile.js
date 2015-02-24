module.exports = function(grunt) {
    'use strict';

    var _ = require('lodash');

    grunt.loadNpmTasks("grunt-extend-config");

    /**
     * General config section
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        buildDir: 'build',
        frontDir: 'src',
        bowerDir: grunt.file.readJSON('.bowerrc').directory || 'vendor',
        frontend: {
            src: {
                dir: '<%= frontDir %>',
                js: {
                    app: ['app/**/*.js', '!app/**/*.spec.js'],
                    common: ['common/**/*.js', '!common/**/*.spec.js']
                },
                jsunit: [ '<%= frontDir %>/app/**/*.spec.js' ],
                jshint: [ '<%= frontDir %>/app/**/*.js', '!<%= frontDir %>/app/**/*.spec.js' ],
                tpl: [ '<%= frontDir %>/app/**/*.tpl.html', '<%= frontDir %>/common/**/*.tpl.html' ],
                html: ['**/*.html', '!**/*.tpl.html'],
                less: {
                    app: '<%= frontDir %>/app/**/*.less',
                    common: '<%= frontDir %>/common/**/*.less'
                }
            },
            vendor: {
                dir: '<%= bowerDir %>',
                js: [
                    '<%=bowerDir%>/jquery/dist/jquery.js',
                    '<%=bowerDir%>/angular/angular.js',
                    '<%=bowerDir%>/angular-sanitize/angular-sanitize.js',
                    '<%=bowerDir%>/bootstrap/dist/js/bootstrap.js',
                    '<%=bowerDir%>/angular-ui-router/release/angular-ui-router.js',
                    '<%=bowerDir%>/angular-bootstrap/ui-bootstrap-tpls.js'
                ],
                css: [
                    '<%=bowerDir%>/angular/angular-csp.css',
                    '<%=bowerDir%>/bootstrap/dist/css/bootstrap.min.css'
                ],
                less: [
                ],
                tpl: [
                ],
                assets: {
                    files: [
                        {
                            src: [ '<%= frontend.vendor.js %>' ],
                            dest: '<%= buildDir %>/',
                            cwd: '.',
                            expand: true
                        },
                        /**
                         * Bootstrap fonts
                         */
                        {
                            src: ['fonts/*'],
                            dest: '<%= buildDir %>/',
                            cwd: '<%=bowerDir%>/bootstrap/dist',
                            expand: true
                        }
                    ]
                }
            }
        },
        package: {
            build: {
                scripts: [
                    '<%= frontend.vendor.js %>',
                    '<%= buildDir %>/src/**/*.js'
                ],
                styles: [
                    '<%= recess.vendor.dest %>',
                    '<%= recess.app.dest %>'
                ]
            },
            compile: {
                scripts: [
                    '<%= concat.vendor.dest %>',
                    '<%= concat.app.dest %>'
                ],
                styles: [
                    '<%= buildDir %>/assets/<%= pkg.name %>-vendor-<%= pkg.version %>.css',
                    '<%= buildDir %>/assets/<%= pkg.name %>-app-<%= pkg.version %>.css'
                ]
            }
        }
    });


    /**
     * Clean task
     */
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.extendConfig({
        clean: {
            build: ['<%= buildDir %>'],
            compile: ['<%= buildDir %>/src', '<%= buildDir %>/vendor']
        }
    });


    /**
    * Copy task
    */
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.extendConfig({
        copy: {
            html: {
                files: [
                    {
                        src: '<%= frontend.src.html %>',
                        dest: '<%= buildDir %>/',
                        cwd: '<%= frontend.src.dir %>',
                        expand: true
                    }
                ]
            },
            assets: {
                files: [
                    {
                        src: '**/*',
                        dest: '<%= buildDir %>/assets',
                        cwd: '<%= frontend.src.dir %>/assets',
                        expand: true
                    }
                ]
            },
            app: {
                files: [
                    {
                        src: [ '<%= frontend.src.js.app %>' ],
                        dest: '<%= buildDir %>/src',
                        cwd: '<%= frontend.src.dir %>',
                        expand: true
                    }
                ]
            },
            common: {
                files: [
                    {
                        src: [ '<%= frontend.src.js.common %>' ],
                        dest: '<%= buildDir %>/src',
                        cwd: '<%= frontend.src.dir %>',
                        expand: true
                    }
                ]
            },
            vendor: '<%= frontend.vendor.assets %>'
        }
    });


    /**
     * Lint and minify CSS and LESS
     */
    grunt.loadNpmTasks('grunt-recess');
    grunt.extendConfig({
        recess: {
            options: {
                compile: true
            },
            vendor: {
                src: [
                    '<%= frontend.vendor.less %>',
                    '<%= frontend.vendor.css %>'
                ],
                dest: '<%= buildDir %>/assets/<%= pkg.name %>-vendor-<%= pkg.version %>.css'
            },
            app: {
                src: [
                    '<%= frontend.src.less.common %>',
                    '<%= frontend.src.less.app %>'
                ],
                dest: '<%= buildDir %>/assets/<%= pkg.name %>-app-<%= pkg.version %>.css'
            }
        }
    });


    /**
     * Convert AngularJS templates to JavaScript
     */
    grunt.loadNpmTasks('grunt-html2js');
    grunt.extendConfig({
        html2js: {
            app: {
                options: {
                    base: '<%= frontend.src.dir %>/app'
                },
                src: ['<%= frontend.src.tpl %>'],
                dest: '<%= buildDir %>/src/templates-app.js'
            },
            vendor: {
                src: ['<%= frontend.vendor.tpl %>'],
                dest: '<%= buildDir %>/src/templates-vendor.js'
            }
        }
    });

    /**
     * Validate files with JSHint
     */
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.extendConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: [
                'Gruntfile.js'
            ],
            frontend: ['<%= frontend.src.jshint %>']
        }
    });


    /**
     * Add, remove and rebuild AngularJS dependency injection annotations
     */
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.extendConfig({
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            compile: {
                files: [
                    {
                        src: [ '<%= frontend.src.js.app %>' ],
                        cwd: '<%= buildDir %>/src',
                        dest: '<%= buildDir %>/src',
                        expand: true
                    }
                ]
            }
        }
    });


    /**
     * Concat task
     */
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.extendConfig({
        concat: {
            options: {
                separator: '\n\n'
            },
            vendor: {
                src: [
                    '<%= frontend.vendor.js %>',
                    '<%= html2js.vendor.dest %>'
                ],
                dest: '<%= buildDir %>/assets/<%= pkg.name %>-vendor-<%= pkg.version %>.js'
            },
            app: {
                src: [
                    '<%=html2js.app.dest%>',
                    '<%=buildDir %>/src/**/*.js'
                ],
                dest: '<%= buildDir %>/assets/<%= pkg.name %>-app-<%= pkg.version %>.js'
            }
        }
    });


    /**
     * Minify files with UglifyJS
     */
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.extendConfig({
        uglify: {
            options: {
                mangle: false
            },
            vendor: {
                src: [
                    '<%= frontend.vendor.js %>', // Vendor js
                    '<%= html2js.vendor.dest %>' // Vendor templates
                ],
                dest: '<%= buildDir %>/assets/<%= pkg.name %>-vendor-<%= pkg.version %>.js'
            },
            app: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                src: [
                    '<%= buildDir %>/src/**/*.js'
                ],
                dest: '<%= buildDir %>/assets/<%= pkg.name %>-app-<%= pkg.version %>.js'
            }
        }
    });

    /**
     * Compress CSS files
     */
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.extendConfig({
        cssmin: {
            compress: {
                files: {
                    '<%= buildDir %>/assets/<%= pkg.name %>-vendor-<%= pkg.version %>.css': ['<%= buildDir %>/assets/<%= pkg.name %>-vendor-<%= pkg.version %>.css'],
                    '<%= buildDir %>/assets/<%= pkg.name %>-app-<%= pkg.version %>.css': ['<%= buildDir %>/assets/<%= pkg.name %>-app-<%= pkg.version %>.css']
                }
            }
        }
    });


    /**
     * Pack all sources into index.html
     */
    grunt.extendConfig({
        pack: {
            build: {
                dir: '<%= buildDir %>',
                scripts: '<%= package.build.scripts %>',
                styles: '<%= package.build.styles %>'
            },

            compile: {
                dir: '<%= buildDir %>',
                scripts: '<%= package.compile.scripts %>',
                styles: '<%= package.compile.styles %>'
            }
        }
    });


    /**
     * Run predefined tasks whenever watched file patterns are added, changed or deleted.
     */
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.extendConfig({
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            frontendApp: {
                files: ['<%= frontend.src.js.app %>'],
                tasks: ['jshint', 'copy:app'],
                options: {
                    livereload: true,
                    cwd: '<%= frontend.src.dir %>'
                }
            },
            frontendCommon: {
                files: ['<%= frontend.src.js.common %>'],
                tasks: ['jshint', 'copy:common'],
                options: {
                    livereload: true,
                    cwd: '<%= frontend.src.dir %>'
                }
            },
            styles: {
                files: ['<%= frontend.src.less.app %>', '<%= frontend.src.less.common %>'],
                tasks: ['recess'],
                options: {
                    livereload: true
                }
            },
            tpl: {
                files: ['<%= frontend.src.tpl %>'],
                tasks: ['html2js:app'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: [ '<%= frontend.src.html %>' ],
                tasks: [ 'copy:html', 'copy:assets', 'copy:app', 'pack:build' ],
                options: {
                    livereload: true,
                    cwd: '<%= frontend.src.dir %>'
                }
            }
        }
    });


    /**
     * Http server for development
     */
    grunt.loadNpmTasks('grunt-http-server');
    grunt.extendConfig({
        'http-server': {
            dev: {
                root: './build',
                port: 8080,
                host: "localhost",
                cache: 0,
                showDir : true,
                autoIndex: true,
                // server default file extension
                ext: "html",
                // run in parallel with other tasks
                runInBackground: true
            }
        }
    });

    grunt.extendConfig({
        'http-server': {
            prod: _.extend({}, grunt.config.get('http-server.dev'), {
                runInBackground: false
            })
        }
    });



    grunt.registerMultiTask('pack', 'Pack index.html with css and js', function () {
        var jsFiles = [],
            cssFiles = [],
            buildDirRE = new RegExp('^(' + grunt.config('buildDir') + ')\/', 'g');

        this.data.scripts.forEach(function (mask) {
            if (/^(http:\/\/|https:\/\/|\/\/)/.test(mask)) {
                jsFiles.push(mask);
            } else if (grunt.util.kindOf(mask) === 'array') {
                jsFiles = jsFiles.concat(mask);
            } else if (grunt.util.kindOf(mask) === 'string') {
                jsFiles = jsFiles.concat(grunt.file.expand(mask));
            }
        });
        this.data.styles.forEach(function (mask) {
            if (/^(http:\/\/|https:\/\/|\/\/)/.test(mask)) {
                cssFiles.push(mask);
            } else if (grunt.util.kindOf(mask) === 'array') {
                cssFiles = cssFiles.concat(mask);
            } else if (grunt.util.kindOf(mask) === 'string') {
                cssFiles = cssFiles.concat(grunt.file.expand(mask));
            }
        });
        jsFiles = jsFiles.map(function (file) {
            return file.replace(buildDirRE, '');
        });
        cssFiles = cssFiles.map(function (file) {
            return file.replace(buildDirRE, '');
        });

        grunt.file.copy(grunt.config('frontend.src.dir') + '/index.html', this.data.dir + '/index.html', {
            process: function (contents, path) {
                return grunt.template.process(contents, {
                    data: {
                        scripts: jsFiles,
                        styles: cssFiles
                    }
                });
            }
        });
    });


    grunt.registerTask('build', [
        'jshint', 'clean:build', 'copy', 'recess', 'html2js', 'pack:build'
    ]);

    grunt.registerTask('compile', [
        'build', 'ngAnnotate', 'concat', 'uglify', 'cssmin', 'clean:compile', 'pack:compile'
    ]);

    grunt.registerTask('up', [
        'build', 'http-server:dev', 'watch'
    ]);

    grunt.registerTask('up:compile', [
        'compile', 'http-server:prod'
    ]);

};