module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

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
		},
		watch: {
			everything: {
				files: ["src/**"],
				tasks: ["concat", "less", "uglify"]
			},
			onlyhtml: {
				files: ["src/test.html"],
				tasks: ["concat", "less"]
			},
			dev: {
				files: ["src/js/*.js", "src/less/*.less"],
				tasks: ["concat:prod", "less"]
			},
			prod: {
				files: ["src/js/*.js", "src/less/*.less"],
				tasks: ["concat:prod", "less", "uglify"]
			}
		}
	});

	grunt.registerTask("dev", ["concat", "less"]);
	grunt.registerTask("prod", ["concat", "less", "uglify"]);
};
