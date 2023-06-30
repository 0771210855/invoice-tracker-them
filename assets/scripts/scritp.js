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


$('#notifi-icon').click(function(){
  if( $(".notifi-drop").hasClass( "notifi-hide" ) ){
          $('.notifi-drop').removeClass(".notifi-hide");
  }
  else {
          $('.notifi-drop').addClass(".notifi-hide");
  }
});



//  $('.menu li[class=""] span').click(function() {
//   const self = $(this).parent();
//   self.toggleClass("menu-open");
// });

// if($('.menu li[class=""]').find('li.active').length !== 0){
//   $(this).addClass("menu-open");
// }



// $(function() {

//   $('.menu li[class=""] span').click(function() {
//       const self = $(this).parent();
//       self.toggleClass("menu-open");
//   });

//   if($('.menu li[class=""]').find('li.active').length !== 0){
//       $(this).addClass("menu-open");
// }

// });


// $('.menu li').each(function() {
//   if($(this).find('li.active').length !== 0) {
//     $(this).addClass('menu-open');
//   }
// });