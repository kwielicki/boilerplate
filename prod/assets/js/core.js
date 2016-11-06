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
        
	}); //- Document on ready [end]

	$(window).on('load', function() {

		$body.addClass('window-loaded');

	});//- Window on load [end]

}(jQuery))
