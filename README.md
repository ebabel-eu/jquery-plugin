# jQuery test plugin
Sample jQuery plugin to test how to write one with typical features.

## Install jQuery test plugin
The bower command will install both the plugin and its dependencies.

```
install bower https://github.com/ebabel-eu/jquery-plugin.git --save
```

You could use the plugin directly as you find it in the src folder. However, if you want to build its distribution package and unit test it, run:

```
cd bower_components/jquery-plugin
bower install
npm install
grunt
```

## Use jQuery test plugin

```
$("selector").test();
```

Example:

```
$("p").test();
```

See the [sample usage](src/index.html) in HTML.

## Options
You can configure the plugin options if you don't want to use its default settings.

It's possible to set one or several options at once.

Example:

```
$("p").test({
    colour: "#ff69b4",
    duration: "slow"
});
```

### colour
The colour option sets the colour of the highlighting and can be any valid CSS colour.

Example:

```
$("p").test({
    colour: "#ff69b4"
});
```

### duration
The duration sets how fast the animation from highlighted colour to original colour should be. The value can be either a number or a string (slow, fast).

Example:

```
$("p").test({
    duration: "slow"
});
```

### setup
The setup callback is an optional function that will be called before running the plugin own code.

$("p").test({
    setup: function() { 
        $(this).css("font-weight", "600"); 
    }
});

### complete
The complete callback is an optional function will be called after the rollover animation is completed.

Example:

```
$("p").test({
    complete: function() { 
        $(this).slideUp(); 
    }
});
```

## Build from source
To build the source into a distribution package and run the unit tests just once, run:

```
grunt
```

## Develop from source
To continuously build and run unit tests everytime javascript is modified, run:

```
grunt watch
```

## Unit testing with Grunt
Unit tests can be run from the command line with either grunt:

```
grunt test
```

## Unit testing with npm
The npm setting from package.json refers to the grunt test tasks and will run the tests:

```
npm test
```


## todo:

* Add test coverage to check QUnit.
* Add HTML linting for the sample file https://www.npmjs.com/package/grunt-html-validation
