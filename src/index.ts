let id:number=5;
//console.log('Id :', id);

let comopany:string='new company';

let iSPublic:boolean=true;

let x: any='hello';

//array
let ids:number[]=[1,2,3,4];

// touple
let tpPerson: [number,string, boolean]=[1,'sai',true];

//touple array
let employee: [number,string] [];

employee=[
    [1,'sai'],
    [2,'kumar'],
    [3,'abdul']
];

//Union-------------
let pid:string | number;

//Enum
enum Direction1{
    up=3,
    down,
    left,
    right
}

//console.log(Direction1.up);

enum Direction2{
    up='up',
    down='down',
    left='left',
    right='right'
}

//console.log(Direction2.up);

// --------------objects
//bad
const user: {
    id:number,
    name:string
}={
    id:1,
    name:'sai'
}
//good
type User ={
    id:number,
    name:string
}

const user1:User={
    id:1,
    name:'sai'
}

let user3:User | undefined;
if(user3 !== undefined){
    user3.id=3
    user3.name='user 3'
}


//---------Type assertion
let cid:any=1;
let customerId=<number>cid;
// let customerId=cid as number;

//---------function
function add(a:number,b:number):number{
    return a+b;
}
//console.log(add(1,2));
function logmsg(message:string):void{
    console.log(message);
}

//logmsg('hello');

///////
////------type can use unions, interface can't
/////
//----------interface
interface IUser{
    readonly id:number,
    name:string
    age ?:number    //-optional property
}

const user2:IUser={
    id:1,
    name:'sai'
}

interface MathFunc{
    (a:number,b:number):number
}

const addfunc:MathFunc= (a:number,b:number):number=>a+b;
const subfucn:MathFunc= (a:number,b:number):number=>a-b;

//---------class
// class person{
//     private id:number;
//     public name:string;

//     constructor(id:number, name:string){
//         this.id=id;
//         this.name=name;
//     }

// }

// const abdul= new person(1,'abdul');
// console.log(abdul.name);

//-----------Interface Implement

interface IPerson{
    readonly id:number
    name:string
    register():string
}

class Person implements IPerson{
     id:number;
     name:string;

    constructor(id:number, name:string){
        this.id=id;
        this.name=name;
    }
    register(): string {
        return `Id:${id} and Name:${this.name}`
    }
} 

const kamal = new Person(1,'kamal')
//console.log(kamal.register());

class Employee extends Person{
    role:string;
    constructor(id:number,name:string,role:string){
        super(id,name);
        this.role=role
    }
}

const emp= new Employee(1,'emp1','employee')
console.log(emp.register());

//---------Generic
//-bad
// function getArray(item: any[]): any[]{
//     return new Array().concat(item);
// }

// let numArr= getArray([1,2,3,4,5])
// let strArr= getArray(["hello", "there"])

//--good
function getArray<T>(item: T[]): T[]{
    return new Array().concat(item);
}

let numArr= getArray<number>([1,2,3,4,5])
let strArr= getArray<string>(["hello", "there"])

//numArr.push('who')----------gives error 

// for(var i of strArr){
//     console.log(i);
// }

