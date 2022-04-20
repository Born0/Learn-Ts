var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5;
//console.log('Id :', id);
var comopany = 'new company';
var iSPublic = true;
var x = 'hello';
//array
var ids = [1, 2, 3, 4];
// touple
var tpPerson = [1, 'sai', true];
//touple array
var employee;
employee = [
    [1, 'sai'],
    [2, 'kumar'],
    [3, 'abdul']
];
//Union-------------
var pid;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 3] = "up";
    Direction1[Direction1["down"] = 4] = "down";
    Direction1[Direction1["left"] = 5] = "left";
    Direction1[Direction1["right"] = 6] = "right";
})(Direction1 || (Direction1 = {}));
//console.log(Direction1.up);
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
var user = {
    id: 1,
    name: 'sai'
};
var user1 = {
    id: 1,
    name: 'sai'
};
var user3;
if (user3 !== undefined) {
    user3.id = 3;
    user3.name = 'user 3';
}
//---------Type assertion
var cid = 1;
var customerId = cid;
// let customerId=cid as number;
//---------function
function add(a, b) {
    return a + b;
}
//console.log(add(1,2));
function logmsg(message) {
    console.log(message);
}
var user2 = {
    id: 1,
    name: 'sai'
};
var addfunc = function (a, b) { return a + b; };
var subfucn = function (a, b) { return a - b; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "Id:".concat(id, " and Name:").concat(this.name);
    };
    return Person;
}());
var kamal = new Person(1, 'kamal');
//console.log(kamal.register());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, role) {
        var _this = _super.call(this, id, name) || this;
        _this.role = role;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(1, 'emp1', 'employee');
console.log(emp.register());
//---------Generic
//-bad
// function getArray(item: any[]): any[]{
//     return new Array().concat(item);
// }
// let numArr= getArray([1,2,3,4,5])
// let strArr= getArray(["hello", "there"])
//--good
function getArray(item) {
    return new Array().concat(item);
}
var numArr = getArray([1, 2, 3, 4, 5]);
var strArr = getArray(["hello", "there"]);
//numArr.push('who')----------gives error 
// for(var i of strArr){
//     console.log(i);
// }
