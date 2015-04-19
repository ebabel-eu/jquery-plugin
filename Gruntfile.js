module.exports = function (grunt) {
  "use strict";

  require("load-grunt-tasks")(grunt);

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
    eslint: {
      options: {
          configFile: 'eslint.conf.json',
      },
      target: ["src/**/*.js", "test/*.js"]
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
      src_test: {
        files: [
          "src/**/*.js",
          "test/*.js",
          "Gruntfile.js"
        ],
        tasks: ["eslint", "karma"]
      }
    }
  });

  // Default tasks: build everything, ready for deployment.
  grunt.registerTask("default", [
    // Linting: eslint, validation
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
  grunt.registerTask("lint", ["eslint", "validation"]);
};
