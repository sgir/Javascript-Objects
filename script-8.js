// JS Object Properties - Using get and set in property desciptors
'use strict';

var cat = {
    name: {
        first: "fluffy",
        last: "Cat"
    },
    color: "White"
};


console.log(cat.name);

Object.defineProperty(cat, "fullname", {
    get: function () {
        return this.name.first + " " + this.name.last;
    },

    set: function (value) {
        var nameparts = value.split(" ");
        this.name.first = nameparts[0];
        this.name.last = nameparts[1];

    }
});

console.log(cat.fullname);

cat.fullname = "Muffin Top";

//console.log(cat.name.first);
//console.log(cat.name.last);
console.log(cat.fullname);

for (var property in cat) {
    console.log(property + " " + cat[property]);
}