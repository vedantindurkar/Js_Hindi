//constructor se object banega to wo singleton hoga warna wo literal hoga

//singleton=> object.create

//we need to define symbol before using it in an object
const mySymbol=Symbol("this")

const JsUser={
    name: "vedant",
    age:21,
    [mySymbol]:"this",//here we used it
    //mySymbol is in brackets so it's treated as symbol else normal notation would have treatd it as a string.
    "fullname":"ved Indurkar",//Interesting
    location:"sangli",
    email: "v@v.com",
    isLoggedIn: false,
    lastLoginDates:[11,17,23,24,28]
}
//here the values are stored in the form of key-value pairs.

//objets can be accesed by two methods one is 1. dot operator 2. braket method

//using dot
// console.log(JsUser.name)
// console.log(JsUser.age)
// console.log(JsUser.fullname)//Important

//using bracket
// console.log(JsUser["name"])
// console.log(JsUser["age"])
// console.log(JsUser["fullname"])//Imp

//if you want to use symbol in object then it has a specific syntax
//console.log(JsUser[mySymbol])//accesed like this (without commas)

JsUser.greeting=function(){
    console.log("hello")
}
console.log(JsUser.greeting())//--->.greeting gives me the reference of the fucntion and .greeting() gives me the implementation of the function.

JsUser.greetingTwo=function(){
    console.log(`Hello dear ${this.name}`)//string interpolation
}

console.log(JsUser.greetingTwo())
