function grumpus(){
  console.log('ugh....you again...');
  console.log('FOR THE LAST TIME...');
  console.log('LEAVE ME ALONE....');
}
grumpus();

for(let i=0;i<5;i++){
  grumpus();
}
function rollDice(){
  let roll=Math.floor(Math.random()*6)+1;
  console.log(`Rolled: ${roll}`);
}
rollDice();
function throwDice(){
  rollDice();
  rollDice();
  rollDice();
}
throwDice();

function greet(name){
  console.log(`Hi, ${name}!`);
}
greet('tim');
greet();
function throwDiceArg(numRoll){
  for(let i=0;i<numRoll;i++){
    rollDice();
  }
}
throwDiceArg(6);

function add(x,y){
  return x + y;
}

let sum=add(4,5);
console.log(sum);

function isPangram(sentence){
  let lowecased=sentence.toLowerCase();
  for(let char of 'abcdefghijklmnopqrstuv'){
    if(!lowecased.includes(char)){
      return false;
    }
  }
  return true;
}
function lol(){
  let person='tom';
  const age=45;
  var color='teal';
}
//console.log(person);
//console.log(age);
//console.log(color);

let bird="mandrin duck";
function birdWatch(){
  let bird='golden pheasant';
  console.log(bird);
}
birdWatch();
console.log(bird);
if(true){
  let people='tom';
  const peopleAge=45;
  var peopleColor='teal';
}
//console.log(people);
//console.log(peopleAge);
console.log(peopleColor);
let animals=['grizzly bear','panda bear','spectacled bear'];
for(var i=0; i<animals.length; i++){
  console.log(i, animals[i]);
}
console.log(i);


function outer(){
  let movie="Amadeus";
  function inner(){
    //let x="x";
    console.log(movie.toUpperCase());
  }
  //console.log(x);
  inner();
}
//inner();
outer();

const summation=function(a,b){
  return a+b;
}
console.log(summation(5,7));


//functions as object
function substract(a,b){
  return a-b;
}
const multiply=function(a,b){
  return a * b;
}
function divide(a,b){
  return a/b;
}
let operations=[add,substract,multiply,divide];
console.log(operations[2](4,5));
for (let func of operations) {
  console.log(func(30,5));
}

const thing={
  doSomeThing:multiply
}
console.log(thing.doSomeThing(5,8));

//Function which accepts function as an argument
function callThreetimes(fn){
  fn();
  fn();
  fn();
}
const cry=function(){
  console.log("BOO HOO I'm so sad");
}
function rage(){
  console.log("I M ANGRY!!!");
}
function happy(){
  console.log("I M SUPER HAPPY");
}
function callNTimes(fn,num){
  for(let i=num;i>0;i--){
    fn();
  }
}
callThreetimes(rage);
callThreetimes(cry);
callNTimes(happy,5);
pickOne(cry,rage);
function pickOne(fn1,fn2){
  let randomNumber=Math.random();
  console.log(`random number is ${randomNumber}`);
  if (randomNumber>0.5) {
    fn1();
  } else {
    fn2();
  }
}
//function that returns a functions
const multiplyByNumber=function(num){
  return function(number){
    return num * number;
  }
}
const multiplyByThree = multiplyByNumber(3);
console.log(multiplyByThree(10));
function makeBetweenFunc(x,y){
  return function(num){
    return num>=x && num<=y;
  }
}
const isChild=makeBetweenFunc(0,18);
const isInNineties=makeBetweenFunc(1990,1999);
const isNiceWeather=makeBetweenFunc(60,79);
setTimeout(function() {
  console.log("i m timed out... Game Over");
},5000);
