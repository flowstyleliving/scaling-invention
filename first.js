//global scope
var hi = "what's up?";
var bye = "see ya!"
//
// boolean = true || false
// number = 1
// string = "hi"
var array = ['orange', 'apple', 'banana', 'kiwi'];
// object = {
//   property: {1},
//   property2: {2}
// }
// [0, 1, 2, 3, 4] ; 5 elements; 0-4 index
var rand = function() {
  result = Math.floor(Math.random() * 5 + 1);
  console.log(result);
  return result;
}

// select fruit for person
var saying = function() {
  num = rand();
  if(num === 1) {
      console.log("Sally likes " + array[0]);
  } else if(num === 2) {
      console.log("Mike likes " + array[1]);
  } else if(num === 3) {
      console.log("Paul likes " + array[2]);
  } else if(num === 4) {
      console.log("Alisha likes " + array[3]);
  } else {
      console.log("Kids like fruits!");
  }
}




// var demo = function() {
// document.getElementById("demo").innerHTML = rand;
// }
