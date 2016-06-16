
//looping a triangle
var hash="";
    for (i=0; i <7; i++) {
    hash += "#"
    console.log(hash)
}

//FizzBuzz

for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
  console.log("Fizz");
   }
  if (i % 5 == 0) {
  console.log ("Buzz");
  }
  if (i%3==0 && i%5==0) {
  console.log ("FizzBuzz");
  }
    if (i % 3!==0 && i%5!==0) {
  console.log (i)
 }
}
//ChessBoard
for (var i =0; i < 8; i++) {
    var line = ""
        for(var j =0; j<8; j++) {
    if(i%2===0){

    if(j%2==0){
    line += " " }
    else {
    line +="#" }
    }
    else {
    if (j%2==+0) {

     line += "#"
    }
    else {
    line +=" "
    }
  }
}
console.log (line+"\n")
}

