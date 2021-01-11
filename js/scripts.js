
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
 