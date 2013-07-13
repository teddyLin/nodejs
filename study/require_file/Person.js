Person = function () {
    this.name = "teddy";
}

Person.prototype.hello = function () {
    console.log('I am Person');
}

exports.Person = Person;