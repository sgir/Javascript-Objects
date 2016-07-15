'use strict';

//creates properties on the object represented by 'this'
function Cat() {
    this.name = "fluffy",
    this.color = "White"
};

//this refers to the object currently executing in that context
//create a new empty object and set the context; call Cat function
var cat = new Cat();

console.log(cat);