module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> Copyright (c) 2014 <%= pkg.author %> under a BSD3 License. \n\nThis package contains Geocoder-JS, Copyright (c) 2013 Brandon Morrison under an MIT License:\n\nThe MIT License (MIT)\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/'
      },
      dist: {
        files: {
          // just minified
          'dist/<%= pkg.name %>.min.js': [ 'src/<%= pkg.name %>.js' ],
          // minified w/ geocoder
          'dist/<%= pkg.name %>-pack.min.js': [
            'bower_components/geocoder-js/dist/geocoder.js',
            'src/<%= pkg.name %>.js'
          ]
        }
      }
    },
    connect: {
      server: {
        options: {
          open: "http://localhost:8000/example",
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('demo', ['uglify', 'connect']);
};