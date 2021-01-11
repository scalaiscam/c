//   $(document).ready(function(){

//   $("a").click(function(e){
//       e.preventDefault();

//       var valeur = $(this).attr("data-attribute");
//       console.log(valeur);

//       $(".content:not("+valeur+")").fadeOut("fast");
//       $(valeur).show();

//   }); //click


//   }); //ready



//--------------------------------------------------------cookie---------------------------------------------------------------------

var cookie = Cookies.get('cook');

if(cookie === undefined) {
    console.log('empty');
} else {
    console.log('exist');
    $('#bar-cookie').remove();
}

$('#cookie-ok').click(function(e){
    e.preventDefault();
    $('#bar-cookie').fadeOut();
    Cookies.set('cook', 'valeur du cookie', { expires: 365});
});

//--------------------------------------------------------ssmooth scroll top---------------------------------------------------------------------

var btn = $('#buttontop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

//--------------------------------------------------------formulaire ajax---------------------------------------------------------------------

$('#valide-form').click(function(e){
    e.preventDefault()
    var mail1 = $("#insert-mail-1").val();
    var mail2 = $("#insert-mail-2").val();
    var checkbox = $('#check-actu').is(':checked');
    var nom = $("#insert-name").val();
    var prenom = $("#insert-surname").val();

    console.log(checkbox)
    console.log(mail1)
    console.log(mail2)
    console.log(prenom)
    console.log(nom)

    if (checkbox == true){
        checkboxtrue = " Vous serez tenu au courant des news Dance Brussels !"
    }else {
        checkboxtrue = " "
    }
    
    $.ajax({
        url : 'form.php',
        type : 'POST',
        data : {
            mailunenphp : mail1,
            maildeuxenphp : mail2,
            checkboxenphp : checkboxtrue,
            nomenphp : nom,
            prenomenphp : prenom
        },
        dataType : 'html',
        success : function(data){
            $('#reponse-form').html(data);
        }
    })
}) //fin click


$('#envoyer-form').click(function(e){
    e.preventDefault()
})

//--------------------------------------------------------header fixe---------------------------------------------------------------------



//## Demo
//https://bcjdevelopment.github.io/butter.js/
// smooth like buttah...

// cancel momentum scrolling

  // set options when initializing butter.js
  var options = {
    wrapperId: 'customDefaultId',
    wrapperDamper: 0.10,
    cancelOnTouch: true
  };
 