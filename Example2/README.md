#Example2 Goals
This example will compile a single Less file into one CSS file and the other task will take multiple Less files and compile them into one file. In this example you'll see there are two different registered Grunt tasks for you to use.

#Example2 Explained
In this example I setup 2 different Grunt tasks under the Less compiler. 
The first task is:

	onlyFile1: {
		files: [
			{"dist/css/file1.css": "src/less/file1.less"}
		]
	},

This task targets only the Less file called file1 and compiles it into file1.css. This is a pretty simple example of 1 to 1 compiling for Less files.

The next Less task is one that compiles multiple files:

	allFiles: {
		files: [
			{"dist/css/common.css": "src/less/*.less"}
		]
	}

Any less files in the src/less/ folder will get compiled into 1 CSS file called dist/css/common.css. Grunt uses this 1 to many syntax for a lot of different tasks, so once you get use to it you can use it all over the place. If you were to aggregate CSS/JS files you'd use the same sytnax as the one above.

One difference from Example1 that you'll notice is how I registerd the Grunt tasks.

	grunt.registerTask("onlyfileone", ["less:onlyFile1"]);
	grunt.registerTask("prod", ["less:allFiles"]);

In both tasks there is the word `less`, a colon, and the sub-tasks (`onlyFile1`, or `allfiles`). This is where I think Grunt becomes really awesome. What Grunt is allowing me to do is point directly at a sub-task instead of the task as a whole. So if I registered: `grunt.registerTask("prod", ["less"]);` it would run all sub-tasks inside of the `less` task no matter how many there are. Using the : helps tell Grunt which tasks to specifically run; you can chain these together if you need to:

	grunt.registerTask("prod", ["less:allFiles", "less:someOtherTask", "less:anotherTask"]);

#To run this Example
`grunt onlyfileone` will compile only one Less file

`grunt prod` will compile all of the Less files

#Additional Notes
For more information on the [grunt-contrib-less make sure to visit their github page.](https://github.com/gruntjs/grunt-contrib-less)