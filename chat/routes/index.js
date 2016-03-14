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
//    if (listaSalas[0].miembros.length > 0) {
//        for (va in listaSalas[0].miembros) {
//            ni = va.nick;
//            if (va.nick == req.body.nick) {
//                found = true;
//                console.log("console"+va.nick);
//                console.log(req.body.nick);
//            }
//        }
//    }
//    if(!found){
//        salaSele.miembros.push(new user(req.body.nick));
//    }
//
//    salaSele.mensajes.push(new mensaje("req.body.nick", "blblb", new Date()));
    res.render('chat', { salaIn: salaSele , user: u});
});

//mensaje
router.post('/chat', function(req, res, next) {
    var salaSele = req.body.sala;
    var msj = req.body.msj;
    var u = req.body.user;
    if(msj != undefined){
//        console.log(listaSalas[salaSele.ID]);
        listaSalas[salaSele].mensajes.push(new mensaje(u, msj, new Date()));
    }

    res.render('chat', { salaIn: salaSele, user: u});
});

module.exports = router;
