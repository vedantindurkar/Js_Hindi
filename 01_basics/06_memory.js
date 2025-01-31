/*all the primitive members of a code are in stack memory while the non primitive members get memory in heap, while working with stack if we copy the values of one variable to other and make changes to the one variable then these changes dont reflect in the copied variable as it gets the new copied value............but however if we create the copy of the member of heap then we get the refence of the original member so if we make changes to any of them then the values at both are changed.*/

//stack 
let var1=45
let var2=var1
var2=67

//console.log(var1)//=>45
//console.log(var2)//=>67

//Heap
let UserOne={
    name:"vedant",
    email:"v@v.com"
}
let UserTwo=UserOne

UserOne.name="raja"
console.log(UserOne.name)
console.log(UserTwo.name)

//see in above eg. even though we have changed the UserOne name to raja, the name of UserTwo also get's changed as it gets refernce of it since it's in Heap memory.