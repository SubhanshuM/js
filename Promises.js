let cleanRoom=function(){
  return new Promise(function(resolve,reject){
    resolve('Cleaned the room');
  });
};

let removeGarbage=function(p){
  return new Promise(function(resolve,reject){
    resolve('Garbage removed');
  });
};
let winIcecream=function(p){
  return new Promise(function(resolve,reject){
    resolve('won ice-cream');
  });
};

cleanRoom().then(function(result){
  return removeGarbage(result);
}).then(function(result){
  return winIcecream(result);
}).then(function(result){
  console.log("finished: " +result);
});


//Parallel execution
Promise.all([cleanRoom,removeGarbage,winIcecream]).then(function(){
  console.log("All finished");
});
Promise.race([cleanRoom,removeGarbage,winIcecream]).then(function(){
  console.log("one of them finished");
});
