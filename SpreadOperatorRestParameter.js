// If you do not know how many arguments are recieved by the function

//Log will tell you that is an array
var x = function(...n){
  console.log(n)
};
x(2,3,4,5);

//Log will tell you it is not an array
var y = function(){
  console.log(arguments)
};
y(5,6,9);

//To convert into array
var y = function(){
  var args =Array.prototype.slice.call(arguments,0);
  var args =[].slice.call(arguments,0);
};


//usage of spread operator
var n=[2,6,8]
var f=function(a,b,c,...n){
};
f(1,3,5);

x.apply(null,n);

var doWhatEver=['have fun','have more fun','have even more fun'];
var life=['born','learn to walk',"learn.js",...doWhatEver,'go to heaven'];
console.log(life);

var a=[1,2,3];
var b=[4,5,6];
a.push(...b);
//earlier: Array.prototype.push.apply(a,b);
console.log(a);
