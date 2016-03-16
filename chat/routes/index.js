var express = require('express');
var router = express.Router();

var sala = require("../public/javascripts/Sala");
var user = require("../public/javascripts/User");
var mensaje = require("../public/javascripts/Mensaje");

var listaSalas = [new sala(0, "Defecto"), new sala(1, "Privada"),new sala(2, "Tercera")];
var listaUsers = [];
var ultimoMensaje = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'NodeJS Chat', salas: listaSalas});
});

router.post('/', function(req, res, next) {
    var salaSele = req.body.sala;
    console.log("Sala: "+salaSele);
    var u = new user(req.body.user);

    var fecha = new Date();
    var minutes = fecha.getMinutes();
    var hour = fecha.getHours();
    var ms = fecha.getTime(); //Para ver si ha llegado un mensaje nuevo

    u.ultimoMensaje = ms;

    listaUsers.push(u);
    var salaNombre = listaSalas[salaSele].nombre;
    var msj = "Bienvenido a la sala "+salaNombre+", "+u.nick;


    var fecha = new Date();
    var minutes = fecha.getMinutes();
    var hour = fecha.getHours();
    var ms = fecha.getTime(); //Para ver si ha llegado un mensaje nuevo

    var index = listaUsers.indexOf(u);
    console.log(index);
    var fecha = hour+":"+minutes;

    listaSalas[salaSele].mensajes.push(new mensaje(u, msj, fecha, ms));
//    ultimoMensaje = listaSalas[salaSele].mensajes[listaSalas[salaSele].mensajes.length-1];

    res.render('chat', { salaIn: salaSele , user: u, msj: msj, fecha: fecha, indexUser: index});
});


router.post('/demanda-chat', function(req, res, next) {
    var salaSele = req.body.salaSele;
    var u = JSON.parse(req.body.u);
    var indexUser = req.body.indexUser;
    console.log(indexUser);
    var fecha = new Date();
    var minutes = fecha.getMinutes();
    var hour = fecha.getHours();

    fecha = hour+":"+minutes;

    var salaNombre = listaSalas[salaSele].nombre;



    console.log("1: "+Number(listaSalas[salaSele].mensajes[listaSalas[salaSele].mensajes.length-1].ms));
    console.log("2: "+Number(u.ultimoMensaje));
    if(listaSalas[salaSele].mensajes[listaSalas[salaSele].mensajes.length-1].ms > listaUsers[indexUser].ultimoMensaje){

        ultimoMensaje = listaSalas[salaSele].mensajes[listaSalas[salaSele].mensajes.length-1];
        var mensajeUser = ultimoMensaje.autor;

        listaUsers[indexUser].ultimoMensaje = ultimoMensaje.ms;



        res.send({ salaIn: salaSele, user: mensajeUser, msj: ultimoMensaje.texto, fecha: ultimoMensaje.fecha, salaNombre: salaNombre});


//        console.log("UltimoSMS: "+ultimoMensaje.texto+" at "+ultimoMensaje.ms);
//        console.log(u.nick+" : "+ultimoMensaje.texto+" at "+u.ultimoMensaje);
    }
    else{
        res.send("nadaNuevo");
        console.log("Nada Nuevo");
    }


});


router.post('/chat-A', function(req, res, next) {
    var salaSele = req.body.salaSele;
    var msj = req.body.msj;
    var u = JSON.parse(req.body.u);

    var fecha = new Date();
    var minutes = fecha.getMinutes();
    var hour = fecha.getHours();
    var ms = fecha.getTime(); //Para ver si ha llegado un mensaje nuevo

    var fecha = hour+":"+minutes;

//    if(msj != undefined){
        listaSalas[salaSele].mensajes.push(new mensaje(u, msj, fecha, ms));
        console.log("Autor: "+listaSalas[salaSele].mensajes[listaSalas[salaSele].mensajes.length-1].ms);
        console.log("MSJ: "+listaSalas[salaSele].mensajes[listaSalas[salaSele].mensajes.length-1].texto);
//    }

//    var salaNombre = listaSalas[salaSele].nombre;
//    res.send();
//    res.render('chat', { salaIn: salaSele, user: u, msj: msj, fecha: fecha, salaNombre: salaNombre});
});

module.exports = router;
