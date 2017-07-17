function greeting() {
   var post_comment = $('#comment').val();
   //alert("You wrote "  + post_comment );
   $("#all_comments").append("<p>You wrote: " + post_comment+ "</p>");
 }

 function setup() {
   $("#post").click(greeting);
 }

 $(document).ready(setup)
