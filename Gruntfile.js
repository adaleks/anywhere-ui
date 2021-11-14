module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-build-number');
  var semver = require('semver');


  var pkgJson = grunt.file.readJSON('packages/core/package.json');

  grunt.initConfig({
    bumpup: {
      //   setters: {
      //     version: function (oldVersion, releaseType, options, buildMeta) {
      //       if (releaseType === "build") {
      //         return semver.valid(oldVersion) + (buildMeta ? '-build.' + buildMeta : "");
      //       }
      //       console.log(oldVersion, releaseType)
      //       return semver.inc(oldVersion, releaseType) + (buildMeta ? '-build.' + buildMeta : "");
      //     },
      //     date: function (oldDate, releaseType, options, buildMeta) {
      //       return moment.utc().format(options.dateformat);
      //     }
      //   },

      files: ['packages/core/package.json', 'packages/angular/package.json', 'packages/react/package.json', 'packages/vue/package.json']
    },
    buildnumber: {
      options: {
        field: 'buildnum',
      },
      files: ['packages/core/package.json', 'packages/angular/package.json', 'packages/react/package.json', 'packages/vue/package.json']
    }

  });

  // Alias task for release with buildmeta suffix support
  grunt.registerTask('release', function (type, build) {
    var bumpParts = ['bumpup'];
    if (type) {
      bumpParts.push(type);
    }
    if (build) {
      if (build === "auto") {
        bumpParts.push(pkgJson.buildnum++);
      } else {
        bumpParts.push(build);
      }
    }
    // else {
    // }
    grunt.task.run(bumpParts.join(':'));
  });
};
