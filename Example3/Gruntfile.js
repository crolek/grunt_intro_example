module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	// Project configuration.
	grunt.initConfig({
		concat: {
			prod: {
				src: ["src/js/*.js"],
				dest: "dist/js/all-js.js"
			}
		},
		less: {
			allFiles: {
				files: [
					{"dist/css/common.css": "src/less/*.less"}
				]
			}
		},
		uglify: {
			js: {
				src: "dist/js/all-js.js",
				dest: "dist/js/all-js.min.js"
			}
		}
	});

	grunt.registerTask("dev", ["concat", "less"]);
	grunt.registerTask("prod", ["concat", "less", "uglify"]);
};
