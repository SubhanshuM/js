//To make an empty array
let students=[];
console.log("empty array "+students);
//An array of strings
let color=['red','orange','yellow'];
console.log("An array of strings "+color);
console.log("color at the index of 0: "+color[0]);
console.log("color at last index: "+color[color.length-1]);
//An array of numbers
let lootoNums=[19,22,45,78];
console.log("An array of numbers "+lootoNums);

//A mixed array
let stuff=[true,'cat',56,null];
console.log("A mixed array "+stuff);

let arr =new Array();
console.log("empty array using object notation: "+arr);


let shoppingList=['cheese','2% milk'];
console.log("initial shopping list : "+shoppingList);
shoppingList[1]='whole milk';
console.log("modified shopping list : "+shoppingList);
shoppingList[2]='Ice cream';
console.log("added item to shopping list : "+shoppingList);
shoppingList.push('tomattoes')
console.log("added tomattoes to end to shopping list: "+shoppingList);
shoppingList.push('onion','chillies');
console.log("added multiple items in shopping list: "+shoppingList);
var item=shoppingList.pop();
console.log("removing end item "+ item +" from shopping list: "+shoppingList);

let dishesToDo=['big platter'];
console.log("dishes to do: "+ dishesToDo);
dishesToDo.unshift('large plate');
console.log("do the large plates: "+dishesToDo);
dishesToDo.unshift('small plates');
console.log("do the small plates: "+dishesToDo);
dishesToDo.unshift('cereal bowl');
console.log("do the cereal bowl: "+dishesToDo);

console.log("removing : "+dishesToDo.shift()+" dish, left over dishes: "+ dishesToDo);
dishesToDo.unshift('fork','knife');
console.log("more items added simultaneously : "+dishesToDo);

const arr1=[1,3,5,7];
const arr2=[2,4,6,8];
const arr3=[9,10,15];
console.log("Concatting the two arrays to give new array: "+arr1.concat(arr2));
console.log("original arr1: "+arr1);
console.log("originar arr2: "+arr2);
console.log("concatting multiple arrays to an array to give combiled array: "+arr1.concat(arr2,arr3));
console.log("includes tells us that the array has the value or not: " +arr1.includes(5));
console.log("includes tells us that the array has the value or not: " +arr1.includes(9));
let ingredients=[
  "water",
  "corn starch",
  "flour",
  "eel",
  "butter"
];
console.log("what is the index of eel in ingredients: "+ ingredients.indexOf('eel'));
console.log("what is the index of chillies in ingredients: "+ ingredients.indexOf('chillies')+" oh it doesnt exist");
let stringNums=["one","two","three"];
stringNums.reverse();
console.log("reversing the array: "+ stringNums);
console.log("joining the array with the delimitter: ",stringNums.join("->"));
let animals=[
  'shark',"salmon","whale",'bear','lizard','tortoise'
];
let swimmers=animals.slice(0,3);
console.log("from animals : "+animals+ " mentioned are the swimmers : "+swimmers);
let mammals=animals.slice(2,4);
console.log("from animals : "+animals+ " mentioned are the mamals : "+mammals);
let reptiles=animals.slice(4);
console.log("from animals : "+animals+ " mentioned are the reptiles : "+reptiles);
let quadruped=animals.slice(-3);
console.log("from animals : "+animals+ " mentioned are the quadruped : "+quadruped);
let ancient=animals.slice(-3,-1);
console.log("from animals : "+animals+ " mentioned  "+ancient);
console.log("copy of animals array: "+animals.slice());
animals.splice(1,0,"octopus");
console.log("adding an element "+ animals);
console.log("deleted the elements "+ animals.splice(3,2));
animals.splice(3,0,"snake","frog")
console.log("added elements : "+animals);

let people=['Mrs Robinson','Angie','jolene','Maggie May','Roxanne'];
people.sort();
console.log("sorted people "+people);
let numbs=[34,10,10000,67,99];
numbs.sort();
console.log("sorting doesnt work as written "+ numbs);
numbs.sort((a,b)=>a > b);
console.log("using function to sort "+ numbs);

let fruit='orange';
let fruitType=fruit;
console.log(fruit);
console.log(fruitType);
fruitType="watermelon";
console.log(fruitType);
console.log(fruit);

let numberArr=[5,6,7,8];
let otherNumberArr=numberArr;
numberArr.push(10);
console.log(otherNumberArr);

const eggs=["brown","brown"];
eggs.push("white");
console.log(eggs);

const nestedArray=[
  ['red','crimson'],
  ['orange','dark orange'],
  ['yellow','golden rod'],
  ['green','olive'],
  ['blue','navy blue']
]
console.log(nestedArray[2][1]);
