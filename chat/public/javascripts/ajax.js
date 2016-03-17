$(document).ready(function (){
  setInterval(function(){
    $.post('demanda-chat', {
        u: $('#user').attr('value'),
        indexUser: $('#indexUser').attr('value'),
        salaSele: $('#sala').attr('value')
      },function(req){
        if(req != 'nadaNuevo'){
            $('#chat').append('<li class="sms">'+"["+"<i>"+req.fecha+"</i>"+"] "+"<b>"+req.user.nick+"</b>"+": "+req.msj+'</li>');
        }
      });
  }, 500);

$('#msj').on('keyup', function (ev) {
    if(e.which == 13) {
        $( "#enviar" ).click();
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
        $('#msj').val('');
    });

});
