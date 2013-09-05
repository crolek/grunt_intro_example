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
This will take the javascript file and run it against <insert uglifier />. If you wanted this task could do the concatenating of files for you, but it will only produce the minified file (thats why I have the concat task).


I setup this grunt file so an unminified version of the file will be created, and another minified verison of the file will be made. This way I can keep track of both version as I needed. The grunt task will first run the JS concatenator so that all the javascript files are turned into `dist/js/all-js.js`. Next the Less files will be compiled into `dist/css/common.css` much like Example2. However, the next two steps take those finished files, minify them, and save a copy off with thte word "min" in it. So `all-js.js` becomes `all-js.min.js`, and `common.css` becomes `common.min.css`.

I think if you go with a two file setup (one minified, one not) that its important to create 2 different Grunt tasks. One with the minification and one without it that way if you need an unminified version of the file(s) you don't have to monkey with your primary grunt task.


#Additional Notes
For more information on the [.]()