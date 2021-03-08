let str='sumit';
let str="SUMIT";
let str=`Sumit`;

let str='hello/n'+
"world";

let str =`hello
world`;

let x='Bond';
let bondline=`my name is ${x}, James ${x} `;
console.log(bondline);

let one =1;
let two =2;

let sum=`adding ${one} and ${two} gives me ${one + two}`;
let tagged=function(strArray,...vals){
  console.log(strArray);
  console.log(vals);
}
tagged`adding ${one} and ${two} gives me ${one + two}`;

'hello world'.startsWith('hell');
'hello world'.includes('Wow');
'hello world'.repeat(3);
