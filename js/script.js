$(function() {
 
  
  $("#shoes-submit").click(function(){

    var shoesString = $("#shoes").val();
    var shoes = parseInt(shoesString);

    if ( shoes >= 10 ) {
      $("#cars-form").show();
      $("#shoes-form").hide(); 
    } else {
      $("#answer").text("Go away lil Bitch.");
		  $("#club-img").attr("src", "http://49.media.tumblr.com/tumblr_m3kclttIKE1r15uyio1_r1_250.gif");
    }
    
  });

  $("#cars-submit").click(function(){
    var carsString = $("#cars").val();
    var cars = parseInt(carsString);

    if ( cars >= 1 ) {
      $("#math-form").show();
      $("#cars-form").hide();
  	} else {
      $("#answer").text("Go away lil Bitch.");
		$("#club-img").attr("src", "http://49.media.tumblr.com/tumblr_m3kclttIKE1r15uyio1_r1_250.gif");
    }
  }); 

 $("#number-submit").click(function(){
    var mathString = $("#number").val();
    var math = parseInt(mathString);

    if ( math = 45 ) {
      $("#color-form").show();
      $("#math-form").hide();
  } else {
      $("#answer").text("Go away lil Bitch.");
		  $("#club-img").attr("src", "http://49.media.tumblr.com/tumblr_m3kclttIKE1r15uyio1_r1_250.gif");   
	}
 });   

 $("#word-submit").click(function(){
    var colorString = $("#color").val();
    

    if ( colorString == "red") {
      $("#color-form").hide();
      $("#answer").text("You're in Bitch!");
      $("#club-img").attr("src", "http://45.media.tumblr.com/tumblr_m3kclttIKE1r15uyio2_250.gif");
      
   } else {
      $("#answer").text("Go away lil Bitch.");
		  $("#club-img").attr("src", "http://49.media.tumblr.com/tumblr_m3kclttIKE1r15uyio1_r1_250.gif");
	}
 });


});




 

 

