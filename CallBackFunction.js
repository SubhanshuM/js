// In javascript we can have function as an argument, functions in js are first class member
let x = function() {
    console.log("i am called inside from a function");
}

let y = function(callback){
  console.log("do something");
   callback();
}

y(x);

let calc = function (num1, num2, type){
  if(type typeof ==="function"){
    return type(num1,num2);
  }
}

let add = function (num1, num2){
  return num1 + num2;
}

let multiply = function (num1, num2){
  return num1 * num2;
}

let divide = function (num1, num2){
  return num1/num2;
}

let substract = function (num1, num2){
  return num1 - num2;
}

let doWhatever = function (num1, num2) {
    console.log(`Here are you two numbers back ${num1} and ${num2}`);
}
console.log("adding the two numbers: " + calc(10, 2, add));
console.log("multiply the two numbers: " + calc(10, 2, multiply));
console.log("divide the two numbers: " + calc(10, 2, divide));
console.log("substract the two numbers: " + calc(10, 2, substract));
calc(10,24,doWhatever);
console.log("power: " +calc(2,9,function(num1,num2){
  return num1**num2;
}));
console.log(calc(2,4,(a,b)=>a**a+b**b+2*a*b));

var myArr=[{
  num:5,
  str:'Apple'
},{
  num:7,
  str:'cabbage'
},{
  num:1,
  str:'ban'
}];
myArr.sort(function(val1,val2){
  if(val1.str>val2.str){
    return -1;
  }else{
    return 1;
  }
});
console.log(myArr);
