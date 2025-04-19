// Comparisons.....................

// let age = "18";
// let voteable; // Declare the variable

// age = Number(age);

// if (isNaN(age)) {
//   console.log("Input is not a number");
// } else {
//   console.log(age < 33 ? "Too young" : "Old enough");
// }

// Comparisons.....................

// Conditions ..........................
// let age = 18;
// let voteable;

// age = Number(age);

// if (age < 18) {
//   console.log("You are young");
// } else if (age == 18) {
//   console.log("You are now adult");
// } else if (age > 18 && age < 30) {
//   console.log("You are matured!");
// } else {
//   console.log("You are old");
// }
// Conditions ..........................

// Switch...............................
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }
// Switch...............................

// Switch strict...............................
// let x = "0";
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
// Switch strict...............................

// loop 5 type  -  1.foe loop, 2.for/in ,  3.for/in,  4.while,  5.do/while

// for loop .........................
// const cars = ["a", "b", "c", "d", "e"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(i);
// }

// console.log("I am done");
// for loop .........................

// for loop .........................
// const cars = ["a", "b", "c", "d", "e"];

// let i = 0;
// for (; ; i++) {
//   if (i > 10) {
//     break;
//   } else {
//     console.log(i);
//   }
// }

// console.log("I am done");
// for loop .........................

// for loop var .........................
// var i = 5;

// for (var i = 0; i < 10; i++) {
//   console.log(i)
// }

// console.log("this is", i)

// for loop .........................

// for loop let .........................
// let i = 5;

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// console.log("this is ", i)

// for loop let.........................

//....................................................................

// for in loop..............
// const person = {fname:"John", lname:"Doe", age:25};

// for (let x in person) {
//   console.log(person[x]);
// }
// for in loop..............

// for in loop array..............
// const numbers = [45, 4, 9, 16, 25];

// for (let number in numbers) {
//   console.log(numbers[number])
// }
// for in loop array..............

// for of loop array..............
// const a = [ 6, 4, 7, 8, 10];

// for (let x of a) {
//   console.log(x);
// }
// for of loop array..............

// jokhon kono object er vitor diye loop korte hoy tokhon (for in loop) use korte hobe...
// jokhon kono Array er vitor diye loop korte hoy tokhon (for of loop) use korte hobe...

// Do/while loop......
// let i = 0;
// let text = "";

// while (i < 10) {
//   text += "The number is " + i;
//   i++;
// }

// console.log(text);

// ...do 
// let i = 10;
// let text = "";

// do {
//   text += "The number is " + i;
//   i++;
// } while (i < 10);

// console.log(text);
// Do/while loop......



// Break........................................
// for (let i = 0; i < 10; i++) {
//     if (i === 3) { break; }
//     text += "The number is " + i + "<br>";
//   }
// Break........................................

// Set Methode,,,,,,,,,,,,,,,,,,,,,,,,,
// Create a Set
// const letters = new Set(["a","b","c"]);

// // List all entries
// let text = "";
// letters.forEach (function(value) {
//   text += value;
// })

// console.log(text);
// Set Methode,,,,,,,,,,,,,,,,,,,,,,,,,

// Map Methode,,,,,,,,,,,,,,,,,,,,,,,,,
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits)
// Map Methode,,,,,,,,,,,,,,,,,,,,,,,,,
