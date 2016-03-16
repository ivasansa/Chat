 /*var xhr;

function inici() {
    try {
        // Firefox, Opera 8.0+, Safari, Chrome
        xhr = new XMLHttpRequest();
    } catch (e) {
        // Internet Explorer
        try {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
            //ie6+
        } catch (e) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
                //ie5
            } catch (e) {
                alert("El teu navegador no suporta AJAX!");
                return false;
            }
        }
    }

    ajaxFunction();
    var id = setInterval(ajaxFunction, 100);

    document.getElementById("enviar").onclick = function () {
        ajaxFunction();
    };
    document.getElementById("num2").onkeyup = function () {
        ajaxFunction();
    };
}

function ajaxFunction() {
    //callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
//            document.getElementById("operacio").innerHTML = xhr.responseText;
            $("#chat").append("<p>"+user+"</p>");
        }
    };
    xhr.open("POST", "/chat", true);
    xhr.send(null);
}
window.addEventListener("load", inici, true);

$('#enviar').on('click', function(ev){
        ev.preventDefault();

        $.post('chat/', {
          u: $('#user').attr('value'),
          salaSele: $('#sala').attr('value'),
          msj: $('#msj').val()
        });

    };

*/
/*

$(document).ready(function (){
  $('#chatMsj').height(window.innerHeight-90);
  $( window ).resize(function() {
    $('#chatMsj').height(window.innerHeight-90);
  });
  setInterval(function(){
    $.post('LOAD-DChat', {
        usuario: $('#user').attr('value'),
        channel: $('#channel').attr('value')
      },function(req){
        if(req != 'no'){
          if(req.img !== undefined){
            if(req.usuario == $('#user').attr('value'))
              $('#chatMsj').append('<div class="me"><img src="'+req.img+'"> '+req.mensaje+' &lt;'+req.usuario+'</div>');
            else
              $('#chatMsj').append('<div class="other">'+req.usuario+'&gt; '+req.mensaje+' <img src="'+req.img+'"></div>');
          } else {
            if(req.usuario == $('#user').attr('value'))
              $('#chatMsj').append('<div class="me">'+req.mensaje+' &lt;'+req.usuario+'</div>');
            else
              $('#chatMsj').append('<div class="other">'+req.usuario+'&gt; '+req.mensaje+'</div>');
            document.getElementById('chatMsj').scrollTo(0,document.getElementById('chatMsj').scrollHeight);
          }
        }
      });
  }, 500);

  $('#msj').on('keyup', function (ev) {
    if(ev.keyCode == 13){
      $.post('AJAX-DChat', {
          usuario: $('#user').attr('value'),
          channel: $('#channel').attr('value'),
          mensaje: $('#msj').val()
        });
        $('#msj').val('');
      }
  });

  $('#send').on('click', function(ev){
    ev.preventDefault();
    $.post('AJAX-DChat', {
        usuario: $('#user').attr('value'),
        channel: $('#channel').attr('value'),
        mensaje: $('#msj').val()
      });
      $('#msj').val('');
  });

  var dropbox = document.getElementById('fImg');
  dropbox.addEventListener('dragenter', nodrag, false);
  dropbox.addEventListener('dragover', nodrag, false);
  dropbox.addEventListener('dragexit', nodrag, false);
  dropbox.addEventListener('drop', drop, false);
});

//Drag and Drop + FileReader
function nodrag(e) {
  e.stopPropagation();
  e.preventDefault();
}
function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  var file = e.dataTransfer.files;
  lectura(file);
}

function lectura(file){
  var reader = new FileReader();
  reader.onloadend = cargaImg;
  reader.readAsDataURL(file[0]);
}

function cargaImg(e){
  $.post('AJAX-DChat', {
    usuario: $('#user').attr('value'),
    channel: $('#channel').attr('value'),
    img: e.target.result,
    mensaje: $('#msj').val()
  });
  $('#msj').val('');
}*/
