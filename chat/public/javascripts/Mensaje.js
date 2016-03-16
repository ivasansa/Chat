// Constructor
function Mensaje(nombre, texto, fecha, ms) {
  // always initialize all instance properties
  this.autor = nombre;
  this.texto = texto;
  this.fecha = fecha;
  this.ms = ms;
}
// class methods
Mensaje.prototype.fooBar = function() {

};
// export the class
module.exports = Mensaje;
