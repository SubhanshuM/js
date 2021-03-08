var obj ={num:2};
var addToThis=function(a){
  return this.num + a;
}
console.log("Use of call to execute common method for different objects: "+addToThis.call(obj,3));//functionName.call(Object,functionArguments)
var addToThisWithMutipleArguments=function(a,b,c){
  return this.num + a + b + c;
}
console.log("Use of call to execute common method for different objects with multiple args: "+addToThisWithMutipleArguments.call(obj,3,4,5));//functionName.call(Object,functionArguments)

var arr=[1,2,3];//can combile all the argument in the array.no need to pass all arguments in function directly
console.log("Use of apply to execute common method: "+ addToThisWithMutipleArguments.apply(obj,arr));

//BIND: actually attaches the function to the object on the fly and return the function which can be executed
var bound=addToThisWithMutipleArguments.bind(obj);
console.dir("returns the function which is bound to the object: "+bound);
console.log("execute bound function which is attached to the object: "+ bound(1,2,3));
