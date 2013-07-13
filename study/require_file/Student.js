var Person = require("./Person").Person,
    util = require("util");

function Student() {

}

util.inherits(Student, Person);

Student.prototype.hello = function() {
    console.log("I am a Student");
}

Student.prototype.say = function() {
    console.log("say ~~");
}

exports.Student = Student;