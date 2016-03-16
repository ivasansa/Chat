$(document).ready(function (){
//  $('#chatMsj').height(window.innerHeight-90);
//  $( window ).resize(function() {
//    $('#chatMsj').height(window.innerHeight-90);
//  });
  setInterval(function(){
    $.post('demanda-chat', {
        u: $('#user').attr('value'),
        indexUser: $('#indexUser').attr('value'),
        salaSele: $('#sala').attr('value')
      },function(req){
        if(req != 'nadaNuevo'){
             // $('#chatMsj').append('<div class="me">'+req.mensaje+' &lt;'+req.usuario+'</div>');
            $('#chat').append('<li class="me">'+"["+req.fecha+"]"+req.user.nick+": "+req.msj+'</li>');

//            document.getElementById('chat').scrollTo(0,document.getElementById('chat').scrollHeight);

        }


      });
  }, 500);
//
  $('#msj').on('keyup', function (ev) {
    if(ev.keyCode == 13){
      $.post('chat-A', {
          u: $('#user').attr('value'),
          salaSele: $('#sala').attr('value'),
          //ID: $('#ID').attr('value'),
          msj: $('#msj').val()
        });
        $('#msj').val('');
      }
  });

$('#enviar').on('click', function(ev){
        ev.preventDefault();
        console.log("click");
        $.post('chat-A', {
          u: $('#user').attr('value'),
          salaSele: $('#sala').attr('value'),
          indexUser: $('#indexUser').attr('value'),
          msj: $('#msj').val()
        });

    });

});
