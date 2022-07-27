function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4);
    
   for (i = 1; i < 1000000; i++) {
    if(!A.includes(i)) return i;
  }
}

console.log(solution([-1, -3]));
/////////////////////////////////////////
console.log(0.1 + 0.2);
console.log(0.1 + 0.2==0.3);
//////////////////////////////////////////
for (let i = 0; i <= 1; i++) {
  let x = 1;
  console.log(x);
}
console.log(x);

//////////////////////////////////////////

var car= new Vehicle("Honda","White","2010","UK")

console.log(car);

function Vehicle(model, color, year, country){
  this.model=model;
  this.color=color;
  this.year=year;
  this.country=country;
}



////////////////////////////////////////