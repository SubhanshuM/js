//lexical scoping uses closure
var passed = 3;
var addTo=function(){
  var inner=2;
  return passed+inner;
}
console.log("lexical scoping: "+addTo())
var passed=4;
console.log("lexical scoping: "+addTo())

//using inner functions: when addToInner is called it returns add function with closure which has pass value
var addToInner=function(pass){
  var add=function(inn){
    return pass+inn;
  };
  return add;
}
var addToThree=addToInner(3);
console.log("executing inner function : "+ addToThree(5));
