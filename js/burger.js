$(function(){
    $('.sidebar-btn').on('click', function(){
        $('.sidebar').toggleClass('out');
        $('.sidebar-btn').toggleClass('out');
        $(".overlay").show();
    });

    $('.sidebar-close').on('click', function(){
        $('.sidebar').toggleClass('out');
        $(".overlay").hide();
    });
});
