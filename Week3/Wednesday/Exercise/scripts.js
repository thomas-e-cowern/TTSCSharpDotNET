$(document).ready(function() {
  console.log('JQuery is working');

  $( "<p>Test</p>" ).appendTo( "p" );

  // defining the variables
  var name = "";
  var phone = "";
  var email = "";
  var message = "";

  // array for checking input
  var required = [];

  $("#submit").click(function(){
    
    // get form values
    name = $("#name").val();
    email = $("#email").val();
    phone = $("#phone").val();
    message = $("textarea").val();

    // add values to array
    required[0] = name;
    required[1] = email;
    required[2] = phone;

    // check if all required values had values
    for (let x = 0; x < required.length; x++) {

      // notifiying user of missing information
      if (required[x] == "") {
        $("#message").html("Please Fill Out Required Fields");
        switch (x) {
          case 0:
            $("label:contains(Name)").addClass("warning");
            break;
          case 1:
            $("label:contains(Email)").addClass("warning");
            break;  
          case 2:
            $("label:contains(Number)").addClass("warning");
            break;  
        }
      } else {
        
        // remove warning class when data is entered
        switch (x) {
          case 0:
            $("label:contains(Name)").removeClass("warning");
            break;
          case 1:
            $("label:contains(Email)").removeClass("warning");
            break;  
          case 2:
            $("label:contains(Number)").removeClass("warning");
            break;  
        }  
      }
    }    

    hideForm();
  });

  function hideForm () {
    // hide form when data entry complete...
    var labelArray = $("form").children("label.warning");
    console.log(labelArray.length);
    if (labelArray.length == 0) {
      $("#form").hide();
      $("h2").html("Thanks for your feedback!");
    } 
  }

})