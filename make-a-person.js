const Person = function(firstAndLast) {
  let name = firstAndLast.split(" ");
  let firstName = name[0];
  let lastName = name[1];
  this.getFullName = function() {
    return firstAndLast;
  };
    this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  };
  
  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  };
  this.setFirstName = function(first) {
    firstAndLast = first + " " + firstAndLast.split(" ")[1];
  };
  this.setLastName = function(last) {
    firstAndLast = firstAndLast.split(" ")[0] + " " + last;
  };
  this.setFullName = function(name) {
    firstAndLast = name;
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob.getFirstName());