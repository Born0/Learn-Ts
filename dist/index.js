"use strict";
let id = 5;
//console.log('Id :', id);
let comopany = 'new company';
let iSPublic = true;
let x = 'hello';
//array
let ids = [1, 2, 3, 4];
// touple
let tpPerson = [1, 'sai', true];
//touple array
let employee;
employee = [
    [1, 'sai'],
    [2, 'kumar'],
    [3, 'abdul']
];
//Union-------------pipe
let pid;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 3] = "up";
    Direction1[Direction1["down"] = 4] = "down";
    Direction1[Direction1["left"] = 5] = "left";
    Direction1[Direction1["right"] = 6] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.up);
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
//console.log(Direction2.up);
// --------------objects
//bad
const user = {
    id: 1,
    name: 'sai'
};
const user1 = {
    id: 1,
    name: 'sai'
};
//---------Type assertion
let cid = 1;
let customerId = cid;
// let customerId=cid as number;
//---------function
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
function logmsg(message) {
    console.log(message);
}
logmsg('hello');
const user2 = {
    id: 1,
    name: 'sai'
};
const addfunc = (a, b) => a + b;
const subfucn = (a, b) => a - b;
//---------class
class person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const abdul = new person(1, 'abdul');
//console.log(abdul.id); //   private, gives error
console.log(abdul.name);
