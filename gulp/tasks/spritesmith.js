'use strict';

module.exports = function() {
    $.gulp.task('sprite:png', function () {
        var spriteData = $.gulp.src('./source/sprite/*.{png,gif}')
         .pipe($.gp.spritesmith({
             imgName: 'sprite.png',
             imgPath: $.config.root  + '/assets/css/',
             cssName: 'sprite.scss',
             cssFormat: 'scss'
         }));
             spriteData.img
                 .pipe($.gulp.dest($.config.root  + '/assets/img/'));
             spriteData.css
                 .pipe($.gulp.dest('./source/style/common/'));
        return spriteData;
    });


};
