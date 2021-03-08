!function(){
  console.log(4);
}();
~function(){
  console.log(9);
}();
console.log((function(i){
  return i + 8
})(10));

var counter=(function(){
  let i=0;
  return {
    get:function(){
      return i;
    },
    set:function(val){
      i=val;
    },
    increment:function(){
      i++;
    }
  }
})();
console.log(counter.get());
counter.set(5);
counter.increment();
console.log(counter.get());
