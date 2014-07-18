#Example4 Goals
A you ready to "watch" something cool happen!? So you've got all of these awesome Grunt tasks, but who wants to type `grunt dev` (or whatever) each time they're working on something? Not me, so more than likely not you. This example will show you how to make it so Grunt tracks your file changes and runs any task(s) you want automatically.

#Example4 Explained
Before I get into the Watch command I want to try and clarify something up front. The files that Grunt "watches" do not have to be the same files that are associated with that task you want run (most of the time they will be, but its not required). For example you could have Grunt compile Less files on any change done to an HTML file. It might seem wasteful, but there is probably a perfect case for it. Again, commonly when you configure the Watch you will probably have it the same files that the actual task is associated with. It'll look redudant, but I'll do my best to explain it clearly below.

In each Watch configuration you need to pick what files the task needs to watch and what tasks to run.

	onlyhtml: {
		files: ["src/test.html"],
		tasks: ["concat", "less"]
	},

Above is the confugation for `onlyhtml`. The Grunt Watch feature will only trigger when you save the `src/test.html` file. When you save the the test.html file it will run the `concat` and `less` task. Do an `npm install`, and then type `grunt watch:onlyhtml`. when you do this you'll see a message like `Waiting...`. This is Grunt Watch's way of telling you that its waiting for you to save a file. When save that file it'll run those tasks, and upon completion go back into the `Waiting...` state.

The Watch task has a `dev` and `prod` Watch configuration. The names of these configurations do not have to match the names used in the `grunt.registerTask("...")`. 

#To run this Example

Run `npm install` to get the required node_modules.

`grunt dev` will generate an unminified set of aggregated CSS and JS assets

`grunt prod` will generate an unminifed and minified set of aggregated CSS and JS assets

`grunt watch` will run the last configuration in the `watch` task. (In this case it would be `watch:prod`)

`grunt watch:dev` will be the same as `grunt dev`, but using the Watch feature.

`grunt watch:prod` will be the same as `grunt prod`, but using the Watch feature.


#Additional Notes
For more information visit the following links:

* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

* [grunt-contrib-watch on Sourcegraph.com](http://sourcegraph.com/github.com/gruntjs/grunt-contrib-watch)