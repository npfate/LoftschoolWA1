'use strict';

module.exports = function() {
    $.gulp.task('sprite:png', function () {
        var spriteData = $.gulp.src('./source/sprite/*.{png,gif}')
         .pipe($.gp.spritesmith({
             imgName: 'sprite.png',
             imgPath: $.config.root  + '/assets/css/',
             cssName: 'sprite.css',
             cssFormat: 'css'
         }));
             spriteData.img
                 .pipe($.gulp.dest($.config.root  + '/assets/img/'));
             spriteData.css
                 .pipe($.gulp.dest($.config.root  + '/assets/css/'));
        return spriteData;
    });


};
