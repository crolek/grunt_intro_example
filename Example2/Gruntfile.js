module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-less");

	// Project configuration.
	grunt.initConfig({
		less: {
			onlyFile1: {
				files: [
					{"dist/css/file1.css": "src/less/file1.less"}
				]
			},
			allFiles: {
				files: [
					{"dist/css/common.css": "src/less/*.less"}
				]
			},
			someTaskWeNeverWantToRun: {
				files: [
					{"filesThatDontExist": "becauseWeWillNeverRunThis"}
				]
			}
		},
	});

	grunt.registerTask("onlyfileone", ["less:onlyFile1"]);
	grunt.registerTask("prod", ["less:allFiles"]);
};
