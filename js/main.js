$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    
    if (startchange.length){
        $(document).scroll(function() { 
            scroll_start = $(this).scrollTop();

            if(scroll_start > offset.top) {
                $(".navbar").css({'background-color': '#fff', 'box-shadow':'1px 0 2px #fff'});
                $(".nav-item a").css({'color': '#000'});
                $(".nav-link").css('text-shadow', 'none');
                $(".navbar-brand").css('color','#000');
            } else {
                $('.navbar').css({'background-color': 'transparent'});
                $(".nav-item a").css({'color': '#fff'});
                $("nav").css({'background': 'rgba(0, 0, 0, 0.5)', 'box-shadow': 'none'});
                $(".navbar-brand").css('color','#fff');
            }
        });
    }
});