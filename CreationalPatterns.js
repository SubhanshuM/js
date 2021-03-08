//Factory Pattern
var peopleFactory=function(name,age,state){
  let temp={};
  temp.age=age,
  temp.name=name,
  temp.state=state,
  temp.print=function(){
    console.log("Name : "+ this.name+" , age: "+this.age+" , state: "+this.state);
  }
  return temp;
}
var person1=peopleFactory("John",23,"California");
var person2=peopleFactory("karen",26,"San Hose")
person1.print();
person2.print();
//Constructor Pattern
var peopleConstructor=function(name,age,state){
  this.age=age,
  this.name=name,
  this.state=state,
  this.print=function(){
    console.log("Name : "+ this.name+" , age: "+this.age+" , state: "+this.state);
  }
}
var people3=new peopleConstructor("Arjun",30,"Delhi");
var people4=new peopleConstructor("sandy",35,"Kharagpur");
people3.print();
people4.print();
//Prototype Pattern
var peopleProto=function(){

}
peopleProto.prototype.name="no name";
peopleProto.prototype.age=0;
peopleProto.prototype.state="no state";
peopleProto.prototype.print=function(){
  console.log("Name : "+ this.name+" , age: "+this.age+" , state: "+this.state);
}
var person5=new peopleProto();
person5.name='hanes';
person5.age=25;
person5.state='karnataka';
person5.print();
