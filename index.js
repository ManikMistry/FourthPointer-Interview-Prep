// Data Types
// Primitive Datatype
let num=10;
let str='hello';
let bool=true;
let undef=undefined;
let nullVar=null;
let sym=Symbol('unique')

// Non-Primitive Datatype
const arr=[1,2,3,"hello",null,undefined,true,false];
const obj={a:3, b:2};

// let var const
var a=20;
var a="hello";
a="manik";
let b=20;
b=30;
const c=40;
c=60;

//Block scope
{
    let a=30;
}
console.log(a) //we can not access let outside block scope

// Global scope

let name="manik"; //this can be access through out the code

function scope(){
    let xyz=20;
    console.log(xyz,name)
}
scope();  //This is function scope and name is the lexical environemet of scope function