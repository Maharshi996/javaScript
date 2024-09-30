// arrys are non primitive data types in java script

const arr = []

//console.log(typeof arr)  //---Type of the array is object under the hood
// so array can hold the dynamic values which is quite opposite to the JAVA/C++

 arr.push(1)
 arr.push("maharshi")
 //console.log(arr)  // prints [1,"maharshi"]
arr.pop()
//console.log(arr)  //removes the last index element and returs the array

arr.push('maharshi')
//arr.shift()       // removes the 1st index element and returns the array
//console.log(arr)  

arr2 = [1,2,3,4,5]
const temp = arr2.join(",")  // this will join all the elements in the array based on the
//seperator provided as argument and return the string

console.log(typeof temp)  //string


console.log([8,3,2,1,,,3])  // this will print as [ 8, 3, 2, 1, <2 empty items>, 3 ]
// if there is no items provided then it gives as <number empty items>

