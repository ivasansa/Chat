// Constructor
function User(nombre) {
  // always initialize all instance properties
  this.nick = nombre;
}
// class methods
User.prototype.fooBar = function() {

};
// export the class
module.exports = User;
