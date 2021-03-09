//Default Values
function multiply(a , b=1){
  return a * b;
}
console.log(multiply(4,5));
console.log(multiply(4));

//Spread
console.log(Math.max(33,5,7,8,22,99,34,43,68));
const nums=[3,5,7,8,22,99,34,43,68];
console.log(Math.max(nums));
console.log(Math.max(...nums));

function giveMeFour(a,b,c,d){
  console.log('a : '+ a);
  console.log('b : '+ b);
  console.log('c : '+ c);
  console.log('d : '+ d);
}

let str='GOAT';
console.log(giveMeFour(...str));
let colors=['red','green','yellow','blue'];
console.log(giveMeFour(...colors));

const cephalopods=['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];
const gastropods=['giant african snail','banana slug','variable neon slug'];
const cnidaria=['fire coraal','moon jelly'];

const mollusca=[...cephalopods,...gastropods];
console.log(mollusca);
console.log([...cephalopods,...gastropods,...cnidaria]);

const feline={
  legs:4,
  family:'Felidae'
}
const canine={
  family:'Caninae',
  furry:true,
  legs:4
}
const dog={
  ...canine,
  isPet:true,
  adorable:true,
  legs:4
}
const houseCat={
  ...feline,
  isGrumpy:true,
  personality:'unpredictable'
}
//order matters
const tripod={
  ...canine,
  legs:3
}
const threeLeggedDog={
  legs:3,
  ...canine
}
console.log(feline);
console.log(canine);
console.log(dog);
console.log(houseCat);
console.log(tripod);
console.log(threeLeggedDog);
console.log({...[52,73,94,09]});
//console.log([...houseCat]);
console.log([{...houseCat},89.79,90,67]);

//REST multiple arguments into single array
function printArgs(){
console.log(arguments);
const argsArr=[...arguments];
const sum =argsArr.reduce(function(acc,val){
  return acc+val;
})
  //arguments.reduce((total,current)=>total+current);

  console.log(sum);
}
printArgs(37,93,89);
//Doesnt work with arrow functions
//const multi=()=>console.log(arguments);
//multi(230,73,90);
function numsArr(...nums){
  console.log(nums);
};
numsArr(2,5,7,8,3);

function add(...sum){
  console.log(sum.reduce((total,value)=>total+value));
}
add(5,8,9,0,6);

function names(first,second,...names){
  console.log(first);
  console.log(second);
  console.log(names);
}
names("amit","arjit","sumit","sachin");


//Destructuring
const raceResults=[
  "Eluid Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward"
]
const [gold,silver,bronze]=raceResults;
console.log(`gold goes to ${gold}, silver goes to ${silver}, bronze goes to ${bronze}`);
//skippingIndexes
const [first, , ,fourth]=raceResults;
console.log(`first:${first} and fourth: ${fourth}`);

//Destructuring objects
const runner={
  firstName:"Eluid",
  secondName:"Feyisa",
  thridName:"Galen",
  fourthName:"Ghirmay",
  fifthName:"Alphonce",
  sixthName:"Jared"
}
const {firstName,fourthName,sixthName:lastName}=runner;
console.log(`first:${firstName}, fourth:${fourthName}, sixth:${lastName}`);

const athelete={
  athFirstName:"subhanshu",
  athLastName:"shekhar",
  country:"India"
}
function athFullName({athFirstName,athLastName}){
  console.log(`fullname of athelete is ${athFirstName} ${athLastName}`);
}

athFullName(athelete);
