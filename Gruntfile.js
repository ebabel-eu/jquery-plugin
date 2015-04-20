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
    eslint: {
      options: {
          configFile: 'eslint.conf.json',
      },
      target: ["src/**/*.js", "test/*.js"]
    },
    scsslint: {
      all: [
        "src/css/sass/**/*.scss",
      ]
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
    sass: {
      css_src: {
        options: {
          sourcemap: "none"
        },
        files: {
          "src/css/screen.css": "src/css/sass/screen.scss"
        }
      },
      css_dist: {
        options: {
          style: "compressed",
          sourcemap: "inline"
        },
        files: {
          "dist/css/screen.min.css": "src/css/screen.css"
        }
      }
    },
    copy: {
      main: {
        src: "src/index.html",
        dest: "dist/index.html",
        options: {
          process: function (content) {
            return content
              .replace("jquery.highlight.js", "jquery.highlight.min.js")
              .replace("screen.css", "screen.min.css");
          },
        },
      },
      images: {
        files: [
          { 
            expand: true,
            cwd: 'src/images/', 
            src: ['**/*.{png,jpg,svg}'], 
            dest:'dist/images/' 
          }
        ]
      }
    },
    watch: {
      src_test: {
        files: [
          "src/**/*.js",
          "test/*.js",
          "src/css/sass/**/*.scss",
          "Gruntfile.js"
        ],
        tasks: ["eslint", "scsslint", "karma", "sass:css_src"]
      }
    }
  });

  // Default tasks: build everything, ready for deployment.
  grunt.registerTask("default", [
    // Linting: eslint, scsslint, validation
    "eslint",
    "scsslint",
    "validation",

    // Unit testing: karma
    "karma",

    // 3/3 building: concat, uglify, copy
    "concat",
    "uglify",
    "sass:css_src",
    "sass:css_dist",
    "copy"
  ]);

  // Unit test and test coverage tasks only.
  grunt.registerTask("test", ["karma"]);

  // Linting tasks.
  grunt.registerTask("lint", ["eslint", "scsslint", "validation"]);

  // Build without any linting or unit testing.
  grunt.registerTask("build", [
    "concat", 
    "uglify", 
    "sass:css_src", 
    "sass:css_dist", 
    "copy"
  ]);
};
