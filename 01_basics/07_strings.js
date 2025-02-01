const name="vedant Indurkar"
const thismuch=8
//above is normal way to declare strings but don't use it, use the new one
//${name}=>string interpolation
//console.log(`Hello my name is ${name} and i love to code ${thismuch} hrs a day`)

//console.log(`${name} ${thismuch}`)

let str1="Hi"
let str2="vedsssssssssant"

//console.log(`${str1} ${str2}`)

//another way to define a string is:

// let string1=new String("Vedant    is a good boy.")
let string1="          vedant   "
console.log(string1)
// console.log(string1.charAt(3))
// console.log(string1.toUpperCase())
// console.log(string1)
// console.log(string1.indexOf('t'))
console.log(string1.trim())

//these string functions works on string only when its as primitive data type but they dont work when strings are declared in non-primitive fashion.

let string2=new String("what's up Ranaji")
console.log(string2)