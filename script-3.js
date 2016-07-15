//Creating JS Objects - Using Object.create to Create JS objectss
'use strict';

var cat = Object.create(Object.prototype, {
    name: {
        value: 'Fkuffy',
        enumerable: true,
        writable: true,
        configurable: true
    },
    color: {

        value: 'white',
        enumerable: true,
        writable: true,
        configurable: true
    }

})

console.log(cat);