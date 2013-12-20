"use strict";

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayHello = function() {
	console.log('Hi my name is ' + this.name + 'and my age is ' + this.age);
};

var michael = new Person('Michael', '23');
	michael.sayHello();