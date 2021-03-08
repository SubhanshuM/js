var obj=function(){
  this.i=0;
  this.add=function(a){
    this.i+=a;
    return this;
  };
  this.substract=function(s){
    this.i-=s
    return this;
  };
  this.print=function(){
    console.log(this.i);
  }
}

var x = new obj();
x.add(5).substract(3).print();

var objs=function(){
  let i=0;
  let add=function(a){
    i+=a;
    return this;
  };
  let substract=function(s){
    i-=s
    return this;
  };
  let print=function(){
    console.log(i);
  }
  return {add:add,substract:substract,print:print};
}
var m=objs();
m.add(4).substract(1).print();
