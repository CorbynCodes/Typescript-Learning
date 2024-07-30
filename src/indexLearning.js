"use strict";
// Obigatory types
let myName = "Bob";
let numberOfWheel = 4;
let isStudent = false;
let myFavoriteFood = "Pizza";
let person1 = {
    // you can call the speical Type to the object you want to create
    name: "Joe",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "Springfield",
        country: "USA",
    },
};
function displayInfo(person) {
    var _a;
    console.log(`${person.name} lives at ${(_a = person.address) === null || _a === void 0 ? void 0 : _a.street} `);
}
displayInfo(person1);
// typeing arrays
let ages = [100, 101];
let people = [person1];
Array; // can also work
