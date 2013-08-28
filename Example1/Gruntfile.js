module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-copy");

	// Project configuration.
	grunt.initConfig({
		copy : {
				dist : {
						expand: true,
						cwd: "src/",
						src: ["js/*", "css/**"],
						dest: "dist/"
				}
		},
	});

	grunt.registerTask("prod", ["copy"]);
};
