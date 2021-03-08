// If you define a variable with var then the variable has function scope.

//Function Scope: when a variable is defined in a function then it can be accessed anywhere inside that function only.


var x= function(){
  var y = 1; //available throughout the function
console.log(y);
};
x();

var a= function(){
  var b = 1;
};
//Not accessed here as it is out of function
//console.log(b);
a();

// variable with var keyword does not respect block boundary, it only respects function boundary
var c= function(){
  if(true){  //javascript doesnot have block scope using var keyword
  var d = 1;
  }
console.log(d);
};
c();

// lexical scoping things defined outside is available inside.
var e = function(){
  var f=1;
  var g=function(){
    console.log(f);
  }
  g();
}
e();



var h= function(){
  //hoisting, all the variables are hosted/declared at the start of the function
//undefined which means variable is declared but not initialised
  console.log(i);
  //results in error as j doesnot have declaration
  //console.log(j);
  var i = 1;
}
h();

var l=2;
var k=function(){
//undefined
console.log(l);
  var l=1;
  console.log(l);
}
k();


//Defining a constant in es5
/*Object.defineProperty(window,'PI',{
  value:3.14,
  writable:false
});
PI=2; //Doesnt give error
console.log("Constant in ES5: "+PI);
*/

//To tackle the problem with var keyword javascript introduced let and const
const PI=3.14;
//PI=2; gives error for reassignment of constant variable

let m=function(){
  if(true){
    //console.log(y); hoisting doesn't happen with let keyword. hence will give error.
    let y=1;
  }
  //console.log(y); hoisting doesn't happen with let keyword. hence will give error.
}
