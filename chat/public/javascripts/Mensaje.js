// Constructor
function Mensaje(nombre, texto, fecha, ms) {
  // always initialize all instance properties
  this.autor = nombre;
  this.texto = texto;
  this.fecha = fecha;
  this.ms = ms;
}
// export the class
module.exports = Mensaje;
