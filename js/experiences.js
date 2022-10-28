for (var i = 1; i <= 5; i++) {

    $('.slider.' + i).each(function() {
        var $this = $(this);
        var $group = $this.find('.slide_group.' + i);
        var $slides = $this.find('.slide.' + i);
        var bulletArray = [];

        var currentIndex = 0;
        var timeout;
        var delay = 5000;
        let video = null;

        function move(newIndex) {
            var animateLeft, slideLeft;

            advance();

            if ($group.is(':animated') || currentIndex === newIndex) {
                return;
            }

            bulletArray[currentIndex].removeClass('active');
            bulletArray[newIndex].addClass('active');

            if (newIndex > currentIndex) {
                slideLeft = '100%';
                animateLeft = '-100%';
            } else {
                slideLeft = '-100%';
                animateLeft = '100%';
            }

            $slides.eq(newIndex).css({
                display: 'block',
                left: slideLeft
            });
            $group.animate({
                left: animateLeft
            }, function() {
                $slides.eq(currentIndex).css({
                    display: 'none'
                });
                $slides.eq(newIndex).css({
                    left: 0
                });
                $group.css({
                    left: 0
                });
                currentIndex = newIndex;
            });
        }

        function advance() {
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                if (currentIndex < ($slides.length - 1)) {
                    move(currentIndex + 1);
                } else {
                    move(0);
                }
            }, delay);

        }

        // ----------------------- event manipulation videos --------------

        $('.slide_btn').on('click', function(e) {
            video.pause();
        });
        $('.slider.' + i).on('scroll', function(e) {
            video.pause();
        });

        $('video').on('play', function(e) {
            video = this;
            stop(timeout);
        });
        $('video').on('pause', function(e) {
            advance();
        });

        // -----------------------------------

        $('.next_btn').on('click', function() {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
            if (video != null && !video.paused) {
                video.pause()
            }

        });

        $('.previous_btn').on('click', function() {
            if (currentIndex !== 0) {
                move(currentIndex - 1);
            } else {
                move(3);
            }
            if (video != null && !video.paused) {
                video.pause()
            }
        });

        if (bulletArray.length !== 4) {
            $.each($slides, function(index) {

                var $button = $('<a class="slide_btn"> &bull;</a>');

                if (index === currentIndex) {
                    $button.addClass('active');
                }
                $button.on('click', function() {
                    move(index);
                }).appendTo('.slide_buttons.' + i);
                bulletArray.push($button);
            });
        }

        // $.each($slides, function(index) {
        //     // var $button = $('#bollet');
        //     var $button = $('.slide_btn');


        //     if (index === currentIndex) {
        //         $button.addClass('active');

        //     } e
        //     $button.on('click', function() {
        //         move(index);
        //     });
        //     bulletArray.push($button);
        // });


        advance();
    });
};

function stop(timeout) {
    if (timeout) {
        clearTimeout(timeout);
        timeout = 0;
    }
}