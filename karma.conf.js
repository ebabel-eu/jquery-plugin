module.exports = function(config) {
  config.set({
    basePath: "",
    autoWatch: true,
    frameworks: ["qunit"],
    files: [
      // Dependencies
      "bower_components/jquery/dist/jquery.min.js",
      "bower_components/jquery-ui/jquery-ui.min.js",

      // Code to test
      "src/*.js",

      // Tests
      "test/*.js"
    ],
    browsers: ["PhantomJS"],

    plugins:[
      'karma-coverage',
      'karma-qunit',
      'karma-phantomjs-launcher'
    ],

    reporters: ["progress", "coverage"],
    preprocessors: { "src/*.js": ["coverage"] },

    singleRun: true
  });
};