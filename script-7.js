//JS Object Properties - Using Consfigurable attribute
'use strict';

var cat = {
    name: {
        first: "fluffy",
        last: "Cat"
    },
    color: "White"
};

Object.defineProperty(cat, 'name', {
    configurable: false
});

//throws an error since we cannot configure again

//Object.defineProperty(cat, 'name', {
//    enumerable: false
//});

//Object.defineProperty(cat, 'name', {
//    configurable: true
//});

//delete cat.name;


//however, this is allowed
Object.defineProperty(cat, 'name', {
    writable: false
});


console.log(cat.name);