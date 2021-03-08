for(let i = 6; i <= 10; i++ ){
  console.log('Hello');
}

for(let num=1; num<=20; num++ ){
  console.log(`${num} x ${num} = ${num * num}`);
}

for(let index=200; index>=0; index-=25){
  console.log(`substracting 25 each time from ${index}`);
}
//infinite loop

/*for(let i=20;i>=0;i++){
  console.log(`this isn't going to stop`);
}*/

const examScores=[98,77,84,91,57,66];
for(let i=0;i<examScores.length;i++){
  console.log("exam scores "+ examScores[i]);
}

const myStudents=[
  {
    firstName:'Zeus',
    grade:86
  },
  {
    firstName:'Artemis',
    grade:97
  },
  {
    firstName:'Hera',
    grade:72
  },
  {
    firstName:'Apollo',
    grade:90
  }
]
for(let i=0; i<myStudents.length;i++){
  console.log(`grade of ${myStudents[i].firstName} is ${myStudents[i].grade} `);
}

const word='stressed';
let reverseWord='';
for(let i=word.length-1;i>0;i--){
  reverseWord+=word[i];
}
console.log(reverseWord);

for(let i=0; i<=10;i++){
  console.log("From Outer Loop " + i);
  for(let j=10;j>=0;j-=2){
    console.log(" from Inner Loop " + j);
  }
}

let gameBoard=[
  [4,32,8,4],
  [64,8,32,2],
  [8,32,16,4],
  [2,8,4,2]
]
let totalValue=0;
for(let i=0;i<gameBoard.length;i++){
  let row=gameBoard[i];
  for(let j=0;j<row.length;j++){
    totalValue+=row[j];
  }
}
console.log("total value:"+totalValue);


let whileCounter=0;
while(whileCounter<=5){
  console.log(whileCounter);
  whileCounter++;
}

const target=Math.floor(Math.random()*10);
let guess=Math.floor(Math.random()*10);
while(guess!=target){
guess=Math.floor(Math.random()*10);
console.log(`Target : ${target} Guess: ${guess}`);
}
console.log(`Congrats you win`);
for(let i=0; i<=10;i++){
  console.log("From Outer Loop " + i);
  for(let j=10;j>=0;j-=2){
    console.log(" from Inner Loop " + j);
    if(j==4){
      break;
    }
  }
}


let subreddits=['soccer','popheads','cringe','books'];
for (let sub of subreddits) {
  console.log(`subreddits: ${sub}`);
}

for (var row of gameBoard) {
  let gameBoardValue=0;
  for(var tot of row){
    gameBoardValue+=tot;
  }
  console.log(`game board value is ${gameBoardValue} and game row is ${row}`);
}


const moviereviews={
  Arrival:9.5,
  Alien:9,
  Ameile:8,
  'In Bruges':9,
  Amadeus:10,
  'Kill Bill':8,
  'Little Miss Sunshine':8.5,
  coraline:7.5
}
for (let movie of Object.keys(moviereviews)) {
  console.log(`using for of loop ${movie} and reviews are ${moviereviews[movie]}`);
}
for (let movie in moviereviews) {
  if (moviereviews.hasOwnProperty(movie)) {
    console.log(`using for in loop ${movie} and reviews are ${moviereviews[movie]}`);
  }
}

for(let k in [24,56,47,90]){
  console.log(k);
  
}
