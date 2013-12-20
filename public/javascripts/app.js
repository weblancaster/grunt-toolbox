"use strict";

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayHello = function() {
	console.log('Hi my name is ' + this.name + ' and my age is ' + this.age);
};

var person1 = new Person('Michael', '23');
	person1.sayHello();