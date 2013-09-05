#Example3 Goals
This example will show you how you'd setup a minified and non-minified version of css and js. Technically this is only a minor increase from Example2, but I think it was important enough to split out so certain parts can be clear.

#Example3 Explained
Debugging minified javascript is a pain, so its always nice to do development against an unminified code. In this example we'll be taking multiple Less files and compiling them into one CSS file, and then minifying them. We'll also be taking multiple JS files, concatenating them together, and then minifying them.

The first task is the one that does the JS file concatenation:
	
	concat: {
		prod: {
			src: ["src/js/*.js"],
			dest: "dist/js/all-js.js"
		}
	},
	
You might normally use this to concatanate CSS files if you were not already using a Less compiler. However, since I am using a Less compiler I'll just use it to concatenate all of the JS files.

The Less task you already saw in Example2.

The javascript uglify task is the next one:

	uglify: {
		js: {
			src: "dist/js/all-js.js",
			dest: "dist/js/all-js.min.js"
		}
	}

The uglify task does basically what any other javascript uglifier/minifier does. This specific uglifier can do 1 of two things. It can aggregate the files and uglify them, or it can just uglify specific files. I'm going with just having it uglify specific files because I'd like to also have a non-minified version of the files.



I setup this Grunt file so when `grunt prod` is run an unminified version of the file will be created, and another minified verison of the file will be made. This way I can keep track of both version as I needed. The grunt task will first run the JS concatenator so that all the javascript files are turned into `dist/js/all-js.js`. Next the Less files will be compiled into `dist/css/common.css` much like Example2. However, the next two steps take those finished files, minify them, and save a copy off with thte word "min" in it. So `all-js.js` becomes `all-js.min.js`, and `common.css` becomes `common.min.css`.


I think if you go with a two file setup (one minified, one not) that its important to create 2 different Grunt tasks. One with the minification and one without it that way if you need an unminified version of the file(s) you don't have to monkey with your primary grunt task.

#To run this Example

`grunt dev` will generate an unminified set of aggregated CSS and JS assets

`grunt prod` will generate an unminifed and minified set of aggregated CSS and JS assets


#Additional Notes
For more information on the [.]()