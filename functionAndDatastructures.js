//Arrays callback functions
const numbers=[20,21,22,23,24,25,26,27];
numbers.forEach(function(num){
  console.log(num * 2);
});
numbers.forEach(function(item, i) {
  console.log(`number :${item} at index ${i}`);
});

function printTriple(n){
  console.log(n*3);
}
numbers.forEach(printTriple);
const books =[
  {
    title:'Good omens',
    authors:['Terry Pratchhet','Neil Gaimen'],
    rating:4.25
  },{
    title:'Bone: The complete edition',
    authors:['Jeff Smith'],
    rating: 4.42
  },
  {
    title:'American Gods',
    authors:['Neil Gaimen'],
    rating:4.11
  },{
    title:'A gentleman in moscow',
    authors:['Amor Towels'],
    rating:4.36
  }
]
books.forEach(function(book){
  console.log(book.title.toUpperCase());
});

//Maps takes function as input and can transform the input
// based on implementation
const doubles=numbers.map(function(num){
  return num *2;
});
console.log(doubles);

const numDetail=numbers.map(function(n){
  return {
    value:n,
    isEven:n%2===0
  }
});
console.log(numDetail);

const word=['asap','byob','rsvp','diy'];
const abbr=word.map(function(w){
  return w.toUpperCase().split('').join('.');
});
console.log(abbr);
const bookTitles=books.map(function(book){
  return book.title.toUpperCase();
});
console.log(bookTitles);

//Fat Arrow functions
const square=function(x){
  return x * x;
}
//if one parameter is there you can loose the paranthesis
//implicit returns doesnt require return statements
const sqr = x => (x * x);
const sq = x => x * x;
console.log(square(2));
console.log(sqr(2));
console.log(sq(2));
const isEven = (x)=>{
  return x%2===0;
}
console.log(isEven(4));

const multiply=(x,y)=>{
  return x * y;
}
console.log(multiply(5,9));

const doubled=numbers.map(n => n * 2);
console.log(doubled);
const parityList=numbers.map(n => n % 2===0?'even':'odd');
console.log(parityList);
//Find
//Returns the first match returns true
let movies=[
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs Doubtfire",
  "Mr. Deeds"
]
const movie=movies.find(movie=>movie.includes("Mrs"));
console.log(movie);
const movie2=movies.find(movie=>movie.indexOf("Mrs")===0);
console.log(movie2);
const goodBook=books.find(book => book.rating>=4.3);
console.log(goodBook);
//Filter allows to filter based on condition and returns subset of an Arrays
const odd= numbers.filter(num=>num%2===1);
console.log(odd);
const even=numbers.filter(num=>num%2===0);
console.log(even);
const bigNums=numbers.filter(num=>num>25);
console.log(bigNums);
const gdBook=books.filter(book=>book.rating>4);
console.log(gdBook);
//Every checks if every element is true or not
const words=["dig","hog","dog","log","bag","wag"];
const threeCharLong=words.every(word=>word.length===3);
console.log(threeCharLong);

const wordEndsWithG=words.every(word=>word[word.length-1]==='g')
console.log(wordEndsWithG);
const anyWordStartWithD=words.some(word=>word[0]==='d');
console.log(anyWordStartWithD);
const allWordStartWithD=words.every(word=>word[0]==='d');
console.log(allWordStartWithD);

//sorting
const prices=[400.50,3000,99.99,35.99,12.00,9500];
console.log(prices.sort());
console.log(prices.sort((a,b)=>a-b));
console.log(prices.slice().sort((a,b)=>b-a));

//Reduce
console.log([3,5,7,9,11].reduce((accumulator,currentValue)=>accumulator+currentValue));
console.log([3,5,7,9,11].reduce((accumulator,currentValue)=>accumulator*currentValue));
const grades=[87,64,96,92,88,99,73,70,64];
console.log(grades.reduce((max,currentValue)=>currentValue>max?currentValue:max));
console.log(grades.reduce((max,currentValue)=>Math.max(max,currentValue)));
console.log([10,20,30,40,50].reduce((total,current)=> total+current,1000));
const votes=['y','y','n','y','y','n','y','n','y','n','n','n','y'];
console.log(votes.reduce((tally,val)=>{
  if(tally[val]){
    tally[val]++;
  }else{
    tally[val]=1
  }
  return tally;
},{}));
console.log(votes.reduce((tally,value)=>{
  tally[value]=(tally[value]||0)+1;
  return tally
},{}));
