var express = require('express');
var router = express.Router();

var sala = require("../public/javascripts/Sala");
var user = require("../public/javascripts/User");
var mensaje = require("../public/javascripts/Mensaje");

var listaSalas = [new sala(0, "Defecto"), new sala(1, "Privada"),new sala(2, "Tercera")];
var listaUsers = [];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'NodeJS Chat', salas: listaSalas});
});

router.post('/', function(req, res, next) {
    var salaSele = req.body.sala;
    console.log("Sala: "+salaSele);
    var u = new user(req.body.nick);
    listaUsers.push(u);
    var msj = "hola";

    res.render('chat', { salaIn: salaSele , user: u.nick, msj: msj});
});

//mensaje
router.post('/chat', function(req, res, next) {
    var salaSele = req.body.sala;
    var msj = req.body.msj;
    var u = req.body.nick;

    var fecha = new Date();
    var minutes = fecha.getMinutes();
    var hour = fecha.getHours();

    var fecha = hour+":"+minutes;

    if(msj != undefined){
        listaSalas[salaSele].mensajes.push(new mensaje(u, msj, fecha));
        console.log("MSJ: "+listaSalas[salaSele].mensajes[listaSalas[salaSele].mensajes.length-1].texto);
    }

    res.render('chat', { salaIn: salaSele, user: u, msj: msj, fecha: fecha});
});

module.exports = router;
