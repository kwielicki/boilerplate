!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var s,n,l,r=this;if(r.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(i,e){return'<button type="button" data-role="none">'+(e+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},r.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(r,r.initials),r.activeBreakpoint=null,r.animType=null,r.animProp=null,r.breakpoints=[],r.breakpointSettings=[],r.cssTransitions=!1,r.hidden="hidden",r.paused=!1,r.positionProp=null,r.respondTo=null,r.rowCount=1,r.shouldClick=!0,r.$slider=i(e),r.$slidesCache=null,r.transformType=null,r.transitionType=null,r.visibilityChange="visibilitychange",r.windowWidth=0,r.windowTimer=null,s=i(e).data("slick")||{},r.options=i.extend({},r.defaults,s,o),r.currentSlide=r.options.initialSlide,r.originalSettings=r.options,n=r.options.responsive||null,n&&n.length>-1){r.respondTo=r.options.respondTo||"window";for(l in n)n.hasOwnProperty(l)&&(r.breakpoints.push(n[l].breakpoint),r.breakpointSettings[n[l].breakpoint]=n[l].settings);r.breakpoints.sort(function(i,e){return r.options.mobileFirst===!0?i-e:e-i})}"undefined"!=typeof document.mozHidden?(r.hidden="mozHidden",r.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(r.hidden="webkitHidden",r.visibilityChange="webkitvisibilitychange"),r.autoPlay=i.proxy(r.autoPlay,r),r.autoPlayClear=i.proxy(r.autoPlayClear,r),r.changeSlide=i.proxy(r.changeSlide,r),r.clickHandler=i.proxy(r.clickHandler,r),r.selectHandler=i.proxy(r.selectHandler,r),r.setPosition=i.proxy(r.setPosition,r),r.swipeHandler=i.proxy(r.swipeHandler,r),r.dragHandler=i.proxy(r.dragHandler,r),r.keyHandler=i.proxy(r.keyHandler,r),r.autoPlayIterator=i.proxy(r.autoPlayIterator,r),r.instanceUid=t++,r.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,r.init(!0),r.checkResponsive(!0)}var t=0;return e}(),e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(0>t||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):o===!0?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(e=-e),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),s.options.vertical===!1?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),o[s.animType]=s.options.vertical===!1?"translate3d("+e+"px, 0px, 0px)":"translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.asNavFor=function(e){var t=this,o=t.options.asNavFor;o&&null!==o&&(o=i(o).not(t.$slider)),null!==o&&"object"==typeof o&&o.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};t[e.transitionType]=e.options.fade===!1?e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:"opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer),i.slideCount>i.options.slidesToShow&&i.paused!==!0&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this;i.options.infinite===!1?1===i.direction?(i.currentSlide+1===i.slideCount-1&&(i.direction=0),i.slideHandler(i.currentSlide+i.options.slidesToScroll)):(i.currentSlide-1===0&&(i.direction=1),i.slideHandler(i.currentSlide-i.options.slidesToScroll)):i.slideHandler(i.currentSlide+i.options.slidesToScroll)},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow=i(e.options.prevArrow),e.$nextArrow=i(e.options.nextArrow),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.appendTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled"))},e.prototype.buildDots=function(){var e,t,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(t='<ul class="'+o.options.dotsClass+'">',e=0;e<=o.getDotCount();e+=1)t+="<li>"+o.options.customPaging.call(this,o,e)+"</li>";t+="</ul>",o.$dots=i(t).appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slidesCache=e.$slides,e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),(e.options.centerMode===!0||e.options.swipeToSlide===!0)&&(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.options.accessibility===!0&&e.$list.prop("tabIndex",0),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,l,r=this;if(o=document.createDocumentFragment(),n=r.$slider.children(),r.options.rows>1){for(l=r.options.slidesPerRow*r.options.rows,s=Math.ceil(n.length/l),i=0;s>i;i++){var d=document.createElement("div");for(e=0;e<r.options.rows;e++){var a=document.createElement("div");for(t=0;t<r.options.slidesPerRow;t++){var c=i*l+(e*r.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}r.$slider.html(o),r.$slider.children().children().children().css({width:100/r.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e){var t,o,s,n=this,l=!1,r=n.$slider.width(),d=window.innerWidth||i(window).width();if("window"===n.respondTo?s=d:"slider"===n.respondTo?s=r:"min"===n.respondTo&&(s=Math.min(d,r)),n.originalSettings.responsive&&n.originalSettings.responsive.length>-1&&null!==n.originalSettings.responsive){o=null;for(t in n.breakpoints)n.breakpoints.hasOwnProperty(t)&&(n.originalSettings.mobileFirst===!1?s<n.breakpoints[t]&&(o=n.breakpoints[t]):s>n.breakpoints[t]&&(o=n.breakpoints[t]));null!==o?null!==n.activeBreakpoint?o!==n.activeBreakpoint&&(n.activeBreakpoint=o,"unslick"===n.breakpointSettings[o]?n.unslick(o):(n.options=i.extend({},n.originalSettings,n.breakpointSettings[o]),e===!0&&(n.currentSlide=n.options.initialSlide),n.refresh(e)),l=o):(n.activeBreakpoint=o,"unslick"===n.breakpointSettings[o]?n.unslick(o):(n.options=i.extend({},n.originalSettings,n.breakpointSettings[o]),e===!0&&(n.currentSlide=n.options.initialSlide),n.refresh(e)),l=o):null!==n.activeBreakpoint&&(n.activeBreakpoint=null,n.options=n.originalSettings,e===!0&&(n.currentSlide=n.options.initialSlide),n.refresh(e),l=o),e||l===!1||n.$slider.trigger("breakpoint",[n,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,l=this,r=i(e.target);switch(r.is("a")&&e.preventDefault(),r.is("li")||(r=r.closest("li")),n=l.slideCount%l.options.slidesToScroll!==0,o=n?0:(l.slideCount-l.currentSlide)%l.options.slidesToScroll,e.data.message){case"previous":s=0===o?l.options.slidesToScroll:l.options.slidesToShow-o,l.slideCount>l.options.slidesToShow&&l.slideHandler(l.currentSlide-s,!1,t);break;case"next":s=0===o?l.options.slidesToScroll:o,l.slideCount>l.options.slidesToShow&&l.slideHandler(l.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||r.index()*l.options.slidesToScroll;l.slideHandler(l.checkNavigable(d),!1,t),r.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t,o=this;if(e=o.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var s in e){if(i<e[s]){i=t;break}t=e[s]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide),e.options.pauseOnDotsHover===!0&&e.options.autoplay===!0&&i("li",e.$dots).off("mouseenter.slick",i.proxy(e.setPaused,e,!0)).off("mouseleave.slick",i.proxy(e.setPaused,e,!1))),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide)),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.$list.off("mouseenter.slick",i.proxy(e.setPaused,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.setPaused,e,!1)),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition),i(document).off("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&(i=e.$slides.children().children(),i.removeAttr("style"),e.$slider.html(i))},e.prototype.clickHandler=function(i){var e=this;e.shouldClick===!1&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&"object"!=typeof t.options.prevArrow&&t.$prevArrow.remove(),t.$nextArrow&&"object"!=typeof t.options.nextArrow&&t.$nextArrow.remove(),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;t.cssTransitions===!1?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;e.cssTransitions===!1?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var i=this;return i.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(i.options.infinite===!0)for(;e<i.slideCount;)++o,e=t+i.options.slidesToShow,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(i.options.centerMode===!0)o=i.slideCount;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToShow,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;return o-1},e.prototype.getLeft=function(i){var e,t,o,s=this,n=0;return s.slideOffset=0,t=s.$slides.first().outerHeight(),s.options.infinite===!0?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,n=t*s.options.slidesToShow*-1),s.slideCount%s.options.slidesToScroll!==0&&i+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(i>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(i-s.slideCount))*s.slideWidth*-1,n=(s.options.slidesToShow-(i-s.slideCount))*t*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,n=s.slideCount%s.options.slidesToScroll*t*-1))):i+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(i+s.options.slidesToShow-s.slideCount)*s.slideWidth,n=(i+s.options.slidesToShow-s.slideCount)*t),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,n=0),s.options.centerMode===!0&&s.options.infinite===!0?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:s.options.centerMode===!0&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),e=s.options.vertical===!1?i*s.slideWidth*-1+s.slideOffset:i*t*-1+n,s.options.variableWidth===!0&&(o=s.$slideTrack.children(".slick-slide").eq(s.slideCount<=s.options.slidesToShow||s.options.infinite===!1?i:i+s.options.slidesToShow),e=o[0]?-1*o[0].offsetLeft:0,s.options.centerMode===!0&&(o=s.$slideTrack.children(".slick-slide").eq(s.options.infinite===!1?i:i+s.options.slidesToShow+1),e=o[0]?-1*o[0].offsetLeft:0,e+=(s.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){var e=this;return e.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(e.options.infinite===!1?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);i>t;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o,s=this;return o=s.options.centerMode===!0?s.slideWidth*Math.floor(s.options.slidesToShow/2):0,s.options.swipeToSlide===!0?(s.$slideTrack.find(".slick-slide").each(function(e,n){return n.offsetLeft-o+i(n).outerWidth()/2>-1*s.swipeLeft?(t=n,!1):void 0}),e=Math.abs(i(t).attr("data-slick-index")-s.currentSlide)||1):s.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){var t=this;t.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots()),e&&t.$slider.trigger("init",[t])},e.prototype.initArrowEvents=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.on("click.slick",{message:"next"},i.changeSlide))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.options.autoplay===!0&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.setPaused,e,!0)).on("mouseleave.slick",i.proxy(e.setPaused,e,!1))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),e.$list.on("mouseenter.slick",i.proxy(e.setPaused,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.setPaused,e,!1)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(document).on("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.initUI=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.show(),i.options.autoplay===!0&&i.autoPlay()},e.prototype.keyHandler=function(i){var e=this;37===i.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:"previous"}}):39===i.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:"next"}})},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=document.createElement("img");o.onload=function(){e.animate({opacity:0},100,function(){e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy").removeClass("slick-loading")})})},o.src=t})}var t,o,s,n,l=this;l.options.centerMode===!0?l.options.infinite===!0?(s=l.currentSlide+(l.options.slidesToShow/2+1),n=s+l.options.slidesToShow+2):(s=Math.max(0,l.currentSlide-(l.options.slidesToShow/2+1)),n=2+(l.options.slidesToShow/2+1)+l.currentSlide):(s=l.options.infinite?l.options.slidesToShow+l.currentSlide:l.currentSlide,n=s+l.options.slidesToShow,l.options.fade===!0&&(s>0&&s--,n<=l.slideCount&&n++)),t=l.$slider.find(".slick-slide").slice(s,n),e(t),l.slideCount<=l.options.slidesToShow?(o=l.$slider.find(".slick-slide"),e(o)):l.currentSlide>=l.slideCount-l.options.slidesToShow?(o=l.$slider.find(".slick-cloned").slice(0,l.options.slidesToShow),e(o)):0===l.currentSlide&&(o=l.$slider.find(".slick-cloned").slice(-1*l.options.slidesToShow),e(o))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var i=this;i.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.paused=!1,i.autoPlay()},e.prototype.postSlide=function(i){var e=this;e.$slider.trigger("afterChange",[e,i]),e.animating=!1,e.setPosition(),e.swipeLeft=null,e.options.autoplay===!0&&e.paused===!1&&e.autoPlay()},e.prototype.prev=e.prototype.slickPrev=function(){var i=this;i.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(){var e,t,o=this;e=i("img[data-lazy]",o.$slider).length,e>0&&(t=i("img[data-lazy]",o.$slider).first(),t.attr("src",t.attr("data-lazy")).removeClass("slick-loading").load(function(){t.removeAttr("data-lazy"),o.progressiveLazyLoad(),o.options.adaptiveHeight===!0&&o.setPosition()}).error(function(){t.removeAttr("data-lazy"),o.progressiveLazyLoad()}))},e.prototype.refresh=function(e){var t=this,o=t.currentSlide;t.destroy(!0),i.extend(t,t.initials,{currentSlide:o}),t.init(),e||t.changeSlide({data:{message:"index",index:o}},!1)},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses(0),e.setPosition(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;return"boolean"==typeof i?(e=i,i=e===!0?0:o.slideCount-1):i=e===!0?--i:i,o.slideCount<1||0>i||i>o.slideCount-1?!1:(o.unload(),t===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(i){var e,t,o=this,s={};o.options.rtl===!0&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,o.transformsEnabled===!1?o.$slideTrack.css(s):(s={},o.cssTransitions===!1?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;i.options.vertical===!1?i.options.centerMode===!0&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),i.options.centerMode===!0&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),i.options.vertical===!1&&i.options.variableWidth===!1?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):i.options.variableWidth===!0?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();i.options.variableWidth===!1&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,i(s).css(t.options.rtl===!0?{position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}:{position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(i,e,t){var o=this;o.options[i]=e,t===!0&&(o.unload(),o.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),i.options.fade===!1?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=i.options.vertical===!0?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),(void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.msTransition)&&i.options.useCSS===!0&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&i.animType!==!1&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=null!==i.animType&&i.animType!==!1},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),n.options.centerMode===!0?(e=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")):i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===n.options.lazyLoad&&n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(s.options.fade===!0&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;o>e;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.setPaused=function(i){var e=this;e.options.autoplay===!0&&e.options.pauseOnHover===!0&&(e.paused=i,i?e.autoPlayClear():e.autoPlay())},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));return s||(s=0),t.slideCount<=t.options.slidesToShow?(t.setSlideClasses(s),void t.asNavFor(s)):void t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,l,r=null,d=this;return e=e||!1,d.animating===!0&&d.options.waitForAnimate===!0||d.options.fade===!0&&d.currentSlide===i||d.slideCount<=d.options.slidesToShow?void 0:(e===!1&&d.asNavFor(i),o=i,r=d.getLeft(o),l=d.getLeft(d.currentSlide),d.currentLeft=null===d.swipeLeft?l:d.swipeLeft,d.options.infinite===!1&&d.options.centerMode===!1&&(0>i||i>d.getDotCount()*d.options.slidesToScroll)?void(d.options.fade===!1&&(o=d.currentSlide,t!==!0?d.animateSlide(l,function(){d.postSlide(o)}):d.postSlide(o))):d.options.infinite===!1&&d.options.centerMode===!0&&(0>i||i>d.slideCount-d.options.slidesToScroll)?void(d.options.fade===!1&&(o=d.currentSlide,t!==!0?d.animateSlide(l,function(){d.postSlide(o)}):d.postSlide(o))):(d.options.autoplay===!0&&clearInterval(d.autoPlayTimer),s=0>o?d.slideCount%d.options.slidesToScroll!==0?d.slideCount-d.slideCount%d.options.slidesToScroll:d.slideCount+o:o>=d.slideCount?d.slideCount%d.options.slidesToScroll!==0?0:o-d.slideCount:o,d.animating=!0,d.$slider.trigger("beforeChange",[d,d.currentSlide,s]),n=d.currentSlide,d.currentSlide=s,d.setSlideClasses(d.currentSlide),d.updateDots(),d.updateArrows(),d.options.fade===!0?(t!==!0?(d.fadeSlideOut(n),d.fadeSlide(s,function(){d.postSlide(s)})):d.postSlide(s),void d.animateHeight()):void(t!==!0?d.animateSlide(r,function(){d.postSlide(s)}):d.postSlide(s))))},e.prototype.startLoad=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),o=Math.round(180*t/Math.PI),0>o&&(o=360-Math.abs(o)),45>=o&&o>=0?s.options.rtl===!1?"left":"right":360>=o&&o>=315?s.options.rtl===!1?"left":"right":o>=135&&225>=o?s.options.rtl===!1?"right":"left":s.options.verticalSwiping===!0?o>=35&&135>=o?"left":"right":"vertical"},e.prototype.swipeEnd=function(){var i,e=this;if(e.dragging=!1,e.shouldClick=e.touchObject.swipeLength>10?!1:!0,void 0===e.touchObject.curX)return!1;if(e.touchObject.edgeHit===!0&&e.$slider.trigger("edge",[e,e.swipeDirection()]),e.touchObject.swipeLength>=e.touchObject.minSwipe)switch(e.swipeDirection()){case"left":i=e.options.swipeToSlide?e.checkNavigable(e.currentSlide+e.getSlideCount()):e.currentSlide+e.getSlideCount(),e.slideHandler(i),e.currentDirection=0,e.touchObject={},e.$slider.trigger("swipe",[e,"left"]);
    break;case"right":i=e.options.swipeToSlide?e.checkNavigable(e.currentSlide-e.getSlideCount()):e.currentSlide-e.getSlideCount(),e.slideHandler(i),e.currentDirection=1,e.touchObject={},e.$slider.trigger("swipe",[e,"right"])}else e.touchObject.startX!==e.touchObject.curX&&(e.slideHandler(e.currentSlide),e.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!l.dragging||n&&1!==n.length?!1:(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),l.options.verticalSwiping===!0&&(l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2)))),t=l.swipeDirection(),"vertical"!==t?(void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&i.preventDefault(),s=(l.options.rtl===!1?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),l.options.verticalSwiping===!0&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,l.options.infinite===!1&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),l.swipeLeft=l.options.vertical===!1?e+o*s:e+o*(l.$list.height()/l.listWidth)*s,l.options.verticalSwiping===!0&&(l.swipeLeft=e+o*s),l.options.fade===!0||l.options.touchMove===!1?!1:l.animating===!0?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft)):void 0)},e.prototype.swipeStart=function(i){var e,t=this;return 1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,void(t.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&"object"!=typeof e.options.prevArrow&&e.$prevArrow.remove(),e.$nextArrow&&"object"!=typeof e.options.nextArrow&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i,e=this;i=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.options.infinite!==!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.removeClass("slick-disabled"),e.$nextArrow.removeClass("slick-disabled"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled"),e.$nextArrow.removeClass("slick-disabled")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled"),e.$prevArrow.removeClass("slick-disabled")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled"),e.$prevArrow.removeClass("slick-disabled")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},e.prototype.visibility=function(){var i=this;document[i.hidden]?(i.paused=!0,i.autoPlayClear()):i.options.autoplay===!0&&(i.paused=!1,i.autoPlay())},i.fn.slick=function(){var i,t=this,o=arguments[0],s=Array.prototype.slice.call(arguments,1),n=t.length,l=0;for(l;n>l;l++)if("object"==typeof o||"undefined"==typeof o?t[l].slick=new e(t[l],o):i=t[l].slick[o].apply(t[l].slick,s),"undefined"!=typeof i)return i;return t}});

(function($){
    "use strict";

    var validatedata = function(attr, def) {
        if (attr !== void 0) {
            return attr;
        }
        return def;
    };

    var parseBoolean = function(attr, def) {
        if (attr === 'true') {
            return true;
        } else if (attr === 'false') {
            return false;
        }
        return def;
    };

    var $slick = $(".ct-js-slick"),
    $html      = $('html');
    $(document).on('ready', function(){

        // Main slider Height

        var $topBarHeight = $('._topBar').innerHeight(),
            $navBarHeight = 96;

        var $device_width       = (window.innerWidth > 0) ? window.innerWidth : screen.width,
            $device_height      = (window.innerHeight > 0) ? window.innerHeight : screen.height;

        // Background Image // -------------------------------
        $slick.find(".item").each(function () {
            var $slide_item = $(this),
                bg = validatedata($slide_item.attr('data-bg'), false);
            if (bg) {
                $slide_item.css('background-image', 'url("' + bg + '")');
            }
        });
        $('.ct-js-slick.is-loading').each(function () {
            var $slickitemheight = $(this).find('.item').first().height();
            $(this).css('height', $slickitemheight + 'px');
        });

// Responsive Breakpoins
        var $widthLG = 1200;
        var $widthMD = 992;
        var $widthSM = 768;
        var $widthXS = 480;


        if ($().slick){
            if ($slick.length > 0) {
                $slick.each(function(){
                    var $this = $(this);

                    // Slider height
                    if ($this.attr('data-height')) {
                        var $slickheight = $this.attr("data-height") + "px";

                        if ($slickheight.indexOf("%") > -1) {
                            $this.css('min-height', $device_height * (parseInt($slickheight, 10) / 100));
                            $this.find('.slick-list').css('min-height', $device_height * (parseInt($slickheight, 10) / 100));
                            $this.find('.slick-track').css('min-height', $device_height * (parseInt($slickheight, 10) / 100));
                            $this.find('.item').each(function () {
                                $(this).css('min-height', $device_height * (parseInt($slickheight, 10) / 100));
                            });
                        } else {
                            $this.css('min-height', parseInt($slickheight, 10) + "px");
                            $this.find('.slick-list').css('min-height', parseInt($slickheight, 10) + "px");
                            $this.find('.slick-track').css('min-height', parseInt($slickheight, 10) + "px");
                            $this.find('.item').each(function () {
                                $(this).css('min-height', parseInt($slickheight, 10) + "px");
                            });
                        }
                    }
                    if ($this.attr('data-height-main')) {
                        var $slickheightMain = $this.attr("data-height-main") + "px";
                        if ($device_width > 768) {
                            if ($slickheightMain.indexOf("%") > -1) {
                                $this.css('min-height', ($device_height  - $topBarHeight - $navBarHeight) * (parseInt($slickheightMain, 10) / 100));
                                $this.find('.slick-list').css('min-height', ($device_height  - $topBarHeight - $navBarHeight) * (parseInt($slickheightMain, 10) / 100));
                                $this.find('.slick-track').css('min-height', ($device_height  - $topBarHeight - $navBarHeight) * (parseInt($slickheightMain, 10) / 100));
                                $this.find('.item').each(function () {
                                    $(this).css('min-height', ($device_height  - $topBarHeight - $navBarHeight) * (parseInt($slickheightMain, 10) / 100));
                                });
                            }
                        } else {
                            if ($slickheightMain.indexOf("%") > -1) {
                                $this.css('min-height', $device_height * (parseInt($slickheightMain, 10) / 100));
                                $this.find('.slick-list').css('min-height', $device_height * (parseInt($slickheightMain, 10) / 100));
                                $this.find('.slick-track').css('min-height', $device_height * (parseInt($slickheightMain, 10) / 100));
                                $this.find('.item').each(function () {
                                    $(this).css('min-height', $device_height * (parseInt($slickheightMain, 10) / 100));
                                });
                            }
                        }
                    }



                    // Background Image // -------------------------------
                    $this.find(".item").each(function () {
                        var $slide_item = $(this);
                        var bg = validatedata($slide_item.attr('data-bg'), false);
                        if (bg) {
                            $slide_item.css('background-image', 'url("' + bg + '")');
                        }
                    });
                    // Items Settings
                    var ctslidesToShow =  parseInt(validatedata($this.attr("data-items"), 1), 10); // Non Responsive
                    var slidesXS = parseInt(validatedata($this.attr("data-XSitems"), ctslidesToShow), 10);
                    var slidesSM = parseInt(validatedata($this.attr("data-SMitems"), slidesXS), 10); // Default Item from smaller Device;
                    var slidesMD = parseInt(validatedata($this.attr("data-MDitems"), slidesSM), 10); // Default Item from smaller Device;
                    var slidesLG = parseInt(validatedata($this.attr("data-LGitems"), slidesMD), 10); // Default Item from smaller Device;

                    var ctaccessibility = parseBoolean($this.attr("data-accessibility"), true);
                    var ctadaptiveHeight = parseBoolean($this.attr("data-adaptiveHeight"), false);
                    var ctautoplay = parseBoolean($this.attr("data-autoplay"), false);
                    var ctautoplaySpeed = parseInt(validatedata($this.attr("data-autoplaySpeed"), 3000), 10);
                    var ctarrows = parseBoolean($this.attr("data-arrows"), true);
                    var ctasNavFor = validatedata($this.attr("data-asNavFor"));
                    var ctappendArrows = validatedata($this.attr("data-appendArrows"));
                    var ctprevArrow = validatedata($this.attr("data-prevArrow"), '<button type="button" class="slick-prev"></button>');
                    var ctnextArrow = validatedata($this.attr("data-nextArrow"), '<button type="button" class="slick-next"></button>');
                    var ctcenterMode = parseBoolean($this.attr("data-centerMode"), false);
                    var ctcenterPadding = validatedata($this.attr("data-centerPadding"), '50px');
                    var ctcssEase = validatedata($this.attr("data-cssEase"), 'ease');
                    var ctdots = parseBoolean($this.attr("data-dots"), false);
                    var ctdraggable = parseBoolean($this.attr("data-draggable"), true);
                    var ctfade = parseBoolean($this.attr("data-fade"), false);
                    var ctfocusOnSelect = parseBoolean($this.attr("data-focusOnSelect"), false);
                    var cteasing = validatedata($this.attr("data-easing"), 'linear');
                    var ctedgeFriction = parseInt(validatedata($this.attr("data-edgeFriction"), 0.15), 10);
                    var ctinfinite = parseBoolean($this.attr("data-infinite"), true);
                    var ctinitialSlide = parseInt(validatedata($this.attr("data-initialSlide"), 0), 10);
                    var ctlazyLoad = validatedata($this.attr("data-lazyLoad"), 'ondemand');
                    var ctmobileFirst = parseBoolean($this.attr("data-mobileFirst"), true);
                    var ctpauseOnHover = parseBoolean($this.attr("data-pauseOnHover"), true);
                    var ctpauseOnDotsHover = parseBoolean($this.attr("data-pauseOnDotsHover"), false);
                    var ctrespondTo = validatedata($this.attr("data-respondTo"), 'window');
                    var ctslide = validatedata($this.attr("data-slide"));
                    var ctslidesToScroll = parseInt(validatedata($this.attr("data-slidesToScroll"), 1), 10);
                    var ctspeed = parseInt(validatedata($this.attr("data-speed"), 300), 10);
                    var ctswipe = parseBoolean($this.attr("data-swipe"), true);
                    var ctswipeToSlide =  parseBoolean($this.attr("data-swipeToSlide"), false);
                    var cttouchMove = parseBoolean($this.attr("data-touchMove"), true);
                    var cttouchThreshold = parseInt(validatedata($this.attr("data-touchThreshold"), 5), 10);
                    var ctuseCSS = parseBoolean($this.attr("data-useCSS"), true);
                    var ctvariableWidth = parseBoolean($this.attr("data-variableWidth"), false);
                    var ctvertical = parseBoolean($this.attr("data-vertical"), false);
                    var ctrtl = parseBoolean($this.attr("data-rtl"), false);


                    $this.on('init', function () {
                        $slick.removeClass('is-loading');
                        $slick.css('height', 'auto');
                    });

                    // Slick Init
                    $this.slick({
                        slidesToShow: ctslidesToShow,
                        accessibility: ctaccessibility,      // Enables tabbing and arrow key navigation
                        adaptiveHeight: ctadaptiveHeight,    // Enables adaptive height for single slide horizontal carousels.
                        autoplay: ctautoplay,                // Enables Autoplay
                        autoplaySpeed: ctautoplaySpeed,      // Autoplay Speed in milliseconds
                        arrows: ctarrows,                    // Prev/Next Arrows
                        asNavFor: ctasNavFor,                // Set the slider to be the navigation of other slider (Class or ID Name)
                        appendArrows: ctappendArrows,        // Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object)
                        prevArrow: ctprevArrow,              // Allows you to select a node or customize the HTML for the "Previous" arrow.
                        nextArrow: ctnextArrow,              // Allows you to select a node or customize the HTML for the "Next" arrow.
                        centerMode: ctcenterMode,            // Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
                        centerPadding: ctcenterPadding,      // Side padding when in center mode (px or %)
                        cssEase: ctcssEase,                  // CSS3 Animation Easing
                        dots: ctdots,                        // Show dot indicators
                        draggable: ctdraggable,              // Enable mouse dragging
                        fade: ctfade,                        // Enable fade
                        focusOnSelect: ctfocusOnSelect,      // Enable focus on selected element (click)
                        easing: cteasing,                    // Add easing for jQuery animate. Use with easing libraries or default easing methods
                        edgeFriction: ctedgeFriction,        // Resistance when swiping edges of non-infinite carousels
                        infinite: ctinfinite,                // Infinite loop sliding
                        initialSlide: ctinitialSlide,        // Slide to start on
                        lazyLoad: ctlazyLoad,                // Set lazy loading technique. Accepts 'ondemand' or 'progressive'
                        mobileFirst: ctmobileFirst,          // Responsive settings use mobile first calculation
                        pauseOnHover: ctpauseOnHover,        // Pause Autoplay On Hover
                        pauseOnDotsHover: ctpauseOnDotsHover,// Pause Autoplay when a dot is hovered
                        respondTo: ctrespondTo,              // Width that responsive object responds to. Can be 'window', 'slider' or 'min' (the smaller of the two)
                        slide: ctslide,                      // Element query to use as slide
                        slidesToScroll: ctslidesToScroll,    // Number of slides to scroll
                        speed: ctspeed,                      // Slide/Fade animation speed
                        swipe: ctswipe,                      // Enable swiping
                        swipeToSlide: ctswipeToSlide,        // Allow users to drag or swipe directly to a slide irrespective of slidesToScroll
                        touchMove: cttouchMove,              // Enable slide motion with touch
                        touchThreshold: cttouchThreshold,    // To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slide
                        useCSS: ctuseCSS,                    // Enable/Disable CSS Transitions
                        variableWidth: ctvariableWidth,      // Variable width slides
                        vertical: ctvertical,                // Vertical slide mode
                        rtl: ctrtl,                           // Change the slider's direction to become right-to-left
                        responsive: [ // Responsive Breakpoints
                            {
                                breakpoint: $widthLG, // Desktop
                                settings: {
                                    slidesToShow: slidesLG
                                }
                            },
                            {
                                breakpoint: $widthMD,  // Laptop
                                settings:{
                                    slidesToShow: slidesMD
                                }
                            },
                            {
                                breakpoint: $widthSM, // Tablet
                                settings: {
                                    slidesToShow: slidesSM
                                }
                            },
                            {
                                breakpoint: $widthXS, // Mobile
                                settings: {
                                    slidesToShow: slidesXS
                                }
                            }
                        ] // end Responsive Breakpoints
                    }); //end $this.slick

                    $this.on('beforeChange', function(){
                        $this.find(".slick-slide [data-fx]").each(function () {
                                var $content = $(this);
                                $content.removeClass($content.data('fx')).removeClass("activate");
                            });
                            setTimeout(function () {
                                $this.find(".slick-active [data-fx]").each(function () {
                                    var $content = $(this);
                                    if ($content.data('time') != undefined) {
                                        setTimeout(function () {
                                            $content.addClass($content.data('fx')).addClass("activate");
                                        }, $content.data('time'));
                                    } else{
                                        $content.addClass($content.data('fx')).addClass("activate");
                                    }
                                })
                            }, 150);
                    });
                    if ($('[data-space]').length > 0) {
                        $('[data-space]').each(function () {
                            var $this = $(this),
                                $space = $this.attr('data-space');

                            $('.slick-slide').css({
                                marginLeft: $space + 'px',
                                marginRight: $space + 'px'
                            });

                            $('.slick-list').css({
                                marginLeft: -$space + 'px',
                                marginRight: -$space + 1 + 'px'
                            })
                        });
                    }
                }); // end each functions
            } // end length if
        } // end Slick
    }); // end Doc Ready

})(jQuery);

(function ($) {
    $(document).on('ready', function() {
        if ($('.tabs-wrapper').length > 0) {
            $('.tabs-wrapper').each(function() {
                var $this = $(this),
                    $tabsWrapper = $this;
                    $tabsNav = $this.find('.tabs-navigation');
                if ($tabsNav) {
                    $tabsNav.each(function() {
                        var $this = $(this),
                            $item = $this.find('li');
                        $item.each(function() {
                            var $this = $(this),
                                $tabAnchor = $($this.find('a').attr('href'));
                            if ($this.hasClass('is-active')) {
                                $tabAnchor.show();
                            } else {
                                $tabAnchor.hide();
                            }
                        })
                        $item.children('a').on('click', function(e) {
                            var $this = $(this);
                            $item.removeClass('is-active');
                            $item.each(function() {
                                var $this = $(this);
                                $($this.find('a').attr('href')).hide();
                                $($this.find('a').attr('href')).removeClass('activate');
                            });
                            $this.parent().addClass('is-active');
                            var $effectIn = $tabsWrapper.attr('data-tab-effect');
                            if ($effectIn) {
                                $($this.attr('href')).addClass($effectIn + ' ' + 'animated activate').css({
                                    display: 'block'
                                })
                            } else {
                                $($this.attr('href')).fadeIn();
                            }
                            e.preventDefault();
                        })
                    })
                }
            })
        }
    });
})(jQuery);

(function ($) {
    $(document).on('ready', function() {
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
                        $(this).next().toggleClass('is-active').slideToggle('slow');
                    });
                } else {
                    $accordionHeader.on('click', function() {
                        if($(this).is('.inactive-header')) {
                            $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
                            $(this).toggleClass('active-header').toggleClass('inactive-header');
                            $(this).next().slideToggle().toggleClass('open-content');
                        } else {
                            $(this).toggleClass('active-header').toggleClass('inactive-header');
                            $(this).next().slideToggle().toggleClass('open-content');
                        }
                    });
                }

            });
        }
    })
})(jQuery);

/*! skrollr 0.6.30 (2015-08-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
!function(a,b,c){"use strict";function d(c){if(e=b.documentElement,f=b.body,T(),ha=this,c=c||{},ma=c.constants||{},c.easing)for(var d in c.easing)W[d]=c.easing[d];ta=c.edgeStrategy||"set",ka={beforerender:c.beforerender,render:c.render,keyframe:c.keyframe},la=c.forceHeight!==!1,la&&(Ka=c.scale||1),na=c.mobileDeceleration||y,pa=c.smoothScrolling!==!1,qa=c.smoothScrollingDuration||A,ra={targetTop:ha.getScrollTop()},Sa=(c.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||a.opera)})(),Sa?(ja=b.getElementById(c.skrollrBody||z),ja&&ga(),X(),Ea(e,[s,v],[t])):Ea(e,[s,u],[t]),ha.refresh(),wa(a,"resize orientationchange",function(){var a=e.clientWidth,b=e.clientHeight;(b!==Pa||a!==Oa)&&(Pa=b,Oa=a,Qa=!0)});var g=U();return function h(){$(),va=g(h)}(),ha}var e,f,g={get:function(){return ha},init:function(a){return ha||new d(a)},VERSION:"0.6.30"},h=Object.prototype.hasOwnProperty,i=a.Math,j=a.getComputedStyle,k="touchstart",l="touchmove",m="touchcancel",n="touchend",o="skrollable",p=o+"-before",q=o+"-between",r=o+"-after",s="skrollr",t="no-"+s,u=s+"-desktop",v=s+"-mobile",w="linear",x=1e3,y=.004,z="skrollr-body",A=200,B="start",C="end",D="center",E="bottom",F="___skrollable_id",G=/^(?:input|textarea|button|select)$/i,H=/^\s+|\s+$/g,I=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,J=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,K=/^(@?[a-z\-]+)\[(\w+)\]$/,L=/-([a-z0-9_])/g,M=function(a,b){return b.toUpperCase()},N=/[\-+]?[\d]*\.?[\d]+/g,O=/\{\?\}/g,P=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,Q=/[a-z\-]+-gradient/g,R="",S="",T=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(j){var b=j(f,null);for(var c in b)if(R=c.match(a)||+c==c&&b[c].match(a))break;if(!R)return void(R=S="");R=R[0],"-"===R.slice(0,1)?(S=R,R={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[R]):S="-"+R.toLowerCase()+"-"}},U=function(){var b=a.requestAnimationFrame||a[R.toLowerCase()+"RequestAnimationFrame"],c=Ha();return(Sa||!b)&&(b=function(b){var d=Ha()-c,e=i.max(0,1e3/60-d);return a.setTimeout(function(){c=Ha(),b()},e)}),b},V=function(){var b=a.cancelAnimationFrame||a[R.toLowerCase()+"CancelAnimationFrame"];return(Sa||!b)&&(b=function(b){return a.clearTimeout(b)}),b},W={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-i.cos(a*i.PI)/2+.5},sqrt:function(a){return i.sqrt(a)},outCubic:function(a){return i.pow(a-1,3)+1},bounce:function(a){var b;if(.5083>=a)b=3;else if(.8489>=a)b=9;else if(.96208>=a)b=27;else{if(!(.99981>=a))return 1;b=91}return 1-i.abs(3*i.cos(a*b*1.028)/b)}};d.prototype.refresh=function(a){var d,e,f=!1;for(a===c?(f=!0,ia=[],Ra=0,a=b.getElementsByTagName("*")):a.length===c&&(a=[a]),d=0,e=a.length;e>d;d++){var g=a[d],h=g,i=[],j=pa,k=ta,l=!1;if(f&&F in g&&delete g[F],g.attributes){for(var m=0,n=g.attributes.length;n>m;m++){var p=g.attributes[m];if("data-anchor-target"!==p.name)if("data-smooth-scrolling"!==p.name)if("data-edge-strategy"!==p.name)if("data-emit-events"!==p.name){var q=p.name.match(I);if(null!==q){var r={props:p.value,element:g,eventType:p.name.replace(L,M)};i.push(r);var s=q[1];s&&(r.constant=s.substr(1));var t=q[2];/p$/.test(t)?(r.isPercentage=!0,r.offset=(0|t.slice(0,-1))/100):r.offset=0|t;var u=q[3],v=q[4]||u;u&&u!==B&&u!==C?(r.mode="relative",r.anchors=[u,v]):(r.mode="absolute",u===C?r.isEnd=!0:r.isPercentage||(r.offset=r.offset*Ka))}}else l=!0;else k=p.value;else j="off"!==p.value;else if(h=b.querySelector(p.value),null===h)throw'Unable to find anchor target "'+p.value+'"'}if(i.length){var w,x,y;!f&&F in g?(y=g[F],w=ia[y].styleAttr,x=ia[y].classAttr):(y=g[F]=Ra++,w=g.style.cssText,x=Da(g)),ia[y]={element:g,styleAttr:w,classAttr:x,anchorTarget:h,keyFrames:i,smoothScrolling:j,edgeStrategy:k,emitEvents:l,lastFrameIndex:-1},Ea(g,[o],[])}}}for(Aa(),d=0,e=a.length;e>d;d++){var z=ia[a[d][F]];z!==c&&(_(z),ba(z))}return ha},d.prototype.relativeToAbsolute=function(a,b,c){var d=e.clientHeight,f=a.getBoundingClientRect(),g=f.top,h=f.bottom-f.top;return b===E?g-=d:b===D&&(g-=d/2),c===E?g+=h:c===D&&(g+=h/2),g+=ha.getScrollTop(),g+.5|0},d.prototype.animateTo=function(a,b){b=b||{};var d=Ha(),e=ha.getScrollTop(),f=b.duration===c?x:b.duration;return oa={startTop:e,topDiff:a-e,targetTop:a,duration:f,startTime:d,endTime:d+f,easing:W[b.easing||w],done:b.done},oa.topDiff||(oa.done&&oa.done.call(ha,!1),oa=c),ha},d.prototype.stopAnimateTo=function(){oa&&oa.done&&oa.done.call(ha,!0),oa=c},d.prototype.isAnimatingTo=function(){return!!oa},d.prototype.isMobile=function(){return Sa},d.prototype.setScrollTop=function(b,c){return sa=c===!0,Sa?Ta=i.min(i.max(b,0),Ja):a.scrollTo(0,b),ha},d.prototype.getScrollTop=function(){return Sa?Ta:a.pageYOffset||e.scrollTop||f.scrollTop||0},d.prototype.getMaxScrollTop=function(){return Ja},d.prototype.on=function(a,b){return ka[a]=b,ha},d.prototype.off=function(a){return delete ka[a],ha},d.prototype.destroy=function(){var a=V();a(va),ya(),Ea(e,[t],[s,u,v]);for(var b=0,d=ia.length;d>b;b++)fa(ia[b].element);e.style.overflow=f.style.overflow="",e.style.height=f.style.height="",ja&&g.setStyle(ja,"transform","none"),ha=c,ja=c,ka=c,la=c,Ja=0,Ka=1,ma=c,na=c,La="down",Ma=-1,Oa=0,Pa=0,Qa=!1,oa=c,pa=c,qa=c,ra=c,sa=c,Ra=0,ta=c,Sa=!1,Ta=0,ua=c};var X=function(){var d,g,h,j,o,p,q,r,s,t,u,v;wa(e,[k,l,m,n].join(" "),function(a){var e=a.changedTouches[0];for(j=a.target;3===j.nodeType;)j=j.parentNode;switch(o=e.clientY,p=e.clientX,t=a.timeStamp,G.test(j.tagName)||a.preventDefault(),a.type){case k:d&&d.blur(),ha.stopAnimateTo(),d=j,g=q=o,h=p,s=t;break;case l:G.test(j.tagName)&&b.activeElement!==j&&a.preventDefault(),r=o-q,v=t-u,ha.setScrollTop(Ta-r,!0),q=o,u=t;break;default:case m:case n:var f=g-o,w=h-p,x=w*w+f*f;if(49>x){if(!G.test(d.tagName)){d.focus();var y=b.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,a.view,1,e.screenX,e.screenY,e.clientX,e.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),d.dispatchEvent(y)}return}d=c;var z=r/v;z=i.max(i.min(z,3),-3);var A=i.abs(z/na),B=z*A+.5*na*A*A,C=ha.getScrollTop()-B,D=0;C>Ja?(D=(Ja-C)/B,C=Ja):0>C&&(D=-C/B,C=0),A*=1-D,ha.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),a.scrollTo(0,0),e.style.overflow=f.style.overflow="hidden"},Y=function(){var a,b,c,d,f,g,h,j,k,l,m,n=e.clientHeight,o=Ba();for(j=0,k=ia.length;k>j;j++)for(a=ia[j],b=a.element,c=a.anchorTarget,d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],l=h.offset,m=o[h.constant]||0,h.frame=l,h.isPercentage&&(l*=n,h.frame=l),"relative"===h.mode&&(fa(b),h.frame=ha.relativeToAbsolute(c,h.anchors[0],h.anchors[1])-l,fa(b,!0)),h.frame+=m,la&&!h.isEnd&&h.frame>Ja&&(Ja=h.frame);for(Ja=i.max(Ja,Ca()),j=0,k=ia.length;k>j;j++){for(a=ia[j],d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],m=o[h.constant]||0,h.isEnd&&(h.frame=Ja-h.offset+m);a.keyFrames.sort(Ia)}},Z=function(a,b){for(var c=0,d=ia.length;d>c;c++){var e,f,i=ia[c],j=i.element,k=i.smoothScrolling?a:b,l=i.keyFrames,m=l.length,n=l[0],s=l[l.length-1],t=k<n.frame,u=k>s.frame,v=t?n:s,w=i.emitEvents,x=i.lastFrameIndex;if(t||u){if(t&&-1===i.edge||u&&1===i.edge)continue;switch(t?(Ea(j,[p],[r,q]),w&&x>-1&&(za(j,n.eventType,La),i.lastFrameIndex=-1)):(Ea(j,[r],[p,q]),w&&m>x&&(za(j,s.eventType,La),i.lastFrameIndex=m)),i.edge=t?-1:1,i.edgeStrategy){case"reset":fa(j);continue;case"ease":k=v.frame;break;default:case"set":var y=v.props;for(e in y)h.call(y,e)&&(f=ea(y[e].value),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f));continue}}else 0!==i.edge&&(Ea(j,[o,q],[p,r]),i.edge=0);for(var z=0;m-1>z;z++)if(k>=l[z].frame&&k<=l[z+1].frame){var A=l[z],B=l[z+1];for(e in A.props)if(h.call(A.props,e)){var C=(k-A.frame)/(B.frame-A.frame);C=A.props[e].easing(C),f=da(A.props[e].value,B.props[e].value,C),f=ea(f),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f)}w&&x!==z&&("down"===La?za(j,A.eventType,La):za(j,B.eventType,La),i.lastFrameIndex=z);break}}},$=function(){Qa&&(Qa=!1,Aa());var a,b,d=ha.getScrollTop(),e=Ha();if(oa)e>=oa.endTime?(d=oa.targetTop,a=oa.done,oa=c):(b=oa.easing((e-oa.startTime)/oa.duration),d=oa.startTop+b*oa.topDiff|0),ha.setScrollTop(d,!0);else if(!sa){var f=ra.targetTop-d;f&&(ra={startTop:Ma,topDiff:d-Ma,targetTop:d,startTime:Na,endTime:Na+qa}),e<=ra.endTime&&(b=W.sqrt((e-ra.startTime)/qa),d=ra.startTop+b*ra.topDiff|0)}if(sa||Ma!==d){La=d>Ma?"down":Ma>d?"up":La,sa=!1;var h={curTop:d,lastTop:Ma,maxTop:Ja,direction:La},i=ka.beforerender&&ka.beforerender.call(ha,h);i!==!1&&(Z(d,ha.getScrollTop()),Sa&&ja&&g.setStyle(ja,"transform","translate(0, "+-Ta+"px) "+ua),Ma=d,ka.render&&ka.render.call(ha,h)),a&&a.call(ha,!1)}Na=e},_=function(a){for(var b=0,c=a.keyFrames.length;c>b;b++){for(var d,e,f,g,h=a.keyFrames[b],i={};null!==(g=J.exec(h.props));)f=g[1],e=g[2],d=f.match(K),null!==d?(f=d[1],d=d[2]):d=w,e=e.indexOf("!")?aa(e):[e.slice(1)],i[f]={value:e,easing:W[d]};h.props=i}},aa=function(a){var b=[];return P.lastIndex=0,a=a.replace(P,function(a){return a.replace(N,function(a){return a/255*100+"%"})}),S&&(Q.lastIndex=0,a=a.replace(Q,function(a){return S+a})),a=a.replace(N,function(a){return b.push(+a),"{?}"}),b.unshift(a),b},ba=function(a){var b,c,d={};for(b=0,c=a.keyFrames.length;c>b;b++)ca(a.keyFrames[b],d);for(d={},b=a.keyFrames.length-1;b>=0;b--)ca(a.keyFrames[b],d)},ca=function(a,b){var c;for(c in b)h.call(a.props,c)||(a.props[c]=b[c]);for(c in a.props)b[c]=a.props[c]},da=function(a,b,c){var d,e=a.length;if(e!==b.length)throw"Can't interpolate between \""+a[0]+'" and "'+b[0]+'"';var f=[a[0]];for(d=1;e>d;d++)f[d]=a[d]+(b[d]-a[d])*c;return f},ea=function(a){var b=1;return O.lastIndex=0,a[0].replace(O,function(){return a[b++]})},fa=function(a,b){a=[].concat(a);for(var c,d,e=0,f=a.length;f>e;e++)d=a[e],c=ia[d[F]],c&&(b?(d.style.cssText=c.dirtyStyleAttr,Ea(d,c.dirtyClassAttr)):(c.dirtyStyleAttr=d.style.cssText,c.dirtyClassAttr=Da(d),d.style.cssText=c.styleAttr,Ea(d,c.classAttr)))},ga=function(){ua="translateZ(0)",g.setStyle(ja,"transform",ua);var a=j(ja),b=a.getPropertyValue("transform"),c=a.getPropertyValue(S+"transform"),d=b&&"none"!==b||c&&"none"!==c;d||(ua="")};g.setStyle=function(a,b,c){var d=a.style;if(b=b.replace(L,M).replace("-",""),"zIndex"===b)isNaN(c)?d[b]=c:d[b]=""+(0|c);else if("float"===b)d.styleFloat=d.cssFloat=c;else try{R&&(d[R+b.slice(0,1).toUpperCase()+b.slice(1)]=c),d[b]=c}catch(e){}};var ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa=g.addEvent=function(b,c,d){var e=function(b){return b=b||a.event,b.target||(b.target=b.srcElement),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1,b.defaultPrevented=!0}),d.call(this,b)};c=c.split(" ");for(var f,g=0,h=c.length;h>g;g++)f=c[g],b.addEventListener?b.addEventListener(f,d,!1):b.attachEvent("on"+f,e),Ua.push({element:b,name:f,listener:d})},xa=g.removeEvent=function(a,b,c){b=b.split(" ");for(var d=0,e=b.length;e>d;d++)a.removeEventListener?a.removeEventListener(b[d],c,!1):a.detachEvent("on"+b[d],c)},ya=function(){for(var a,b=0,c=Ua.length;c>b;b++)a=Ua[b],xa(a.element,a.name,a.listener);Ua=[]},za=function(a,b,c){ka.keyframe&&ka.keyframe.call(ha,a,b,c)},Aa=function(){var a=ha.getScrollTop();Ja=0,la&&!Sa&&(f.style.height=""),Y(),la&&!Sa&&(f.style.height=Ja+e.clientHeight+"px"),Sa?ha.setScrollTop(i.min(ha.getScrollTop(),Ja)):ha.setScrollTop(a,!0),sa=!0},Ba=function(){var a,b,c=e.clientHeight,d={};for(a in ma)b=ma[a],"function"==typeof b?b=b.call(ha):/p$/.test(b)&&(b=b.slice(0,-1)/100*c),d[a]=b;return d},Ca=function(){var a,b=0;return ja&&(b=i.max(ja.offsetHeight,ja.scrollHeight)),a=i.max(b,f.scrollHeight,f.offsetHeight,e.scrollHeight,e.offsetHeight,e.clientHeight),a-e.clientHeight},Da=function(b){var c="className";return a.SVGElement&&b instanceof a.SVGElement&&(b=b[c],c="baseVal"),b[c]},Ea=function(b,d,e){var f="className";if(a.SVGElement&&b instanceof a.SVGElement&&(b=b[f],f="baseVal"),e===c)return void(b[f]=d);for(var g=b[f],h=0,i=e.length;i>h;h++)g=Ga(g).replace(Ga(e[h])," ");g=Fa(g);for(var j=0,k=d.length;k>j;j++)-1===Ga(g).indexOf(Ga(d[j]))&&(g+=" "+d[j]);b[f]=Fa(g)},Fa=function(a){return a.replace(H,"")},Ga=function(a){return" "+a+" "},Ha=Date.now||function(){return+new Date},Ia=function(a,b){return a.frame-b.frame},Ja=0,Ka=1,La="down",Ma=-1,Na=Ha(),Oa=0,Pa=0,Qa=!1,Ra=0,Sa=!1,Ta=0,Ua=[];"function"==typeof define&&define.amd?define([],function(){return g}):"undefined"!=typeof module&&module.exports?module.exports=g:a.skrollr=g}(window,document);

!function(e,t,o,s){"use strict";function i(t,s){return this.el=t,this.$el=e(t),this.s=e.extend({},l,s),this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in o.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.$items=this.$el.find(e(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var l={mode:"lg-slide",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,appendSubHtmlTo:".lg-sub-html",preload:1,showAfterLoad:!0,selector:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};i.prototype.init=function(){var o=this;o.s.preload>o.$items.length&&(o.s.preload=o.$items.length);var s=t.location.hash;s.indexOf("lg="+this.s.galleryId)>0&&(o.index=parseInt(s.split("&slide=")[1],10),e("body").addClass("lg-from-hash"),e("body").hasClass("lg-on")||setTimeout(function(){o.build(o.index),e("body").addClass("lg-on")})),o.s.dynamic?(o.$el.trigger("onBeforeOpen.lg"),o.index=o.s.index||0,e("body").hasClass("lg-on")||setTimeout(function(){o.build(o.index),e("body").addClass("lg-on")})):o.$items.on("click.lgcustom",function(t){try{t.preventDefault(),t.preventDefault()}catch(s){t.returnValue=!1}o.$el.trigger("onBeforeOpen.lg"),o.index=o.s.index||o.$items.index(this),e("body").hasClass("lg-on")||(o.build(o.index),e("body").addClass("lg-on"))})},i.prototype.build=function(t){var o=this;o.structure(),e.each(e.fn.lightGallery.modules,function(t){o.modules[t]=new e.fn.lightGallery.modules[t](o.el)}),o.slide(t,!1,!1),o.s.keyPress&&o.keyPress(),o.$items.length>1&&(o.arrow(),setTimeout(function(){o.enableDrag(),o.enableSwipe()},50),o.s.mousewheel&&o.mousewheel()),o.counter(),o.closeGallery(),o.$el.trigger("onAfterOpen.lg"),o.$outer.on("mousemove.lg click.lg touchstart.lg",function(){o.$outer.removeClass("lg-hide-items"),clearTimeout(o.hideBartimeout),o.hideBartimeout=setTimeout(function(){o.$outer.addClass("lg-hide-items")},o.s.hideBarsDelay)})},i.prototype.structure=function(){var o,s="",i="",l=0,r="",a=this;for(e("body").append('<div class="lg-backdrop"></div>'),e(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),l=0;l<this.$items.length;l++)s+='<div class="lg-item"></div>';if(this.s.controls&&this.$items.length>1&&(i='<div class="lg-actions"><div class="lg-prev lg-icon">'+this.s.prevHtml+'</div><div class="lg-next lg-icon">'+this.s.nextHtml+"</div></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(r='<div class="lg-sub-html"></div>'),o='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+s+'</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>'+i+r+"</div></div>",e("body").append(o),this.$outer=e(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?this.$outer.addClass("lg-use-left"):this.$outer.addClass("lg-use-css3"),a.setTop(),e(t).on("resize.lg orientationchange.lg",function(){setTimeout(function(){a.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):this.$outer.addClass("lg-css"),this.$outer.addClass(this.s.mode),this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var n=this.$outer.find(".lg-inner");n.css("transition-timing-function",this.s.cssEasing),n.css("transition-duration",this.s.speed+"ms")}e(".lg-backdrop").addClass("in"),setTimeout(function(){a.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>')},i.prototype.setTop=function(){if("100%"!==this.s.height){var o=e(t).height(),s=(o-parseInt(this.s.height,10))/2,i=this.$outer.find(".lg");o>=parseInt(this.s.height,10)?i.css("top",s+"px"):i.css("top","0px")}},i.prototype.doCss=function(){var e=function(){var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=o.documentElement,s=0;for(s=0;s<e.length;s++)if(e[s]in t.style)return!0};return e()?!0:!1},i.prototype.isVideo=function(e,t){var o;if(o=this.s.dynamic?this.s.dynamicEl[t].html:this.$items.eq(t).attr("data-html"),!e&&o)return{html5:!0};var s=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-]+)/i),i=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),l=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);return s?{youtube:s}:i?{vimeo:i}:l?{dailymotion:l}:void 0},i.prototype.counter=function(){this.s.counter&&e(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},i.prototype.addHtml=function(t){var o=null;if(o=this.s.dynamic?this.s.dynamicEl[t].subHtml:this.$items.eq(t).attr("data-sub-html"),"undefined"!=typeof o&&null!==o){var s=o.substring(0,1);o="."===s||"#"===s?e(o).html():o}else o="";".lg-sub-html"===this.s.appendSubHtmlTo?(this.$outer.find(this.s.appendSubHtmlTo).html(o),""===o?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")):this.$slide.eq(t).append(o),this.$el.trigger("onAfterAppendSubHtml.lg",[t])},i.prototype.preload=function(e){var t=1,o=1;for(t=1;t<=this.s.preload&&!(t>=this.$items.length-e);t++)this.loadContent(e+t,!1,0);for(o=1;o<=this.s.preload&&!(0>e-o);o++)this.loadContent(e-o,!1,0)},i.prototype.loadContent=function(o,s,i){var l,r,a,n,d,c,u=this,h=!1,g=function(o){for(var s=[],i=[],l=0;l<o.length;l++){var a=o[l].split(" ");""===a[0]&&a.splice(0,1),i.push(a[0]),s.push(a[1])}for(var n=e(t).width(),d=0;d<s.length;d++)if(parseInt(s[d],10)>n){r=i[d];break}};if(u.s.dynamic){if(u.s.dynamicEl[o].poster&&(h=!0,a=u.s.dynamicEl[o].poster),c=u.s.dynamicEl[o].html,r=u.s.dynamicEl[o].src,u.s.dynamicEl[o].responsive){var m=u.s.dynamicEl[o].responsive.split(",");g(m)}n=u.s.dynamicEl[o].srcset,d=u.s.dynamicEl[o].sizes}else{if(u.$items.eq(o).attr("data-poster")&&(h=!0,a=u.$items.eq(o).attr("data-poster")),c=u.$items.eq(o).attr("data-html"),r=u.$items.eq(o).attr("href")||u.$items.eq(o).attr("data-src"),u.$items.eq(o).attr("data-responsive")){var p=u.$items.eq(o).attr("data-responsive").split(",");g(p)}n=u.$items.eq(o).attr("data-srcset"),d=u.$items.eq(o).attr("data-sizes")}var f=!1;u.s.dynamic?u.s.dynamicEl[o].iframe&&(f=!0):"true"===u.$items.eq(o).attr("data-iframe")&&(f=!0);var b=u.isVideo(r,o);if(!u.$slide.eq(o).hasClass("lg-loaded")){if(f)u.$slide.eq(o).prepend('<div class="lg-video-cont" style="max-width:'+u.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+r+'"  allowfullscreen="true"></iframe></div></div>');else if(h){var v="";v=b&&b.youtube?"lg-has-youtube":b&&b.vimeo?"lg-has-vimeo":"lg-has-html5",u.$slide.eq(o).prepend('<div class="lg-video-cont '+v+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+a+'" /></div></div>')}else b?(u.$slide.eq(o).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),u.$el.trigger("hasVideo.lg",[o,r,c])):u.$slide.eq(o).prepend('<div class="lg-img-wrap"> <img class="lg-object lg-image" src="'+r+'" /> </div>');if(u.$el.trigger("onAferAppendSlide.lg",[o]),l=u.$slide.eq(o).find(".lg-object"),d&&l.attr("sizes",d),n){l.attr("srcset",n);try{picturefill({elements:[l[0]]})}catch(y){console.error("Make sure you have included Picturefill version 2")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&u.addHtml(o),u.$slide.eq(o).addClass("lg-loaded")}u.$slide.eq(o).find(".lg-object").on("load.lg error.lg",function(){var t=0;i&&!e("body").hasClass("lg-from-hash")&&(t=i),setTimeout(function(){u.$slide.eq(o).addClass("lg-complete"),u.$el.trigger("onSlideItemLoad.lg",[o,i||0])},t)}),b&&b.html5&&!h&&u.$slide.eq(o).addClass("lg-complete"),s===!0&&(u.$slide.eq(o).hasClass("lg-complete")?u.preload(o):u.$slide.eq(o).find(".lg-object").on("load.lg error.lg",function(){u.preload(o)}))},i.prototype.slide=function(t,o,s){var i=this.$outer.find(".lg-current").index(),l=this;if(!l.lGalleryOn||i!==t){var r=this.$slide.length,a=l.lGalleryOn?this.s.speed:0,n=!1,d=!1;if(!l.lgBusy){if(this.$el.trigger("onBeforeSlide.lg",[i,t,o,s]),l.lgBusy=!0,clearTimeout(l.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){l.addHtml(t)},a),this.arrowDisable(t),o){var c=t-1,u=t+1;0===t&&i===r-1?(u=0,c=r-1):t===r-1&&0===i&&(u=0,c=r-1),this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),l.$slide.eq(c).addClass("lg-prev-slide"),l.$slide.eq(u).addClass("lg-next-slide"),l.$slide.eq(t).addClass("lg-current")}else l.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),i>t?(d=!0,0!==t||i!==r-1||s||(d=!1,n=!0)):t>i&&(n=!0,t!==r-1||0!==i||s||(d=!0,n=!1)),d?(this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(i).addClass("lg-next-slide")):n&&(this.$slide.eq(t).addClass("lg-next-slide"),this.$slide.eq(i).addClass("lg-prev-slide")),setTimeout(function(){l.$slide.removeClass("lg-current"),l.$slide.eq(t).addClass("lg-current"),l.$outer.removeClass("lg-no-trans")},50);if(l.lGalleryOn?(setTimeout(function(){l.loadContent(t,!0,0)},this.s.speed+50),setTimeout(function(){l.lgBusy=!1,l.$el.trigger("onAfterSlide.lg",[i,t,o,s])},this.s.speed),l.doCss()||(l.$slide.fadeOut(l.s.speed),l.$slide.eq(t).fadeIn(l.s.speed))):(l.loadContent(t,!0,l.s.backdropDuration),l.lgBusy=!1,l.$el.trigger("onAfterSlide.lg",[i,t,o,s]),l.doCss()||(l.$slide.fadeOut(50),l.$slide.eq(t).fadeIn(50))),this.s.download){var h;h=l.s.dynamic?l.s.dynamicEl[t].downloadUrl||l.s.dynamicEl[t].src:l.$items.eq(t).attr("data-download-url")||l.$items.eq(t).attr("href")||l.$items.eq(t).attr("data-src"),e("#lg-download").attr("href",h)}l.lGalleryOn=!0,this.s.counter&&e("#lg-counter-current").text(t+1)}}},i.prototype.goToNextSlide=function(e){var t=this;t.lgBusy||(t.index+1<t.$slide.length?(t.index++,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1)):t.s.loop?(t.index=0,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(t.$outer.addClass("lg-right-end"),setTimeout(function(){t.$outer.removeClass("lg-right-end")},400)))},i.prototype.goToPrevSlide=function(e){var t=this;t.lgBusy||(t.index>0?(t.index--,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1)):t.s.loop?(t.index=t.$items.length-1,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(t.$outer.addClass("lg-left-end"),setTimeout(function(){t.$outer.removeClass("lg-left-end")},400)))},i.prototype.keyPress=function(){var o=this;this.$items.length>1&&e(t).on("keyup.lg",function(e){o.$items.length>1&&(37===e.keyCode&&(e.preventDefault(),o.goToPrevSlide()),39===e.keyCode&&(e.preventDefault(),o.goToNextSlide()))}),e(t).on("keydown.lg",function(e){o.s.escKey===!0&&27===e.keyCode&&(e.preventDefault(),o.$outer.hasClass("lg-thumb-open")?o.$outer.removeClass("lg-thumb-open"):o.destroy())})},i.prototype.arrow=function(){var e=this;this.$outer.find(".lg-prev").on("click.lg",function(){e.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){e.goToNextSlide()})},i.prototype.arrowDisable=function(e){!this.s.loop&&this.s.hideControlOnEnd&&(e+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),e>0?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},i.prototype.setTranslate=function(e,t,o){this.s.useLeft?e.css("left",t):e.css({transform:"translate3d("+t+"px, "+o+"px, 0px)"})},i.prototype.touchMove=function(t,o){var s=o-t;this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),s,0),this.setTranslate(e(".lg-prev-slide"),-this.$slide.eq(this.index).width()+s,0),this.setTranslate(e(".lg-next-slide"),this.$slide.eq(this.index).width()+s,0)},i.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&t.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){t.$outer.removeClass("lg-dragging"),0>e&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):e>0&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&t.$el.trigger("onSlideClick.lg"),t.$slide.removeAttr("style")}),setTimeout(function(){t.$outer.hasClass("lg-dragging")||"lg-slide"===t.s.mode||t.$outer.removeClass("lg-slide")},t.s.speed+100)},i.prototype.enableSwipe=function(){var e=this,t=0,o=0,s=!1;e.s.enableSwipe&&e.isTouch&&e.doCss()&&(e.$slide.on("touchstart.lg",function(o){e.$outer.hasClass("lg-zoomed")||e.lgBusy||(o.preventDefault(),e.manageSwipeClass(),t=o.originalEvent.targetTouches[0].pageX)}),e.$slide.on("touchmove.lg",function(i){e.$outer.hasClass("lg-zoomed")||(i.preventDefault(),o=i.originalEvent.targetTouches[0].pageX,e.touchMove(t,o),s=!0)}),e.$slide.on("touchend.lg",function(){e.$outer.hasClass("lg-zoomed")||(s?(s=!1,e.touchEnd(o-t)):e.$el.trigger("onSlideClick.lg"))}))},i.prototype.enableDrag=function(){var o=this,s=0,i=0,l=!1,r=!1;o.s.enableDrag&&!o.isTouch&&o.doCss()&&(o.$slide.on("mousedown.lg",function(t){o.$outer.hasClass("lg-zoomed")||(e(t.target).hasClass("lg-object")||e(t.target).hasClass("lg-video-play"))&&(t.preventDefault(),o.lgBusy||(o.manageSwipeClass(),s=t.pageX,l=!0,o.$outer.scrollLeft+=1,o.$outer.scrollLeft-=1,o.$outer.removeClass("lg-grab").addClass("lg-grabbing"),o.$el.trigger("onDragstart.lg")))}),e(t).on("mousemove.lg",function(e){l&&(r=!0,i=e.pageX,o.touchMove(s,i),o.$el.trigger("onDragmove.lg"))}),e(t).on("mouseup.lg",function(t){r?(r=!1,o.touchEnd(i-s),o.$el.trigger("onDragend.lg")):(e(t.target).hasClass("lg-object")||e(t.target).hasClass("lg-video-play"))&&o.$el.trigger("onSlideClick.lg"),l&&(l=!1,o.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},i.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1,o=this.$slide.length;this.s.loop&&(0===this.index?t=o-1:this.index===o-1&&(e=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),t>-1&&this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(e).addClass("lg-next-slide")},i.prototype.mousewheel=function(){var e=this;e.$outer.on("mousewheel.lg",function(t){t.deltaY>0?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault()})},i.prototype.closeGallery=function(){var t=this,o=!1;this.$outer.find(".lg-close").on("click.lg",function(){t.destroy()}),t.s.closable&&(t.$outer.on("mousedown.lg",function(t){o=e(t.target).is(".lg-outer")||e(t.target).is(".lg-item ")||e(t.target).is(".lg-img-wrap")?!0:!1}),t.$outer.on("mouseup.lg",function(s){(e(s.target).is(".lg-outer")||e(s.target).is(".lg-item ")||e(s.target).is(".lg-img-wrap")&&o)&&(t.$outer.hasClass("lg-dragging")||t.destroy())}))},i.prototype.destroy=function(o){var s=this;s.$el.trigger("onBeforeClose.lg"),o&&(this.$items.off("click.lg click.lgcustom"),e.removeData(s.el,"lightGallery")),this.$el.off(".lg.tm"),e.each(e.fn.lightGallery.modules,function(e){s.modules[e]&&s.modules[e].destroy()}),this.lGalleryOn=!1,clearTimeout(s.hideBartimeout),this.hideBartimeout=!1,e(t).off(".lg"),e("body").removeClass("lg-on lg-from-hash"),s.$outer&&s.$outer.removeClass("lg-visible"),e(".lg-backdrop").removeClass("in"),setTimeout(function(){s.$outer&&s.$outer.remove(),e(".lg-backdrop").remove(),s.$el.trigger("onCloseAfter.lg")},s.s.backdropDuration+50)},e.fn.lightGallery=function(t){return this.each(function(){if(e.data(this,"lightGallery"))try{e(this).data("lightGallery").init()}catch(o){console.error("lightGallery has not initiated properly")}else e.data(this,"lightGallery",new i(this,t))})},e.fn.lightGallery.modules={}}(jQuery,window,document),function(e,t,o,s){"use strict";var i={autoplay:!1,pause:5e3,progressBar:!0,fourceAutoplay:!1,autoplayControls:!0,appendAutoplayControlsTo:".lg-toolbar"},l=function(t){return this.core=e(t).data("lightGallery"),this.$el=e(t),this.core.$items.length<2?!1:(this.core.s=e.extend({},i,this.core.s),this.interval=!1,this.fromAuto=!0,this.canceledOnTouch=!1,this.fourceAutoplayTemp=this.core.s.fourceAutoplay,this.core.doCss()||(this.core.s.progressBar=!1),this.init(),this)};l.prototype.init=function(){var e=this;e.core.s.autoplayControls&&e.controls(),e.core.s.progressBar&&e.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),e.progress(),e.core.s.autoplay&&e.startlAuto(),e.$el.on("onDragstart.lg.tm touchstart.lg.tm",function(){e.interval&&(e.cancelAuto(),e.canceledOnTouch=!0)}),e.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",function(){!e.interval&&e.canceledOnTouch&&(e.startlAuto(),e.canceledOnTouch=!1)})},l.prototype.progress=function(){var e,t,o=this;o.$el.on("onBeforeSlide.lg.tm",function(){o.core.s.progressBar&&o.fromAuto&&(e=o.core.$outer.find(".lg-progress-bar"),t=o.core.$outer.find(".lg-progress"),o.interval&&(t.removeAttr("style"),e.removeClass("lg-start"),setTimeout(function(){t.css("transition","width "+(o.core.s.speed+o.core.s.pause)+"ms ease 0s"),e.addClass("lg-start")},20))),o.fromAuto||o.core.s.fourceAutoplay||o.cancelAuto(),o.fromAuto=!1})},l.prototype.controls=function(){var t=this,o='<span class="lg-autoplay-button lg-icon"></span>';e(this.core.s.appendAutoplayControlsTo).append(o),t.core.$outer.find(".lg-autoplay-button").on("click.lg",function(){e(t.core.$outer).hasClass("lg-show-autoplay")?(t.cancelAuto(),t.core.s.fourceAutoplay=!1):t.interval||(t.startlAuto(),t.core.s.fourceAutoplay=t.fourceAutoplayTemp)})},l.prototype.startlAuto=function(){var e=this;e.core.$outer.find(".lg-progress").css("transition","width "+(e.core.s.speed+e.core.s.pause)+"ms ease 0s"),e.core.$outer.addClass("lg-show-autoplay"),e.core.$outer.find(".lg-progress-bar").addClass("lg-start"),e.interval=setInterval(function(){e.core.index+1<e.core.$items.length?e.core.index=e.core.index:e.core.index=-1,e.core.index++,e.fromAuto=!0,e.core.slide(e.core.index,!1,!1)},e.core.s.speed+e.core.s.pause)},l.prototype.cancelAuto=function(){clearInterval(this.interval),this.interval=!1,this.core.$outer.find(".lg-progress").removeAttr("style"),this.core.$outer.removeClass("lg-show-autoplay"),this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")},l.prototype.destroy=function(){this.cancelAuto(),this.core.$outer.find(".lg-progress-bar").remove()},e.fn.lightGallery.modules.autoplay=l}(jQuery,window,document),function(e,t,o,s){"use strict";var i={fullScreen:!0},l=function(t){return this.core=e(t).data("lightGallery"),this.$el=e(t),this.core.s=e.extend({},i,this.core.s),this.init(),this};l.prototype.init=function(){var e="";if(this.core.s.fullScreen){if(!(o.fullscreenEnabled||o.webkitFullscreenEnabled||o.mozFullScreenEnabled||o.msFullscreenEnabled))return;e='<span class="lg-fullscreen lg-icon"></span>',this.core.$outer.find(".lg-toolbar").append(e),this.fullScreen()}},l.prototype.reuestFullscreen=function(){var e=o.documentElement;e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},l.prototype.exitFullscreen=function(){o.exitFullscreen?o.exitFullscreen():o.msExitFullscreen?o.msExitFullscreen():o.mozCancelFullScreen?o.mozCancelFullScreen():o.webkitExitFullscreen&&o.webkitExitFullscreen()},l.prototype.fullScreen=function(){var t=this;e(o).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",function(){t.core.$outer.toggleClass("lg-fullscreen-on")}),this.core.$outer.find(".lg-fullscreen").on("click.lg",function(){o.fullscreenElement||o.mozFullScreenElement||o.webkitFullscreenElement||o.msFullscreenElement?t.exitFullscreen():t.reuestFullscreen()})},l.prototype.destroy=function(){this.exitFullscreen(),e(o).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")},e.fn.lightGallery.modules.fullscreen=l}(jQuery,window,document),function(e,t,o,s){"use strict";var i={pager:!1},l=function(t){return this.core=e(t).data("lightGallery"),this.$el=e(t),this.core.s=e.extend({},i,this.core.s),this.core.s.pager&&this.core.$items.length>1&&this.init(),this};l.prototype.init=function(){var t,o,s,i=this,l="";if(i.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'),i.core.s.dynamic)for(var r=0;r<i.core.s.dynamicEl.length;r++)l+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+i.core.s.dynamicEl[r].thumb+'" /></div></span>';else i.core.$items.each(function(){l+=i.core.s.exThumbImage?'<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+e(this).attr(i.core.s.exThumbImage)+'" /></div></span>':'<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+e(this).find("img").attr("src")+'" /></div></span>'});o=i.core.$outer.find(".lg-pager-outer"),o.html(l),t=i.core.$outer.find(".lg-pager-cont"),t.on("click.lg touchend.lg",function(){var t=e(this);i.core.index=t.index(),i.core.slide(i.core.index,!1,!1)}),o.on("mouseover.lg",function(){clearTimeout(s),o.addClass("lg-pager-hover")}),o.on("mouseout.lg",function(){s=setTimeout(function(){o.removeClass("lg-pager-hover")})}),i.core.$el.on("onBeforeSlide.lg.tm",function(e,o,s){t.removeClass("lg-pager-active"),t.eq(s).addClass("lg-pager-active")})},l.prototype.destroy=function(){},e.fn.lightGallery.modules.pager=l}(jQuery,window,document),function(e,t,o,s){"use strict";var i={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",thumbWidth:100,thumbContHeight:100,thumbMargin:5,exThumbImage:!1,showThumbByDefault:!0,toogleThumb:!0,enableThumbDrag:!0,enableThumbSwipe:!0,swipeThreshold:50,loadYoutubeThumbnail:!0,youtubeThumbSize:1,loadVimeoThumbnail:!0,vimeoThumbSize:"thumbnail_small",loadDailymotionThumbnail:!0},l=function(t){return this.core=e(t).data("lightGallery"),this.core.s=e.extend({},i,this.core.s),this.$el=e(t),this.$thumbOuter=null,this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.$items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin),this.thumbIndex=this.core.index,this.left=0,this.init(),this};l.prototype.init=function(){this.core.s.thumbnail&&this.core.$items.length>1&&(this.core.s.showThumbByDefault&&this.core.$outer.addClass("lg-thumb-open"),this.build(),this.core.s.animateThumb?(this.core.s.enableThumbDrag&&!this.core.isTouch&&this.core.doCss()&&this.enableThumbDrag(),this.core.s.enableThumbSwipe&&this.core.isTouch&&this.core.doCss()&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toogle(),this.thumbkeyPress())},l.prototype.build=function(){function o(e,t,o){var s,a=i.core.isVideo(e,o)||{},n="";a.youtube||a.vimeo||a.dailymotion?a.youtube?s=i.core.s.loadYoutubeThumbnail?"//img.youtube.com/vi/"+a.youtube[1]+"/"+i.core.s.youtubeThumbSize+".jpg":t:a.vimeo?i.core.s.loadVimeoThumbnail?(s="//i.vimeocdn.com/video/error_"+r+".jpg",n=a.vimeo[1]):s=t:a.dailymotion&&(s=i.core.s.loadDailymotionThumbnail?"//www.dailymotion.com/thumbnail/video/"+a.dailymotion[1]:t):s=t,l+='<div data-vimeo-id="'+n+'" class="lg-thumb-item" style="width:'+i.core.s.thumbWidth+"px; margin-right: "+i.core.s.thumbMargin+'px"><img src="'+s+'" /></div>',n=""}var s,i=this,l="",r="",a='<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>';switch(this.core.s.vimeoThumbSize){case"thumbnail_large":r="640";break;case"thumbnail_medium":r="200x150";break;case"thumbnail_small":r="100x75"}if(i.core.$outer.addClass("lg-has-thumb"),i.core.$outer.find(".lg").append(a),i.$thumbOuter=i.core.$outer.find(".lg-thumb-outer"),i.thumbOuterWidth=i.$thumbOuter.width(),i.core.s.animateThumb&&i.core.$outer.find(".lg-thumb").css({width:i.thumbTotalWidth+"px",position:"relative"}),this.core.s.animateThumb&&i.$thumbOuter.css("height",i.core.s.thumbContHeight+"px"),i.core.s.dynamic)for(var n=0;n<i.core.s.dynamicEl.length;n++)o(i.core.s.dynamicEl[n].src,i.core.s.dynamicEl[n].thumb,n);else i.core.$items.each(function(t){i.core.s.exThumbImage?o(e(this).attr("href")||e(this).attr("data-src"),e(this).attr(i.core.s.exThumbImage),t):o(e(this).attr("href")||e(this).attr("data-src"),e(this).find("img").attr("src"),t)});i.core.$outer.find(".lg-thumb").html(l),s=i.core.$outer.find(".lg-thumb-item"),s.each(function(){var t=e(this),o=t.attr("data-vimeo-id");o&&e.getJSON("http://www.vimeo.com/api/v2/video/"+o+".json?callback=?",{format:"json"},function(e){t.find("img").attr("src",e[0][i.core.s.vimeoThumbSize])})}),s.eq(i.core.index).addClass("active"),i.core.$el.on("onBeforeSlide.lg.tm",function(){s.removeClass("active"),s.eq(i.core.index).addClass("active")}),s.on("click.lg touchend.lg",function(){var t=e(this);setTimeout(function(){(i.thumbClickable&&!i.core.lgBusy||!i.core.doCss())&&(i.core.index=t.index(),i.core.slide(i.core.index,!1,!0))},50)}),i.core.$el.on("onBeforeSlide.lg.tm",function(){i.animateThumb(i.core.index)}),e(t).on("resize.lg.thumb orientationchange.lg.thumb",function(){setTimeout(function(){i.animateThumb(i.core.index),i.thumbOuterWidth=i.$thumbOuter.width()},200)})},l.prototype.setTranslate=function(e){this.core.$outer.find(".lg-thumb").css({transform:"translate3d(-"+e+"px, 0px, 0px)"})},l.prototype.animateThumb=function(e){var t=this.core.$outer.find(".lg-thumb");if(this.core.s.animateThumb){var o;switch(this.core.s.currentPagerPosition){case"left":o=0;break;case"middle":o=this.thumbOuterWidth/2-this.core.s.thumbWidth/2;break;case"right":o=this.thumbOuterWidth-this.core.s.thumbWidth}this.left=(this.core.s.thumbWidth+this.core.s.thumbMargin)*e-1-o,this.left>this.thumbTotalWidth-this.thumbOuterWidth&&(this.left=this.thumbTotalWidth-this.thumbOuterWidth),this.left<0&&(this.left=0),this.core.lGalleryOn?(t.hasClass("on")||this.core.$outer.find(".lg-thumb").css("transition-duration",this.core.s.speed+"ms"),this.core.doCss()||t.animate({left:-this.left+"px"},this.core.s.speed)):this.core.doCss()||t.css("left",-this.left+"px"),this.setTranslate(this.left)}},l.prototype.enableThumbDrag=function(){var o=this,s=0,i=0,l=!1,r=!1,a=0;o.$thumbOuter.addClass("lg-grab"),o.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb",function(e){o.thumbTotalWidth>o.thumbOuterWidth&&(e.preventDefault(),s=e.pageX,l=!0,o.core.$outer.scrollLeft+=1,o.core.$outer.scrollLeft-=1,o.thumbClickable=!1,o.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))}),e(t).on("mousemove.lg.thumb",function(e){l&&(a=o.left,r=!0,i=e.pageX,o.$thumbOuter.addClass("lg-dragging"),a-=i-s,a>o.thumbTotalWidth-o.thumbOuterWidth&&(a=o.thumbTotalWidth-o.thumbOuterWidth),0>a&&(a=0),o.setTranslate(a))}),e(t).on("mouseup.lg.thumb",function(){r?(r=!1,o.$thumbOuter.removeClass("lg-dragging"),o.left=a,Math.abs(i-s)<o.core.s.swipeThreshold&&(o.thumbClickable=!0)):o.thumbClickable=!0,l&&(l=!1,o.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))})},l.prototype.enableThumbSwipe=function(){var e=this,t=0,o=0,s=!1,i=0;e.core.$outer.find(".lg-thumb").on("touchstart.lg",function(o){e.thumbTotalWidth>e.thumbOuterWidth&&(o.preventDefault(),t=o.originalEvent.targetTouches[0].pageX,e.thumbClickable=!1)}),e.core.$outer.find(".lg-thumb").on("touchmove.lg",function(l){e.thumbTotalWidth>e.thumbOuterWidth&&(l.preventDefault(),o=l.originalEvent.targetTouches[0].pageX,s=!0,e.$thumbOuter.addClass("lg-dragging"),i=e.left,i-=o-t,i>e.thumbTotalWidth-e.thumbOuterWidth&&(i=e.thumbTotalWidth-e.thumbOuterWidth),0>i&&(i=0),e.setTranslate(i))}),e.core.$outer.find(".lg-thumb").on("touchend.lg",function(){e.thumbTotalWidth>e.thumbOuterWidth&&s?(s=!1,e.$thumbOuter.removeClass("lg-dragging"),Math.abs(o-t)<e.core.s.swipeThreshold&&(e.thumbClickable=!0),e.left=i):e.thumbClickable=!0})},l.prototype.toogle=function(){var e=this;e.core.s.toogleThumb?(e.core.$outer.addClass("lg-can-toggle"),e.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'),e.core.$outer.find(".lg-toogle-thumb").on("click.lg",function(){e.core.$outer.toggleClass("lg-thumb-open")})):e.core.s.animateThumb&&e.core.$outer.addClass("lg-cant-toggle")},l.prototype.thumbkeyPress=function(){var o=this;e(t).on("keydown.lg.thumb",function(e){38===e.keyCode?(e.preventDefault(),o.core.$outer.addClass("lg-thumb-open")):40===e.keyCode&&(e.preventDefault(),o.core.$outer.removeClass("lg-thumb-open"))})},l.prototype.destroy=function(){this.core.s.thumbnail&&this.core.$items.length>1&&(e(t).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),this.$thumbOuter.remove(),this.core.$outer.removeClass("lg-has-thumb"))},e.fn.lightGallery.modules.Thumbnail=l}(jQuery,window,document),function(e,t,o,s){"use strict";var i={videoMaxWidth:"855px",youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,videojs:!1},l=function(t){return this.core=e(t).data("lightGallery"),this.$el=e(t),this.core.s=e.extend({},i,this.core.s),this.videoLoaded=!1,this.init(),this};l.prototype.init=function(){var t=this;t.core.$el.on("hasVideo.lg.tm",function(e,o,s,i){if(t.core.$slide.eq(o).find(".lg-video").append(t.loadVideo(s,"lg-object",!0,o,i)),i)if(t.core.s.videojs)try{videojs(t.core.$slide.eq(o).find(".lg-html5").get(0),{},function(){t.videoLoaded||this.play()})}catch(l){console.error("Make sure you have included videojs")}else t.core.$slide.eq(o).find(".lg-html5").get(0).play()}),t.core.$el.on("onAferAppendSlide.lg.tm",function(e,o){t.core.$slide.eq(o).find(".lg-video-cont").css("max-width",t.core.s.videoMaxWidth),t.videoLoaded=!0});var o=function(e){if(e.find(".lg-object").hasClass("lg-has-poster"))if(e.hasClass("lg-has-video")){var o=e.find(".lg-youtube").get(0),s=e.find(".lg-vimeo").get(0),i=e.find(".lg-dailymotion").get(0),l=e.find(".lg-html5").get(0);if(o)o.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");else if(s)try{$f(s).api("play")}catch(r){console.error("Make sure you have included froogaloop2 js")}else if(i)i.contentWindow.postMessage("play","*");else if(l)if(t.core.s.videojs)try{videojs(l).play()}catch(r){console.error("Make sure you have included videojs")}else l.play();e.addClass("lg-video-palying")}else{e.addClass("lg-video-palying lg-has-video");var a,n,d=function(o,s){if(e.find(".lg-video").append(t.loadVideo(o,"",!1,t.core.index,s)),s)if(t.core.s.videojs)try{videojs(t.core.$slide.eq(t.core.index).find(".lg-html5").get(0),{},function(){this.play()})}catch(i){console.error("Make sure you have included videojs")}else t.core.$slide.eq(t.core.index).find(".lg-html5").get(0).play()};t.core.s.dynamic?(a=t.core.s.dynamicEl[t.core.index].src,n=t.core.s.dynamicEl[t.core.index].html,d(a,n)):(a=t.core.$items.eq(t.core.index).attr("data-src"),n=t.core.$items.eq(t.core.index).attr("data-html"),d(a,n));var c=e.find(".lg-object");e.find(".lg-video").append(c),e.find(".lg-video-object").hasClass("lg-html5")||(e.removeClass("lg-complete"),e.find(".lg-video-object").on("load.lg error.lg",function(){e.addClass("lg-complete")}))}};t.core.doCss()?t.core.$el.on("onSlideClick.lg.tm",function(){var e=t.core.$slide.eq(t.core.index);o(e)}):t.core.$slide.on("click.lg",function(){o(e(this))}),t.core.$el.on("onBeforeSlide.lg.tm",function(e,o){var s=t.core.$slide.eq(o),i=s.find(".lg-youtube").get(0),l=s.find(".lg-vimeo").get(0),r=s.find(".lg-dailymotion").get(0),a=s.find(".lg-html5").get(0);
    if(i)i.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");else if(l)try{$f(l).api("pause")}catch(n){console.error("Make sure you have included froogaloop2 js")}else if(r)r.contentWindow.postMessage("pause","*");else if(a)if(t.core.s.videojs)try{videojs(a).pause()}catch(n){console.error("Make sure you have included videojs")}else a.pause()}),t.core.$el.on("onAfterSlide.lg.tm",function(e,o){t.core.$slide.eq(o).removeClass("lg-video-palying")})},l.prototype.loadVideo=function(t,o,s,i,l){var r="",a=1,n="",d=this.core.isVideo(t,i)||{};if(s&&(a=this.videoLoaded?0:1),d.youtube)n="?wmode=opaque&autoplay="+a+"&enablejsapi=1",this.core.s.youtubePlayerParams&&(n=n+"&"+e.param(this.core.s.youtubePlayerParams)),r='<iframe class="lg-video-object lg-youtube '+o+'" width="560" height="315" src="//www.youtube.com/embed/'+d.youtube[1]+n+'" frameborder="0" allowfullscreen></iframe>';else if(d.vimeo)n="?autoplay="+a+"&api=1",this.core.s.vimeoPlayerParams&&(n=n+"&"+e.param(this.core.s.vimeoPlayerParams)),r='<iframe class="lg-video-object lg-vimeo '+o+'" width="560" height="315"  src="http://player.vimeo.com/video/'+d.vimeo[1]+n+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if(d.dailymotion)n="?wmode=opaque&autoplay="+a+"&api=postMessage",this.core.s.dailymotionPlayerParams&&(n=n+"&"+e.param(this.core.s.dailymotionPlayerParams)),r='<iframe class="lg-video-object lg-dailymotion '+o+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+d.dailymotion[1]+n+'" frameborder="0" allowfullscreen></iframe>';else if(d.html5){var c=l.substring(0,1);("."===c||"#"===c)&&(l=e(l).html()),r=l}return r},l.prototype.destroy=function(){this.videoLoaded=!1},e.fn.lightGallery.modules.video=l}(jQuery,window,document),function(e,t,o,s){"use strict";var i={scale:1,zoom:!0,enableZoomAfter:300},l=function(o){return this.core=e(o).data("lightGallery"),this.core.s=e.extend({},i,this.core.s),this.core.s.zoom&&this.core.doCss()&&(this.init(),this.zoomabletimeout=!1,this.pageX=e(t).width()/2,this.pageY=e(t).height()/2+e(t).scrollTop()),this};l.prototype.init=function(){var o=this,s='<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';this.core.$outer.find(".lg-toolbar").append(s),o.core.$el.on("onSlideItemLoad.lg.tm.zoom",function(t,s,i){var l=o.core.s.enableZoomAfter+i;e("body").hasClass("lg-from-hash")&&i?l=0:e("body").removeClass("lg-from-hash"),o.zoomabletimeout=setTimeout(function(){o.core.$slide.eq(s).addClass("lg-zoomable")},l+30)});var i=1,l=function(s){var i,l,r=o.core.$outer.find(".lg-current .lg-image"),a=(e(t).width()-r.width())/2,n=(e(t).height()-r.height())/2+e(t).scrollTop();i=o.pageX-a,l=o.pageY-n;var d=(s-1)*i,c=(s-1)*l;r.css("transform","scale3d("+s+", "+s+", 1)").attr("data-scale",s),r.parent().css("transform","translate3d(-"+d+"px, -"+c+"px, 0)").attr("data-x",d).attr("data-y",c)},r=function(){i>1?o.core.$outer.addClass("lg-zoomed"):o.resetZoom(),1>i&&(i=1),l(i)};o.core.$el.on("onAferAppendSlide.lg.tm.zoom",function(e,t){var s=o.core.$slide.eq(t).find(".lg-image");s.dblclick(function(e){var l,a=s.width(),n=o.core.$items.eq(t).attr("data-width")||s[0].naturalWidth||a;o.core.$outer.hasClass("lg-zoomed")?i=1:n>a&&(l=n/a,i=l||2),o.pageX=e.pageX,o.pageY=e.pageY,r(),setTimeout(function(){o.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")},10)})}),e(t).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",function(){o.pageX=e(t).width()/2,o.pageY=e(t).height()/2+e(t).scrollTop(),l(i)}),e("#lg-zoom-out").on("click.lg",function(){o.core.$outer.find(".lg-current .lg-image").length&&(i-=o.core.s.scale,r())}),e("#lg-zoom-in").on("click.lg",function(){o.core.$outer.find(".lg-current .lg-image").length&&(i+=o.core.s.scale,r())}),o.core.$el.on("onBeforeSlide.lg.tm",function(){o.resetZoom()}),o.core.isTouch||o.zoomDrag(),o.core.isTouch&&o.zoomSwipe()},l.prototype.resetZoom=function(){this.core.$outer.removeClass("lg-zoomed"),this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),this.core.$slide.find(".lg-image").removeAttr("style data-scale"),this.pageX=e(t).width()/2,this.pageY=e(t).height()/2+e(t).scrollTop()},l.prototype.zoomSwipe=function(){var e=this,t={},o={},s=!1,i=!1,l=!1;e.core.$slide.on("touchstart.lg",function(o){if(e.core.$outer.hasClass("lg-zoomed")){var s=e.core.$slide.eq(e.core.index).find(".lg-object");l=s.outerHeight()*s.attr("data-scale")>e.core.$outer.find(".lg").height(),i=s.outerWidth()*s.attr("data-scale")>e.core.$outer.find(".lg").width(),(i||l)&&(o.preventDefault(),t={x:o.originalEvent.targetTouches[0].pageX,y:o.originalEvent.targetTouches[0].pageY})}}),e.core.$slide.on("touchmove.lg",function(r){if(e.core.$outer.hasClass("lg-zoomed")){var a,n,d=e.core.$slide.eq(e.core.index).find(".lg-img-wrap");r.preventDefault(),s=!0,o=r.originalEvent.targetTouches[0].pageX,o={x:r.originalEvent.targetTouches[0].pageX,y:r.originalEvent.targetTouches[0].pageY},e.core.$outer.addClass("lg-zoom-dragging"),n=l?-Math.abs(d.attr("data-y"))+(o.y-t.y):-Math.abs(d.attr("data-y")),a=i?-Math.abs(d.attr("data-x"))+(o.x-t.x):-Math.abs(d.attr("data-x")),d.css("transform","translate3d("+a+"px, "+n+"px, 0)")}}),e.core.$slide.on("touchend.lg",function(){e.core.$outer.hasClass("lg-zoomed")&&s&&(s=!1,e.core.$outer.removeClass("lg-zoom-dragging"),e.touchendZoom(t,o,i,l))})},l.prototype.zoomDrag=function(){var o=this,s={},i={},l=!1,r=!1,a=!1,n=!1;o.core.$slide.on("mousedown.lg.zoom",function(t){var i=o.core.$slide.eq(o.core.index).find(".lg-object");n=i.outerHeight()*i.attr("data-scale")>o.core.$outer.find(".lg").height(),a=i.outerWidth()*i.attr("data-scale")>o.core.$outer.find(".lg").width(),o.core.$outer.hasClass("lg-zoomed")&&e(t.target).hasClass("lg-object")&&(a||n)&&(t.preventDefault(),s={x:t.pageX,y:t.pageY},l=!0,o.core.$outer.scrollLeft+=1,o.core.$outer.scrollLeft-=1,o.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))}),e(t).on("mousemove.lg.zoom",function(e){if(l){var t,d,c=o.core.$slide.eq(o.core.index).find(".lg-img-wrap");r=!0,i={x:e.pageX,y:e.pageY},o.core.$outer.addClass("lg-zoom-dragging"),d=n?-Math.abs(c.attr("data-y"))+(i.y-s.y):-Math.abs(c.attr("data-y")),t=a?-Math.abs(c.attr("data-x"))+(i.x-s.x):-Math.abs(c.attr("data-x")),c.css("transform","translate3d("+t+"px, "+d+"px, 0)")}}),e(t).on("mouseup.lg.zoom",function(e){l&&(l=!1,o.core.$outer.removeClass("lg-zoom-dragging"),!r||s.x===i.x&&s.y===i.y||(i={x:e.pageX,y:e.pageY},o.touchendZoom(s,i,a,n)),r=!1),o.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")})},l.prototype.touchendZoom=function(e,t,o,s){var i=this,l=i.core.$slide.eq(i.core.index).find(".lg-img-wrap"),r=i.core.$slide.eq(i.core.index).find(".lg-object"),a=-Math.abs(l.attr("data-x"))+(t.x-e.x),n=-Math.abs(l.attr("data-y"))+(t.y-e.y),d=(i.core.$outer.find(".lg").height()-r.outerHeight())/2,c=Math.abs(r.outerHeight()*Math.abs(r.attr("data-scale"))-i.core.$outer.find(".lg").height()+d),u=(i.core.$outer.find(".lg").width()-r.outerWidth())/2,h=Math.abs(r.outerWidth()*Math.abs(r.attr("data-scale"))-i.core.$outer.find(".lg").width()+u);s&&(-c>=n?n=-c:n>=-d&&(n=-d)),o&&(-h>=a?a=-h:a>=-u&&(a=-u)),s?l.attr("data-y",Math.abs(n)):n=-Math.abs(l.attr("data-y")),o?l.attr("data-x",Math.abs(a)):a=-Math.abs(l.attr("data-x")),l.css("transform","translate3d("+a+"px, "+n+"px, 0)")},l.prototype.destroy=function(){var o=this;o.core.$el.off(".lg.zoom"),e(t).off(".lg.zoom"),o.core.$slide.off(".lg.zoom"),o.core.$el.off(".lg.tm.zoom"),o.resetZoom(),clearTimeout(o.zoomabletimeout),o.zoomabletimeout=!1},e.fn.lightGallery.modules.zoom=l}(jQuery,window,document),function(e,t,o,s){"use strict";var i={hash:!0},l=function(o){return this.core=e(o).data("lightGallery"),this.core.s=e.extend({},i,this.core.s),this.core.s.hash&&(this.oldHash=t.location.hash,this.init()),this};l.prototype.init=function(){var o,s=this;s.core.$el.on("onAfterSlide.lg.tm",function(e,o,i){t.location.hash="lg="+s.core.s.galleryId+"&slide="+i}),e(t).on("hashchange",function(){o=t.location.hash;var e=parseInt(o.split("&slide=")[1],10);o.indexOf("lg="+s.core.s.galleryId)>-1?s.core.slide(e):s.core.lGalleryOn&&s.core.destroy()})},l.prototype.destroy=function(){this.oldHash&&this.oldHash.indexOf("lg="+this.core.s.galleryId)<0?t.location.hash=this.oldHash:history.pushState?history.pushState("",o.title,t.location.pathname+t.location.search):t.location.hash=""},e.fn.lightGallery.modules.hash=l}(jQuery,window,document);

/*
 1 - Gallery with custom transitions. The full list of available transition you can check here: http://sachinchoolur.github.io/lightGallery/demos/transitions.html
 2 - Type of easing to be used for css animations
 3 - Type of easing to be used for jquery animations
 4 - Transition duration (in ms).
 5 - Height of the gallery. ex: '100%' , '300px'
 6 - Width of the gallery. ex: '100%' , '300px'
 7 - Add custom class for gallery, can be used to set different style for different gallery
 8 - Starting animation class for the gallery.
 9 - Lightgallery backdrop transtion duration. Do not change the value of backdrop via css.
 10 - Delay for hiding gallery controls in ms
 11 - force lightgallery to use css left property instead of transform.
 12 - allows clicks on dimmer to close gallery.
 13 - If false, will disable the ability to loop back to the beginning of the gallery when on the last element.
 14 - Whether the LightGallery could be closed by pressing the "Esc" key.
 15 - Enable keyboard navigation
 16 - If false, prev/next buttons will not be displayed.
 17 - Enable slideEnd animation
 18 - If true, prev/next button will be hidden on first/last image.
 19 - Chane slide on mousewheel
 20 - You can specify where the sub-html should be appended. '.lg-sub-html' or '.lg-item'
 21 - number of preload slides. will exicute only after the current slide is fully loaded.
 ex:// you clicked on 4th image and if preload = 1 then 3rd slide and 5th slide will be loaded in the background after the 4th slide is fully loaded..
 if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded
 22 - Show Content once it is fully loaded
 23 - Custom selector property instead of just child. pass this to select same element ex : .class #id
 24 - custom html for next control
 25 - custom html for prev control
 26 - Allows to set which image/video should load initially
 27 - Set maximum width for iframe.
 28 - Enable download button. By default download url will be taken from data-src/href attribute but it supports only for modern browsers.
 If you want you can provide another url for download via data-download-url
 29 - Whether to show total number of images and index number of currently displayed image.
 30 - Where the counter should be appended
 31 - By setting the swipeThreshold (in px) you can set how far the user must swipe for the next/prev image.
 32 - Enables desktop mouse drag support
 33 - Enables touch support
 34 - LightGallery can be instantiated and launched programmatically by setting this option to true and populating dynamicEl option (see below) with the definitions of images.

 ===

 1a - Enable thumbnails for the gallery
 2a - Enable thumbnail animation.
 3a - Position of selected thumbnail. 'left' or 'middle' or 'right'
 4a - Width of each thumbnails.
 5a - Height of the thumbnail container including padding and border
 6a - Spacing between each thumbnails
 7a - Whether to display thumbnail toggle button.
 8a - Enables desktop mouse drag support for thumbnails.
 9a - Enables thumbnail touch/swipe support for touch devices
 10a - You can automatically load thumbnails for youtube videos from youtube by setting loadYoutubeThumbnail true
 11a - You can specify the thumbnail size by setting respective number.
 0 - 480x360 pixels -> Player Background Thumbnail
 1 - 120x90 pixels -> Start Thumbnail
 2 - 120x90 pixels -> Middle Thumbnail
 3 - 120x90 pixels -> End Thumbnail
 hqdefault - 480x360 pixels -> High Quality Thumbnail
 mqdefault - 320x180 pixels -> Medium Quality Thumbnail
 default - 120x90 pixels -> Normal Quality Thumbnail
 sddefault - 640x480 pixels -> Standard Definition Thumbnail
 maxresdefault - 1920x1080 pixels -> Maximum Resolution Thumbnail

 -- sddefault and maxresdefault are optional. which may or may not exist. --
 12a - You can automatically load thumbnails for vimeo videos from vimeo by setting loadYoutubeThumbnail true.
 13a - Thumbnail size for vimeo videos: 'thumbnail_large' or 'thumbnail_medium' or 'thumbnail_small'
 thumbnail_small - 100x75 pixels -> Samll size Thumbnail
 thumbnail_medium - 200x150 pixels -> Medium size Thumbnail
 thumbnail_large - 640x360 pixels -> Large size Thumbnail
 14a - You can automatically load thumbnails for dailymotion videos from dailymotion by setting loadYoutubeThumbnail true.

 ===

 1b - Enable gallery autoplay
 2b - The time (in ms) between each auto transition.
 3b - Enable autoplay progress bar
 4b - If false autoplay will be stopped after first user action
 5b - Show/hide autoplay controls.
 6b - Where the autoply controls should be appended.

 ===

 1c - Set limit for video maximal width.

 ===

 1d - Enable/Disable fullscreen mode

 ===

 1e - Enable/Disable zoom option
 2e - Value of zoom should be incremented/decremented
 3e - Some css styles will be added to the images if zoom is enabled. So it might conflict if you add some custom styles to the images such as the initial transition
 while opening the gallery. So you can delay adding zoom related styles to the images by changing the value of enableZoomAfter.


 ===

 HTML markup ex.

 <div class="_js-lightGallery">
 <a href="http://sachinchoolur.github.io/lightGallery/static/img/1.jpg" data-sub-html="Place for title">
 <img src="http://sachinchoolur.github.io/lightGallery/static/img/thumb-1.jpg" />
 </a>
 </div>

 ===

 For more info follow this url: http://sachinchoolur.github.io/lightGallery/

 */


(function ($) {
    "use strict";

    function validatedata($attr, $defaultValue) {
        "use strict";
        if ($attr !== undefined) {
            return $attr
        }
        return $defaultValue;
    }

    function parseBoolean(str, $defaultValue) {
        "use strict";
        if (str == 'true') {
            return true;
        } else if (str == "false") {
            return false;
        }
        return $defaultValue;
    }

    $(document).on('ready', function(){
        if ($().lightGallery){
            if ($('._js-lightGallery').length > 0){
                var $lightGallery = $('._js-lightGallery');
                $lightGallery.each(function(){
                    var $this = $(this);

                    // Lightgallery core

                    var _mode = validatedata($this.attr("data-mode"), 'lg-slide'), // *1
                        _cssEasing = validatedata($this.attr("data-cssEasing"), 'ease'), // *2
                        _jQueryEasing = validatedata($this.attr("data-jqEasing"), 'linear'), // *3
                        _speed = parseInt(validatedata($this.attr("data-speed"), 600), 0), // *4
                        _height = validatedata($this.attr("data-height"), '100%'), // *5
                        _width = validatedata($this.attr('data-width'), '100%'), // *6
                        _addClass = validatedata($this.attr('data-class'), ''), // *7
                        _startClass = validatedata($this.attr('data-startClass'), 'lg-start-zoom'), // *8
                        _backdropDuration = parseInt(validatedata($this.attr("data-backdropDuration"), 150), 0), // *9
                        _hideBarsDelay = parseInt(validatedata($this.attr("data-hideBarsDelay"), 6000), 0), // *10
                        _useLeft = parseBoolean($this.attr("data-useLeft"), false), // *11
                        _closable = parseBoolean($this.attr("data-closable"), true), // *12
                        _loop = parseBoolean($this.attr("data-loop"), true), // *13
                        _escKey = parseBoolean($this.attr("data-escKey"), true), // *14
                        _keyPress = parseBoolean($this.attr("data-keyPress"), true), // *15
                        _controls = parseBoolean($this.attr("data-controls"), true), // *16
                        _slideEndAnimatoin = parseBoolean($this.attr("data-slideEndAnimation"), true), // *17
                        _hideControlOnEnd = parseBoolean($this.attr("data-controlsStartEnd"), false), // *18
                        _mousewheel = parseBoolean($this.attr("data-mousewheel"), true), // *19
                        _appendSubHtmlTo = validatedata($this.attr('data-appendSubHtmlTo'), '.lg-sub-html'), // *20
                        _preload = parseInt(validatedata($this.attr("data-preload"), 1), 0), // *21
                        _showAfterLoad = parseBoolean($this.attr("data-showAfterLoad"), true), // *22
                        _selector = validatedata($this.attr('data-selector'), ''), // *23
                        _nextHTML = validatedata($this.attr('data-nextHTML'), ''), // *24
                        _prevHTML = validatedata($this.attr('data-prevHTML'), ''), // *25
                        _index = parseInt(validatedata($this.attr("data-index"), 0), 0), // *26
                        _iframeMaxWidth = validatedata($this.attr('data-iframeMaxWidth'), '100%'), // *27
                        _download = parseBoolean($this.attr("data-download"), true), // *28
                        _counter = parseBoolean($this.attr("data-counter"), true), // *29
                        _appendCounterTo = validatedata($this.attr('data-appendCounterTo'), '.lg-toolbar'), // *30
                        _swipeThreshold = parseInt(validatedata($this.attr("data-swipeThreshold"), 50), 0), // *31
                        _enableDrag = parseBoolean($this.attr("data-drag"), true), // *32
                        _enableTouch = parseBoolean($this.attr("data-touch"), true), // *33
                        _dynamic = parseBoolean($this.attr("data-dynamic"), false); // *34

                    // Thumbnail plugin

                    var _thumbnail = parseBoolean($this.attr("data-thumbnail"), true), // *1a
                        _animateThumb = parseBoolean($this.attr("data-animateThumb"), true), // *2a
                        _currentPagerPosition =  validatedata($this.attr('data-currentPagerPosition'), 'middle'), // *3a
                        _thumbWidth = parseInt(validatedata($this.attr("data-thumbWidth"), 100), 0), // *4a
                        _thumbContHeight = parseInt(validatedata($this.attr("data-thumbContHeight"), 100), 0), // *5a
                        _thumbMargin = parseInt(validatedata($this.attr("data-thumbMargin"), 5), 0), // *6a
                        _toogleThumb = parseBoolean($this.attr("data-toogleThumb"), true), // *7a
                        _enableThumbDrag = parseBoolean($this.attr("data-enableThumbDrag"), true), // *8a
                        _enableThumbSwipe = parseBoolean($this.attr("data-enableThumbSwipe"), true), // *9a
                        _loadYoutubeThumbnail = parseBoolean($this.attr("data-loadYoutubeThumbnail"), true),// *10a,
                        _youtubeThumbSize = parseInt(validatedata($this.attr("data-youtubeThumbSize"), 1), 0),// *11a,
                        _loadVimeoThumbnail = parseBoolean($this.attr("data-loadVimeoThumbnail"), true), // *12a
                        _vimeoThumbSize = validatedata($this.attr('data-vimeoThumbSize'), 'thumbnail_small'), // *13a
                        _loadDailymotionThumbnail = parseBoolean($this.attr("data-loadDailymotionThumbnail"), true); // *14a

                    // Autoplay plugin

                    var _autoplay = parseBoolean($this.attr("data-autoplay"), true), // *1b
                        _pause = parseInt(validatedata($this.attr("data-pause"), 5000), 0),// *2b
                        _progressBar = parseBoolean($this.attr("data-progressBar"), true), // *3b
                        _fourceAutoplay = parseBoolean($this.attr("data-fourceAutoplay"), false), // *4b
                        _autoplayControls = parseBoolean($this.attr("data-autoplayControls"), true), // *5b
                        _appendAutoplayControlsTo = validatedata($this.attr('data-appendAutoplayControlsTo'), '.lg-toolbar'); // *6b


                    // Video plugin

                    var _videoMaxWidth = validatedata($this.attr('data-videoMaxWidth'), '855'); // *1c

                    // Fullscreen plugin

                    var _fullScreen = parseBoolean($this.attr("data-fullScreen"), true); // *1d

                    // Zoom plugin

                    var _zoom = parseBoolean($this.attr("data-zoom"), true), // *1e
                        _scale = parseInt(validatedata($this.attr("data-scale"), 1), 0),// *2e
                        _enableZoomAfter = parseInt(validatedata($this.attr("data-enableZoomAfter"), 50), 0);// *3e


                    // Hash plugin

                    var _hash = parseBoolean($this.attr("data-hash"), false), // *1f
                        _galleryId = parseInt(validatedata($this.attr("data-galleryId"), 1), 0);// *3e


                    // Attributes

                    // Light Gallery init with default options

                    $this.lightGallery({
                        mode: _mode,
                        cssEasing : _cssEasing,
                        easing: _jQueryEasing,
                        speed: _speed,
                        height: _height,
                        width: _width,
                        addClass: _addClass,
                        startClass: _startClass,
                        backdropDuration: _backdropDuration,
                        hideBarsDelay: _hideBarsDelay,
                        useLeft: _useLeft,
                        closable: _closable,
                        loop: _loop,
                        escKey: _escKey,
                        keyPress: _keyPress,
                        controls: _controls,
                        slideEndAnimatoin: _slideEndAnimatoin,
                        hideControlOnEnd: _hideControlOnEnd,
                        mousewheel: _mousewheel,
                        appendSubHtmlTo: _appendSubHtmlTo,
                        preload: _preload,
                        showAfterLoad: _showAfterLoad,
                        selector: _selector,
                        nextHTML: _nextHTML,
                        prevHTML: _prevHTML,
                        index: _index,
                        iframeMaxWidth: _iframeMaxWidth,
                        download: _download,
                        counter: _counter,
                        appendCounterTo: _appendCounterTo,
                        swipeThreshold: _swipeThreshold,
                        enableDrag: _enableDrag,
                        enableTouch: _enableTouch,
                        dynamic: _dynamic,
                        thumbnail: _thumbnail,
                        animateThumb: _animateThumb,
                        currentPagerPosition: _currentPagerPosition,
                        thumbWidth: _thumbWidth,
                        thumbContHeight: _thumbContHeight,
                        thumbMargin: _thumbMargin,
                        toogleThumb: _toogleThumb,
                        enableThumbDrag: _enableThumbDrag,
                        enableThumbSwipe: _enableThumbSwipe,
                        loadYoutubeThumbnail: _loadYoutubeThumbnail,
                        youtubeThumbSize: _youtubeThumbSize,
                        loadVimeoThumbnail: _loadVimeoThumbnail,
                        vimeoThumbSize: _vimeoThumbSize,
                        loadDailymotionThumbnail: _loadDailymotionThumbnail,
                        autoplay: _autoplay,
                        pause: _pause,
                        progressBar: _progressBar,
                        fourceAutoplay: _fourceAutoplay,
                        autoplayControls: _autoplayControls,
                        appendAutoplayControlsTo: _appendAutoplayControlsTo,
                        videoMaxWidth: _videoMaxWidth,
                        fullScreen: _fullScreen,
                        zoom: _zoom,
                        scale: _scale,
                        enableZoomAfter: _enableZoomAfter,
                        hash: _hash,
                        galleryId: _galleryId
                    });
                });
            }
        }
    });

}(jQuery));
