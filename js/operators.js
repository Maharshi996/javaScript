// there are multiple operatore in JS and most importants are spread and rest
//1. rest
//2. spread

// both are specified with the same syntax but with diff functionality



// rest

// The rest operator is used to put some specific user-supplied values
// in to a javascript ARRAY, means it will pack the items in to one

"use strict" // this will not throws any error and maintains the strict behaviour


function func(...values){
//"use strict"  // this will throws a syntax error cause we can not use 
// use strict inside a function containing a rest param,default param,
// destructuring param
console.log(values)

}

func()  // this will prints empty array since we have'nt passed anything

func(1,2,3) // this will prints [1,2,3]
func(1,"maharshi",8.9,undefined,null)
// this will prints [1,1,"maharshi",8.9,undefined,null]

// we can call all the array methods on values






//spread

// This operatore is just opposite of rest, it will unpack the items
// in any iterable object

const a  = [1,2,3]
const b = [...a,"maharshi",false]

console.log(b) // prints [1,2,3,"maharshi",false]




