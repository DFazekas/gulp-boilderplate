var gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('scripts', ['modernizr'], function(callback) {
    /* Automate webpack. */
    webpack(require('../../webpack.config.js'), function(err, stats) {
        if (err) {
            // Display error message, if any.
            console.log(err.toString());
        }

        // Display stats.
        console.log(stats.toString());
        callback();
    });
});
