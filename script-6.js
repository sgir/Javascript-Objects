//JS Object Properties - Using enumerable attribute
'use strict';

var cat = {
    name: {
        first: "fluffy",
        last: "Cat"
    },
    color: "White"
};

Object.defineProperty(cat, 'name', {
    enumerable: false
})

//Object.defineProperty(cat, 'name', {
//    enumerable: true
//})

//affects the for loop enumeration through the properties
for (var property in cat) {
    console.log(property + ":  " + cat[property]);
}

// affects keys
console.log(Object.keys(cat));

//affects JSON serialization
console.log(JSON.stringify(cat));