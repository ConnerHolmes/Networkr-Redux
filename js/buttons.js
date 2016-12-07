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

// IE9+
$('.row').on('click', function() {

   // Clicking on the parent row will toggle the child check box
   $('input[type=checkbox]', this).prop('checked', function(i, checked){
      return !checked
   })

  // Add selected class when box is checked
  if($('input[type=checkbox]', this).prop('checked'))
    $(this).addClass('selected');
  else
    $(this).removeClass('selected');
});
