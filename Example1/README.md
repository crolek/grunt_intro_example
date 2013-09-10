#Example1 Goals
This example will show you one of the simplest things you can do with Grunt. One is define a custom task (this is the `grunt prod` task), and the other is configuring the Copy Task.

#Example1 Explained
This is the start of the grunt-contrib-copy task. The part that starts with `dist: {` is where you start setup the `dist` configuration for the `copy` task. Each task can have multiple configurations. You'll see how this comes in handy later.

	copy: { /* start of the copy task */
		dist: { /* start of the dist configuration */
			expand: true,
			cwd: "src/",
			src: ["js/*", "css/**"],
			dest: "dist/"
		} /* end of dist configuration */
	} /* end of copy task */

Expand turns on dynamic file expansion.

`expand: true,`

The cwd (Current Working Directory) is useful for when you need to path
somewhere, but don't want to type that long path each time.

`cwd: "src/",`

The src section can be a single file, array of files, or match a pattern. 
Remember, because I used cwd above the current path is: `src/`
The `css/**` piece tells Grunt to not only look in the root of the css folder, 
also copy the contents of all of the sub folders. This configuration uses the [dynamic file objects feature](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically) and the [global pattern syntax](http://gruntjs.com/configuring-tasks#globbing-patterns). 

`src: ["js/*", "css/**"],`

The dest (destination) is simply where the files will go after the task is done. In this
case the task is to simply copy and paste the file to that directory. 

`dest: "dist/"`


Below is how you'd register a custom task with Grunt. Registering a task with Grunt is essentially grouping  set of tasks into one name that you can use for later execution. A Grunt task can have one or many tasks; in the example below it'll only do one task and that is the `copy` task.

`grunt.registerTask("prod", ["copy"]);`

To "run" a Grunt task you use a simple syntax of the word grunt and the task name. In this case I named the task "prod", so to run this example type `grunt prod` into your command line window (after you did the `npm install`).


#To run this Example

`grunt prod` will move the CSS and JS assets to the `/dist` folder.

#Additional Notes
For more information visit the following links:

* [grunt-contrib-copy make sure to visit their github page.](https://github.com/gruntjs/grunt-contrib-copy)

* [dynamic file objects feature](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically) 

* [global pattern syntax](http://gruntjs.com/configuring-tasks#globbing-patterns)