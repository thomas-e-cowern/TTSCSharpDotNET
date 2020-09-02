$(document).ready(function() {
  console.log('JQuery is working');

  $("#submit").click(function(){
    // get form values
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("textarea").val();
    console.log("name: " + name);
    console.log("email: " + email);
    console.log("phone: " + phone);
    console.log("message: " + message);
  });
})