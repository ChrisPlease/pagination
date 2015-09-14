module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			primary: {
				port: 9001,
				base: 'src'
			}
		}
	});

	grunt.loadNpmTasks('grunt-connect');
	grunt.registerTask('default', 'connect:primary');
}