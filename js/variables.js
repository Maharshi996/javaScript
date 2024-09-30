// practicing javaScript variables and it's scopes

//  there are theree kind of variables in js

// 1. let
// 2. var
// 3. const


// let variable

let a = 1
//console.log(a)   //here a is accessible

function func(){
    let b = 5 
    b=9           // can be re-assigned

    // let b= 10  // can't be re-declared in block-scope
    console.log(b) 
}
// console.log(b)  this will gives reference error as "b is undefined "

let b = 19        // you can declare let variable with the same name in different scope


//console.log(func()) // this will prints 5 in console since function exection will happen and b is accessible inside func() context

/* here b is accessable cause, b is declared inside function and
b is having a scope upto func() blocks only.

you can re-declare the let variable out of scope and reassign in any scope
*/




var c = 10   // this var keyword is having functional scoped
var d

console.log(c) 

function func2(){
    console.log(c) // this will prints undefined since c is declared after this statement
    var c= 8
    console.log(c) // this will prints 8
    c=20            // can re-assign
    console.log(c)

}

var c = 12  // variables with var keyword can be redeclred and re-assigned

func2()
console.log(c) // this will prints 12, not 10
console.log(d) // this will prints undefined










const e = 11

console.log(e)   // prints 11

function func3(){
//console.log(e) //throws reference error -> cannot access before intialization
const e = 13     
e = 15          // throws type error -> can not assign to constant variable
e= "maharsshi"  // throws type error -> can not assign to constant variable
console.log(e)  // throws type error -> can not assign to constant variable
}
//const e = 13    throws syntax error -> can not re-declare a block scoped variable

func3()



// let and var are dynamically changes it's data types.
// const cannot be re-assigned and re-declared in it's scope



