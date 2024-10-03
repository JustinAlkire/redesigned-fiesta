$(document).ready(function(){
  
  $('.btn-primary').on('click', function(){
    //Reset the photo 
     $("img").css({ left: '0px'});
    //Remove the you win text on reset aswell
     $("h2").remove();
    
  });
  
   // Make the image draggable
   $("img").draggable({
    stop: function() {
   //   if ($("img").position().left > 10) {
        if ($("img").position().left > 10) {
        // User won, display the message
        if ($('h2').length === 0) { // Prevent adding duplicate messages
          $("body").append("<h2>YOU WIN</h2>");
        }
      }
    }
  });
});