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
// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

// console.log(fruits)
// Map Methode,,,,,,,,,,,,,,,,,,,,,,,,,

// Regular Expression-----kono kichu search ba khuje ber korte use kora hoy ..............................
// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");

// console.log(text)
// Regular Expression-----kono kichu search ba khuje ber korte use kora hoy ..............................

// JavaScript Errors solve......................
//  try {
//     adddlert("Welcome guest!");
//   }
//   catch(err) {
//     document.getElementById("demo").innerHTML = err.message;
//   }
// JavaScript Errors solve......................

// JavaScript Scope............................
// function myFunction() {
//     let carName = "Volvo";   // Function Scope
//   }
// JavaScript Scope............................

// JavaScript this Keyword.........................
// const person1 = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }

//   const person2 = {
//     firstName:"John",
//     lastName: "Doe",
//   }

//   // Return "John Doe":
// console.log(person1.fullName.call(person2))
// JavaScript this Keyword.........................

// JavaScript Classes....................
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   play(status) {
//     console.log(`${this.name} is playing ${status}`);
//   }
// }

// const person1 = new Person("Shakib", 23);
// const person2 = new Person("Shanto", 24);

// person1.play("bad");
// person2.play("good");
// JavaScript Classes....................

// Debugging.....................
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     // debugger;
//     this.age = age;
//   }
//   play(status) {
//     console.log(`${this.name} is playing ${status}`);
//   }
// }

// const person1 = new Person("Shakib", 23);
// const person2 = new Person("Shanto", 24);

// // debugger;
// person1.play("Bad");
// person2.play("good");
// Debugging.....................

// ................................................................................................
// .....................................Problem Solve 2............................................
// ................................................................................................
// Question=  "শান্ত" শব্দটি কতবার ব্যবহার হয়েছে? ""শান্ত" শব্দটি কত নম্বর অবস্থানে পাওয়া গেছে?

// const description = "A shanto an individual or a team that creates, designs, builds, and maintains computer software or applications. They use programming languages, frameworks, tools, and shanto technologies to write code and develop software solutions for various computer systems like personal computers, shanto, embedded systems, and more.";

// const matches = description.match(/shanto/gi);
// const occurances = matches ? matches.length : 0;

// console.log(occurances);

// let position = description.search(/shanto/i);
// position = position >= 0 ? position : "not found";

// console.log(position);
// ................................................................................................
// .....................................Problem Solve 2............................................
// ................................................................................................

// ................................................................................................
// .....................................Problem Solve 3............................................
// ................................................................................................
// input  linearsearch(["a", "b", "c", "d"], "c")
// output 2 or not found.
// probleam linearsearch() funtion ti implement kore dekhan"?

// function linearSearch(arr, val) {
//     const length = arr.length;

//     for (let i = 0; i <length; i++) {
//         if(arr[i] === val) {
//           return i;
//         }
//     }

//     return "not fount";
// }

// console.log(linearSearch(["a", "b", "c", "d"], "c"));

// ................................................................................................
// .....................................Problem Solve 3............................................
// ................................................................................................

// ................................................................................................
// .....................................Problem Solve 4............................................
// ................................................................................................
// kono array theke kivabe sobtheke boro string khuje ber korben and tar index number koto ta dekhaben?

// function longestString(names) {
//     let longestWord = "";

//     for(name of names) {
//         if(name.length > longestWord.length) {
//             longestWord = name;
//         }
//     }

//     return [longestWord, names.indexOf(longestWord)];

// }

// console.log(longestString(["Khandaker Shanto", "Khandaker Fozle Rabby", "Robi", "Saif", "Siyam"]));
// ................................................................................................
// .....................................Problem Solve 4............................................
// ................................................................................................

// ................................................................................................
// .....................................Problem Solve 5............................................
// ................................................................................................
// 1 - 100 porjonto kon shongkhagulo 3 , 5 and 3, 5 uvhoy shongkha dara bivajjo ta ber korun?
// function fizzBuzz(number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 15 === 0) {
//       console.log(`${i} is FizzBuzz`);
//     } else if (i % 3 === 0) {
//       console.log(`${i} is Fizz`);
//     } else if (i % 5 === 0) {
//       console.log(`${i} is Buzz`);
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(100);
// ................................................................................................
// .....................................Problem Solve 5............................................
// ................................................................................................


// ................................................................................................
// .....................................Problem Solve 6............................................
// ................................................................................................
// Array theke falsey value kivabe bad dite parii?..

// const mixedArr = [
//   "lws",
//   undefined,
//   "learn with shanto",
//   false,
//   "",
//   "apple",
//   40,
//   true,
//   "Thanks all",
//   NaN
// ]

// const trueArray = mixedArr.filter(function(el) {
//    if(el) {
//     return true;
//    } else {
//     return false;
//    }
// });

// console.log(trueArray);

// Another way........

// const mixedArr = [
//   "lws",
//   undefined,
//   "learn with shanto",
//   false,
//   "",
//   "apple",
//   40,
//   true,
//   "Thanks all",
//   NaN
// ]

// const trueArray = mixedArr.filter(Boolean);
// console.log(trueArray);

// ................................................................................................
// .....................................Problem Solve 6............................................
// ................................................................................................

// ................................................................................................
// .....................................Problem Solve 7............................................
// ................................................................................................
// Object theke falsey value kivabe bad dite parii?..
const obj = {
  a: "lws",
  b: undefined,
  c: "learn with shanto",
  d: false,
  e: "",
  f: "apple",
  g: 40,
  h: true,
  i: "Thanks all",
  j: NaN,
}

const truthyObject = function(obj) {
    for(let i in obj) {
      if(!obj[i]) {
        delete obj[i];
      }
    }

    return obj;
}
console.log(truthyObject(obj));

// ................................................................................................
// .....................................Problem Solve 7............................................
// ................................................................................................
