/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    // Metadata.
    meta: {
      version: "1.0.0"
    },
    banner: "/*! jQuery highlight plugin - v<%= meta.version %> - " +
      "<%= grunt.template.today(\"yyyy-mm-dd\") %>\n" +
      "* http://efocus.nl/\n" +
      "* Copyright (c) <%= grunt.template.today(\"yyyy\") %> " +
      "Nadjib Amar; Licensed MIT */\n",

    // Task configuration.
    concat: {
      options: {
        banner: "<%= banner %>",
        stripBanners: true
      },
      dist: {
        src: ["src/jquery.highlight.js"],
        dest: "dist/jquery.highlight.js"
      }
    },
    uglify: {
      options: {
        banner: "<%= banner %>",
        sourceMap: true
      },
      dist: {
        src: "<%= concat.dist.dest %>",
        dest: "dist/jquery.highlight.min.js"
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          QUnit: true
        }
      },
      gruntfile: {
        src: "Gruntfile.js"
      },
      src_test: {
        src: ["src/**/*.js", "test/*.js"]
      }
    },
    eslint: {
      options: {
          configFile: 'eslint.conf.json',
      },
      target: "<%= jshint.src_test.src %>"
    },
    validation: {
      options: {
        reset: true,
        reportpath: false,
        stoponerror: true,
        doctype: "HTML5"
      },
      files: {
        src: [
          "src/**/*.html"
        ]
      }
    },
    karma: {
      test: {
        configFile: 'karma.conf.js'
      }
    },
    copy: {
      main: {
        src: "src/index.html",
        dest: "dist/index.html",
        options: {
          process: function (content) {
            return content.replace("jquery.highlight.js", "jquery.highlight.min.js");
          },
        },
      },
    },
    watch: {
      gruntfile: {
        files: "<%= jshint.gruntfile.src %>",
        tasks: ["jshint:gruntfile"]
      },
      src_test: {
        files: [
          "src/**/*.js",
          "test/*.js"
        ],
        tasks: ["jshint:src_test", "eslint", "karma"]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-html-validation");
  grunt.loadNpmTasks("grunt-karma");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default tasks: build everything, ready for deployment.
  grunt.registerTask("default", [
    // Linting: jshint, validation
    "jshint",
    "eslint",
    "validation",

    // Unit testing: karma
    "karma",

    // 3/3 building: concat, uglify, copy
    "concat",
    "uglify",
    "copy"
  ]);

  // Unit test and test coverage tasks only.
  grunt.registerTask("test", ["karma"]);

  // Linting tasks
  grunt.registerTask("lint", ["jshint", "eslint", "validation"]);
};
