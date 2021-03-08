var x =new Object();
console.log(x);
var y={};
console.log(y);

var pizza={
  crust:'thin',
  toppings:3,
  hasBacon:false,
  howManyToppings:function(){
    return this.toppings;
  }
};
console.log(pizza.crust);
console.log(pizza.toppings);
console.log(pizza.hasBacon);
pizza.price='$12';
console.log(pizza);
console.log(pizza.howManyToppings());
delete(pizza.crust);
console.log(pizza);

var piza=function(){
  this.crust='thin';
  this.toppings=3;
  this.hasBacon=true;
}
console.log(piza.crust);
var pizaA=new piza();
console.log(pizaA.crust);
var pizaB=new piza();
pizaB.crust='pan';
console.log(pizaB);

//Private fields
var pizas=function(){
  let crust='thin';
  let toppings=3;
  this.hasBacon=true;
  this.getHasBacon=function(){
    return this.hasBacon;
  }
  this.getCrust=function(){
    return crust;
  }
  var getToppings=function(){
    return toppings;
  }
}
console.log(pizas);
var pizas=new pizas();
console.log(pizas);
