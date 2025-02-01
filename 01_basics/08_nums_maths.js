const score=90
//console.log(score)

const value=new Number(20)
//console.log(value)

//console.log(value.toString())//converts to string
//console.log(typeof value.toString())
//console.log(value.toFixed(2))//gives decimal places by its own acc to the number given
let hundreds=100000000
//console.log(hundreds.toLocaleString('en-IN'))//spaces out the number by adding commas to the number

// console.log(Math)
// console.log(Math.abs(-7))
// console.log(Math.round(8.6))
// console.log(Math.ceil(8.1))
// console.log(Math.floor(8.9))
// console.log(Math.min(2,5,8,4))
// console.log(Math.max(2,5,8,4))

//console.log(Math.random())//math.random() gives me any value between 0 and 1 every time


// console.log(Math.floor((Math.random()*100))+1);


//just to avoid any zero value
//here *100 is done to obtain the values from 1 to 100 ...addition of 1 will neglect the 0 case ...we take floor value to avoid overflow abouve 100 as when randon will give 0.99999 and the *100 gives 99.99 and floor will do it 99 and then 1 is added and becomes 100....if normal value is taken then it'll become 99.99+1=100.99 above 100
const max=20
const min=10

//console.log(Math.floor((Math.random()*(max-min+1))+min))

//here the case is diff we want no.s in a range i.e from [min,max] so instead of *100 we do (max-min+1) plus to aboid overflow and then add min to the sum to let it start from atleast min as we did with +1 as we wanted to start it with 1to 100.


/*-_-_-_-_-_-_-_-_-_-_-_-_TASK-_-_-_-_-_-_-_-_-_-_-_-_*/
//print betwenn 30 to 120

let minn=30
let maxx=120 
console.log(Math.floor((Math.random()*(maxx-minn+1)))+minn)
