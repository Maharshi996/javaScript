//      practicing data types in javascript

//      There are two types of data types

//      1. Primitive Data types

//      string
//      number 
//      bigint
//      boolean
//      undefined
//      null
//      symbol

//      2. Non-Primitive data types

//      Object



    let stringDataType = "maharshi"  //string data type
    let charDataType = 'maharshi'    // no,  this is also string data type

    let numberType = 10              // this is number data type
    let floatType = 10.78            // no, this is also a number type

    let bigintType = BigInt(9007199254740992) // this is big int data type

    let booleanType = false || true   // this is boolean type

    let undefinedType = undefined  // this is undefined 
    let undefinedVar               // this is also undefined, where variabel is declared and not defined to any value

    let nullType = null         
    /* null is an object data type? -- null is a primitive, although the typeof operator 
    returns that null is an object. This is an error that has carried over from the first 
    version of JavaScript and been left intentionally unaddressed to avoid breaking expected behavior across the web */
    

    let maharshi = Symbol("maharshi") // this is symbol data type





   // ************************************Non-primitive Types**********************************

    let arr = [] // type of arr is object

    let obj = {} //type of object is object


     function func() {      // type of function is function, but behind the scenes it is an object.
        console.log("hi")
     }

     class classEx{         // type of class is also a function, but behind the hoods it is an object

        /* Classes are in fact "special functions", and just as you can define function expressions and function 
        declarations, a class can be defined in two ways: a class expression or a class declaration.*/

     }


     

 console.log( typeof classEx)

