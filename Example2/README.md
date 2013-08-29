#Example2 Goals
This example will compile a single Less file into one CSS file and the other task will take multiple Less files and compile them into one file. In this example you'll see there are two different
registered Grunt tasks for you to use.

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

Any less files in the src/less/ folder will get compiled into 1 CSS file called dist/css/common.css. Grunt uses this 1 to many syntax for a lot of different tasks. If you were to aggregate CSS/JS files you'd use the same sytnax as the one above.

To run the single file task type `grunt onlyfileone`.

If you want to compile all the files type `grunt prod`.

#Additional Notes
For more information on the [grunt-contrib-less make sure to visit their github page.](https://github.com/gruntjs/grunt-contrib-less)