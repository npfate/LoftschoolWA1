'use strict';

module.exports = function() {
    $.gulp.task('sprite:png', function () {
        return $.gulp.src('./source/sprite/*.{png,gif}')
         .pipe($.gp.spritesmith({
             imgName: 'sprite.png',
             cssName: 'sprite.css',
             cssFormat: 'css'
         }))
         .pipe($.gulp.dest($.config.root  + '/assets/img/'));
    });
};
