'use strict';

module.exports = function() {
    $.gulp.task('sprite:png', function () {
        return $.gulp.src('./source/sprite/*.{png,gif}')
         .pipe($.gp.spritesmith({
             imgName: 'sprite.png',
             cssName: 'sprite.scss',
             cssFormat: 'scss'
         }))
         .pipe($.gulp.dest($.config.root  + '/assets/img/sprite.png'));
    });
};
