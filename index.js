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
// c=60;

//Block scope
{
    let a=30;
}
console.log(a) //we can not access let outside block scope

// Global scope

let name="manik"; //this can be access through out the code

// Function scope
function scope(){
    let xyz=20;
    console.log(xyz,name)
}
scope();  //This is function scope and name is the lexical environemet of scope function

// Variable shadowing
let outer=20;
function inner(){
    let outer=30;
    console.log(outer);
}
inner();
console.log(outer);

// Function expression
const fn=function fnExpression(){
    console.log("Function Expresion")
}
fn();

// Higher order function
function higherOrder(fun,a,b,c){
    return fun(a,b,c);
}
function add(a,b,c){
    console.log(a+b+c)
}
higherOrder(add,1,2,3);

// Callback function
function Callback(){
    console.log("I am callback")
}

function main(cb){
    console.log("Let me finished the operation");
    setTimeout(()=>{
        cb();
    },2000)
}
main(Callback)

// Closure
function Closure(){
    let a=10;
   return function child(){
    let b=30;
        return function subChlid(){
            console.log(a+b)
        }
    }
}
Closure()()();


// slice 
let str1="abcd";
console.log(str1.slice(0,1))
// splice
const aar=[1,2,3,4]
console.log(aar.splice(1,2))

// map
const array=[1,2,3]
const result=array.map((e)=>{
    return e*2;
})
console.log(result);

//filter
const result2=array.filter((e)=>{
    return e%2==0;
})
console.log(result2);

// reduce
const array2=[1,2,3];
const result3=array2.reduce((a,n)=>{
    return a+n;
},2);
console.log(result3);

// Given assignment by 1st round of Forth Pointer
// Find the maximum

const findMaximum=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr[arr.length-1];
}


let arr2=[1,25,12,3,4,56,77,9];
console.log(findMaximum(arr2));
