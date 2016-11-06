(function ($) {
    "use strict";

    /** Global variables **/
    var $html         = $('html'),
        $body         = $('body'),
        $deviceWidth  = (window.innerWidth > 0) ? window.innerWidth : screen.width,
        $deviceHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;

	/** Get location and set data-location **/
    var $windowLocation = window.location.pathname;
        $html.attr('data-location', $windowLocation);

    /** Get browser language **/
    var browserLanguage = window.navigator.userLanguage || window.navigator.language;
    	$html.attr('data-browser-language', browserLanguage);

    /** DeviceJS no conflict **/
    var devicejs = device.noConflict();

    $(document).on('ready', function() {

        /** jQuery browser / device **/
            $html.addClass('ver-' + $.browser.versionNumber);
            $html.addClass('device_width-' + $deviceWidth);
            $html.addClass('device_height-' +$deviceHeight);
            if ($.browser.webkit) {
                $html.addClass('browser-webkit');
            } else if ($.browser.msie) {
                $html.addClass('browser-msie');
            } else if ($.browser.mozilla) {
                $html.addClass('browser-mozilla');
            }

        /** Placeholder **/
            $('input, textarea').placeholder({
                customClass: "js-placeholder"
            });

        /** Page scroller **/
            if ($('[data-scroll]').length > 0) {
                $('[data-scroll]').on('click', function(e) {
                    var $scroll;
                    e.preventDefault();
                    $scroll = $(this).attr('data-scroll');
                    if ($scroll === 'up') {
                        $('html, body').animate({
                            scrollTop: $($scroll).offset().top
                        }, 900, 'swing');
                    } else if ($scroll.charAt(0) === '#') {
                        if ($html.hasClass('mobile')) {
                            $('html, body').animate({
                                scrollTop: $($scroll).offset().top
                            }, 900, 'swing');
                        } else {
                            $('html, body').animate({
                                scrollTop: $($scoll).offset().top
                            }, 900, 'swing');
                        }
                    }
                    return false;
                });
            }

        /** Parallax Skrollr **/
            if (!$html.hasClass('mobile') && !$html.hasClass('tablet') && $deviceWidth > 991) {
                $('[data-parallax]').each(function() {
                    var $this = $(this),
                        $item = $this.attr('data-parallax');

                    $this.attr('data-top-bottom', 'background-position: 50% -' + $item + 'px');
                    $this.attr('data-bottom-top', 'background-position: 50% ' + $item + 'px');
                    $this.attr('data-center', 'background-position: 50% 0px');
                })
            } else {
                $('[data-parallax]').each(function() {
                    var $this = $(this);

                    $this.addClass('js-parallax-disabled');
                })
            }
	}); //- Document on ready [end]

	$(window).on('load', function() {

		$body.addClass('window-loaded');

	});//- Window on load [end]

}(jQuery))
