var a=10;
let b=20;
const c=34;
 
a=23;
b=64;


console.log(a+b+c);
if(a==200){
  console.log("this is f condition");

}else{
  console.log("this is else condition");
}

function food (item){
  console.log("this is food function");

}
console.log(food("pizza"));
console.log(food("burger"));

/*for(var a=0;a<=10;a++){
  console.log(a);

*/
var a=0;
while(a<=10){
  a++;
  console.log(a);
}

var user=["ashutosh", "kunta", "kuntash", "ashu"];
for (var a=0;a<user.length;a++){
  console.log(user[a]);
}

var user={
  name:"ashutosh",
  age:23,
  city:"pathari"
}
console.log(user.name);
