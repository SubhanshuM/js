var add=function(a){
  return function(b){
    return a + b;
  }
}
var addToFive=add(5);
console.log(addToFive(1));

var avg=function(...n){
  tot=0
  for (var i = 0; i < n.length; i++) {
    tot+=n[i]
  }
  return tot/n.length;
}

var spiceUp=function(fn,...n){
  return function(...m){
    return fn.apply(this,n.concat(m));
  }
}

var doAvg=spiceUp(avg,1,2,3,4);
console.log("doAvg: "+ doAvg(6,7,8,9));


var sayWhat=function(a){
  return function(b){
    return function(c){
      console.log("saying "+ a + " to "+b+" using "+c);
    }
  }
}

sayWhat('hello')("friends")("javascript");
