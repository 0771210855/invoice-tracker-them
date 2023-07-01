// Js for collapsing side nave bar
$(document).ready(function(){
   $('#msbo').on('click', function(){
     $('body').toggleClass('msb-x');
   });
 }());


//  js for data table
 $(document).ready(function () {
  $('#dtBasicExample').DataTable();
  $('.dataTables_length').addClass('bs-select');
});


$('#notifi-icon').click(function(event){
  if( $(".notifi-drop").hasClass( "notifi-hide" ) ){    
          $('.notifi-drop').removeClass("notifi-hide");
  }
  else {
      $('.notifi-drop').addClass("notifi-hide");    
  } 

});

$('#profile-img').click(function(event){
  if( $(".my-drop").hasClass( "hide" ) ){    
          $('.my-drop').removeClass("hide");
  }
  else {
      $('.my-drop').addClass("hide");    
  } 

});


/****************Side menu toggles and active classes***************/
$(document).ready(function() {
  // Tab Click Event
  $('.side-menu li a').on('click', function(e) {
    e.preventDefault();

    // Check if the clicked tab has a dropdown menu
    if ($(this).parent().hasClass('dropdown')) {
      $('.side-menu .inner-menu').addClass('show')
    } else {      
    // Remove active class from all tabs
    $('.side-menu li ').removeClass('active');    
    // Add active class to the clicked tab
    $(this).parent().addClass('active');
      // Hide all dropdown menus
      $('.inner-menu').removeClass('active');
    }
  });

  // Inner Element Click Event
  $('.inner-menu li a').on('click', function() {
    // Add active class to the inner element
    $(this).addClass('active');
  });
});

