//JS Object Properties - Using JS property descriptors
'use strict';

var cat = {
    name: {
        first: "fluffy",
        last: "Cat"
    },
    color: "White"
};

console.log(Object.getOwnPropertyDescriptor(cat, "name"));

//make name object non writeable
Object.defineProperty(cat, "name", {
    writable: false
});

console.log(Object.getOwnPropertyDescriptor(cat, "name"));

//name.first writability is not affected though name's writable : false
//cat.name.first = "Scratchy" 


//name.first writability is now directly affected after freeze
Object.freeze(cat.name);
cat.name.first = "Scratchy" 

