
$("#valide-form-concour").click(function(e){e.preventDefault();
    var t=$("#insert-mail-1").val(),
    n=$("#insert-mail-2").val(),
    o=$("#check-actu").is(":checked"),
    r=$("#insert-name").val(),
    d=$("#insert-surname").val();console.log(o),console.log(t),console.log(n),console.log(d),console.log(r),
    checkboxtrue=1==o?" Vous serez tenu au courant des news Dance Brussels !":" ",
    
    $.ajax({
      url:"form-concours.php",
      type:"POST",
      data:{
        mailunenphp:t,
        maildeuxenphp:n,
        checkboxenphp:checkboxtrue,
        nomenphp:r,
        prenomenphp:d
      },
      dataType:"html",
      
      success:function(e){
        $("#contenu-reponse-form").html(e)}})}),
        $("#envoyer-form").click(function(e){e.preventDefault()})