jQuery.noConflict();
jQuery(document).ready(function(){
    var $ = jQuery;

    var scrolling;


    // Under bar

    $(window).load(function(){
      $(window).scrollTop(1);
    })

    $(window).scroll(function(){
      var scrollHeight = $(document).height() - $(window).height();
      var nowHeight = $(window).scrollTop();
      $(".pro-bar").width(nowHeight / scrollHeight * $(window).width());
      clearInterval(scrolling);
    });

    if ($(document).height() == $(window).height()) {
      $(".pro-bar").css("width", "100%");
    }

    // $.fn.scrollEnd = function(callback, timeout) {
    //   $(window).scroll(function(){
    //     clearInterval(scrolling);
    //     var $this = $(window);
    //     if ($this.data('scrollTimeout')) {
    //       clearTimeout($this.data('scrollTimeout'));
    //     }
    //     $this.data('scrollTimeout', setTimeout(callback, timeout));
    //   });
    // };
    //



  });
