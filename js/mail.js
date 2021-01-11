

// document.getElementById("contact-form").onsubmit = function() {
//   //Validate Name
//   if(document.getElementById("nom").value === "") {
//       document.getElementById("nameError").innerHTML = "Invalid Name! Please try again.";
//       document.getElementById("nameError").className = "alert alert-danger";
//       document.getElementById("nameError").style.display = "block";
//   }
// //Validate Email
//  if(document.getElementById("mail").value === "") {
//       document.getElementById("emailError").innerHTML = "Invalid Email! Please try again.";
//       document.getElementById("emailError").className = "alert alert-danger";
//       document.getElementById("emailError").style.display = "block";
//   }

// }
// document.getElementById("term-field").style.display = "none";
// document.getElementById("checkbox-form").onclick = function() {
// if(document.getElementById("checkbox-form").checked) {
//   document.getElementById("term-field").style.display = "block";
// } else {
//   document.getElementById("term-field").style.display = "none";
// }
// }



$(document).ready(function(){

  $( "#submit" ).click(function(e) {
    e.preventDefault();
    
    var nom = $("#nom").val();
    var prenom = $("#prenom").val();
    var mail = $("#mail-1").val();
    var mail2 = $("#mail-2").val();

        $.ajax({

          url: 'action.php',

          type: 'POST',

          data: {
            nom: nom, 
            prenom: prenom, 
            mail: mail,
            mail2: mail2
          },

          dataType: 'html',

          success : function(data){

        $('form').html(data);

          } //success


        }); //$.ajax


        
  }); //click
   
}); // ready



