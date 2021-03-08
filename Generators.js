let i=[1,2,3,4];
let iterator=i[Symbol.iterator]();

function *generator(){
  let i=0;
  while(true){
      yield i;
      if(i==3){
        yield* anotherGenerator();
      }
      i++;
    }

}
function *anotherGenerator(){
  yield 2;
}
let iterate=generator();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
