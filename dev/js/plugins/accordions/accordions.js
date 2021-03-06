/*
 * @author Krzysztof Wielicki
 *
*/
(function ($) {
    $(document).ready(function() {
        $.fn.hasAttr = function(name) {
            return this.attr(name) !== undefined;
        };
        if ($('.js-accordion').length > 0) {
            $('.js-accordion').each(function() {
                var $this = $(this);

                var $accordionHeader  = $this.find($('.js-accordion__header')),
                    $accordionContent = $this.find($('.js-accordion__content'));

                    $accordionHeader.toggleClass('inactive-header');

                if ($this.hasAttr('data-multiple')) {
                    $accordionHeader.on('click', function() {
                        $(this).next().toggleClass('is-active').stop( true, true ).slideToggle('slow');
                    });
                } else {
                    $accordionHeader.on('click', function() {
                        if($(this).is('.inactive-header')) {
                            $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().stop( true, true ).slideToggle().toggleClass('open-content');
                            $(this).toggleClass('active-header').toggleClass('inactive-header');
                            $(this).next().stop( true, true ).slideToggle().toggleClass('open-content');
                        } else {
                            $(this).toggleClass('active-header').toggleClass('inactive-header');
                            $(this).next().stop( true, true ).slideToggle().toggleClass('open-content');
                        }
                    });
                }

            });
        }
    })
})(jQuery);
