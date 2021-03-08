let mySet=new Set([2,3,4,5,6,7,7,7]);
console.dir(mySet);

let myArr=[2,3,4,5,6,7]
for(let i=0;i<myArr.length;i++){
  console.log("Traditional for loop: " + myArr[i]);
}


mySet.forEach((item, i) => {
  console.log("Using for Each "+item+" index "+ i);
});

for (var val of mySet) {
  console.log("Using for of :"+val);
}

let anObject={
  name:'bob',
  age:20,
  friends:['John','kim','peter'],
  getName:function(){
    return this.name;
  }
}
for (var val in anObject) {
  if (anObject.hasOwnProperty(val)) {
    console.log("Object property using for in: "+val);
    console.log("Object val using for in: "+anObject[val]);

  }
}

let iterator=mySet[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
