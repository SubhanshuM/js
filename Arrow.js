  "use strict"
  //Function and fat arrow which returns the passed value
  function getA(a){
    return a;
  }
  console.log("getA : " + getA(5));

  var getB=b=>b;
  console.log("getB : "+ getB(7));
  //Function to add two given numbers.
  var addTwoNumbers=function addTwoNum(firstNumber,secondNumber){
    return firstNumber+secondNumber;
  }
  console.log("addTwoNumbers(15,19) :"+ addTwoNumbers(15,19));
  //In Javascript it is not required to pass the variables it will take from the global scope.
  var a = 4;
  let square = () => { return a * a};
  console.log("square() :"+square());

  let add = _ =>a+a;
  console.log("add() : "+add());
  //multiply given two numbers
  var multiply=(firstNum,secondNum)=>firstNum*secondNum;
  console.log("multiply(15,19) :"+multiply(15,19));
//==============================================
//this refers to the function scope doesn't recognises outer function this
  /*
  var x = function(){
    this.val=1;
    setTimeout(function(){
      this.val++;
      console.log(this.val);
    },1)
  };
    var xx= new x();
  */
//workaround to pass this to settimeout function
  var x= function(){
    var that = this;
     this.val = 1;
    setTimeout(function(){
      that.val++;
      console.log("Functions this : "+that.val)
    },1)
  };
  var xx= new x();


  //Fat Arrow function uses its parent this.
    var x= function(){
       this.val = 1;
      setTimeout(()=>{
        this.val+=5;
        console.log("Fat Arrow this : "+this.val)
      },1)
    };
    var xx= new x();


//Function has arguments
var x = function() {
    console.log("Arguments in a function : "+arguments[0])
}

x(1,2,3);

//Fat Arrow doesnt have arguments but can use ...n to get the arguments value
var x =(...n)=>console.log(" ...n : " + n[0])
x(23,24,25)
