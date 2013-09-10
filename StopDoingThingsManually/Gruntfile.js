module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks("grunt-markdown");

	// Project configuration.
	grunt.initConfig({
		clean: {
			distFolders: ["../*/dist"],
			distAndNodeFolders: ["../*/dist", "../*/node_modules"]
		},
		markdown: {
			allExamples: {
				files: [
					{
						expand: true,
						cwd: "../",
						src: ["*/*.md", "!*/StopDoingThingsManually"],
						dest: "../",
						ext: ".html"
					}
				],
				options: {
					markdownOptions: {
						gfm: true
					}
				}
			},
			compileRoot: {
				src: "../README.md",
				dest: "../README.html",
				options: {
					markdownOptions: {
						gfm: true
					}
				}
			}
		},
		watch: {
			compileMD: {
				files: ["../*/*.md"],
				tasks: ["markdown"]
			}
		}
	});

	//the clean functions require a force for now.
	grunt.registerTask("cleandist", ["clean:distFolders"]);
	grunt.registerTask("cleanall", ["clean:distAndNodeFolders"]);
	grunt.registerTask("prod", ["markdown"]);
};
