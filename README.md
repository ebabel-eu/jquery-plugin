# jQuery test plugin
Sample jQuery plugin to test how to write one with typical features.

## Install jQuery test plugin
The bower command will install both the plugin and its dependencies.

```
install bower https://github.com/ebabel-eu/jquery-plugin.git --save
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

## todo:

* Use QUnit to write several unit tests for the plugin.
* Add HTML linting for the sample file.
