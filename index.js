var x =1;

a()
b()
console.log(x);

function a(){
    var x =10;
    console.log(x);
}

function b(){
    var x =100;
    console.log(x);
}
// console.log("Before expression anonymousFunctioin : ",anonymousFunctioin(2,3))
const anonymousFunctioin =(a,b)=> a+b;
console.log("after expression anonymousFunctioin : ",anonymousFunctioin(2,3))
//curring function
function add(a){
  return function(b){
 return a+b
  }
}
const firstArg = add(5)

console.log(firstArg(10))