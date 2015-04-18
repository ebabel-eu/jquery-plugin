/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    meta: {
      version: "1.0.0"
    },
    banner: "/*! jQuery test plugin - v<%= meta.version %> - " +
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
        src: ["src/jquery.test.js"],
        dest: "dist/jquery.test.js"
      }
    },
    uglify: {
      options: {
        banner: "<%= banner %>",
        sourceMap: true
      },
      dist: {
        src: "<%= concat.dist.dest %>",
        dest: "dist/jquery.test.min.js"
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
        src: ["src/**/*.js", "test/**/*.js"]
      }
    },
    qunit: {
      files: ["test/**/*.html"]
    },
    copy: {
      main: {
        src: 'src/index.html',
        dest: 'dist/index.html',
        options: {
          process: function (content) {
            return content.replace("jquery.test.js", "jquery.test.min.js");
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
        files: "<%= jshint.src_test.src %>",
        tasks: ["jshint:src_test", "qunit"]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-qunit");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default task.
  grunt.registerTask("default", ["jshint", "qunit", "concat", "uglify", "copy"]);

  // Unit test tasks only.
  grunt.registerTask("test", ["qunit"]);

};
