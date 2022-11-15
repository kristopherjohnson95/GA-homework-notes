/* 
  Some specific vocabulary used with arrays and loops:

  index - the numbered position of each item in the array, starting at 0
  iterate - to access each item in an array one by one
  bracket notation - the syntax that uses square brackets to access a specific item by its index
*/



// Exercise 1 - length

let theAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Write a function called alphabetLength that takes one array as a parameter and returns the length of that array 

function alphabetLength(oscarTheGrouch){
  return oscarTheGrouch.length;
}


// Print your answer to the dom
document.querySelector("#exercise-one").textContent = alphabetLength(theAlphabet); 



// Exercise 2 - push and pop

// Create a planets array that has nine string values in it
let solar=['mercury','venus','earth','mars','jupitar','uranus','saturn','neptune','pluto'];

// Remove the last planet from the array (sorry Pluto)
solar.pop()
// Add a new planet to the end of the array
solar.push('gallifrey');

// Print your new array to the dom
document.querySelector("#exercise-two").innertext= solar.join (",")

// Exercise 3 - for loop

let snacks = ["candy", "popcorn", "potato chips", "fruit", "nuts"];

// Create a for loop that prints each snack item to the console along with its index (ex: "3. fruit")

for (i=o;i<snacks.length;i++){
  console.log (i + "," + snacks [i]);
}


// Bonus - use string interpolation or a "template string" to print your string to the console (google it)
// Ex: `Notice the backticks instead of quotes. This is string interpolation syntax with a ${variable}`




// Exercise 4 - for loop with a conditional

// Create a for loop that iterates over the snack array, but only prints "My favorite snack is (your favorite snack)" to the dom

for(let i=0; <snacks.length; i++){

  //when the snacks 
}


// Exercise 5 - for loop with new dom elements

const pets = ["cat", "dog", "iguana", "guinea pig", "rabbit", "hedge hog", "parakeet"]

// Create a for loop that creates and prints a new li for each item in the pet array

for (let i=0<pets. length; i++){

  // create list item
let  newli = document.createElement('li');

//set the text of the list item

newli.innerText =pets [i];


//Target the my list of pets

document.queryselector ("#exercise")
// Append list item to list of pets
}

