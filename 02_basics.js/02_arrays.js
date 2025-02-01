//concat operator 

const chess=["pawn","king","queen","knight"]

const cricket=["batsman","bowler","fielder"]

const game=chess.concat(cricket,chess)
//this is how we combine two or more arrays using concat function

//spread operator

const gamePlay=[...chess,...cricket]
//spread operator is 3 dots used before the name of arays and we can combine more than 2 arrys also

//console.log(gamePlay)

const another_array=[5,2,4,[4,6],8,3,[4,4,[7,2]],3]
console.log("before: ",another_array)

const flat_array=another_array.flat(Infinity)//this flat function gives us a normal array of values without those array in array.
console.log(flat_array)

//of_funtion

let score1=100
let score2=200
let score3=300
let score4=400

console.log(Array.of(score1,score2,score3,score4))//In this way, we can create an arrays from normal elements.

//Read more about of,from about arrays.
