//arrays Declaration:

const myArray=[10,20,30,40,60]
//const myArray=["raja","rani","dasi","bhai"]
//const myArray=new Array(45,76,34,78,354)
//console.log(myArray)

//Array Methods:

myArray.push(67)
myArray.pop()
//console.log(myArray)

//to add an elemtnt at the start of the array we use some thing like unshift funtion eg.

myArray.unshift(101)//problem with unshift is that the whole arrays positions are disturbed by 1 place which takes time, so use is avoided.

myArray.shift()
//shift is like deleting from the front, it delete the front most element from the array.

const newArr=myArray.join()//join function changes the type of array to a string, so we see the number array as a string not an array.

//console.log(typeof newArr)
//console.log("\n")

//slice and splice

const firstArray=[22,33,44,55,66,77,88]
console.log("A: ", firstArray)

const slicedArray=firstArray.slice(1,4)
console.log("A Sliced: " ,slicedArray)//after slicing the orignal array doesn't get changed and a part is printed i.e 1 to 3 is printed as the maxLimit is Excluded

const splicedArray=firstArray.splice(1,4)
console.log("A spliced: ",splicedArray)
//In spliced, the orignal arrays gets changed as the spliced part gets chopped from the origianl afrrays and the max limit is also counted 

// this is the major diff btw spliced and sliced.



//console.log(myArray)

