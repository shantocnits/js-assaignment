// .....................................................
// ...................this Keyword.......................
// .....................................................
// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     id : 5566,
//     fullName : function() {
//         return this.firstName + " " + this.lastName;
//     }
//   };

//   console.log(person.fullName());

//   Another way..

// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     id : 5566,

//   };

//   person.fullName = function() {
//     return this.firstName + " " + this.lastName;
// }

//   console.log(person.fullName());

// .....................................................
// ...................this Keyword.......................
// .....................................................

// ...................................................................................................
// ...................Built in function jekono jaygay use kora jay= toUpperCase.......................
// ...................................................................................................
// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     id : 5566,

//   };

//   person.fullName = function() {
//     return (this.firstName + " " + this.lastName).toUpperCase();
// }

//   console.log(person.fullName());
// ...................................................................................................
// ...................Built in function jekono jaygay use kora jay= toUpperCase.......................
// ...................................................................................................

// ........................................................
// ...................Object display.......................
// ........................................................
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Display Properties
// document.getElementById("objecrDisplay").innerHTML =
// person.name + "," + person.age + "," + person.city;

// ...........Another...............

// const person2 = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Stringify Object
// let myString = JSON.stringify(person2);

// // Display String
// document.getElementById("objecrDisplay2").innerHTML = myString;
// ........................................................
// ...................Object display.......................
// ........................................................

// ........................................................
// ...................JavaScript Accessors......................
// ........................................................
// const Accessors = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   get lang() {
//     return this.language;
//   }
// };

// // Display data from the object using a getter:
// document.getElementById("demo").innerHTML = Accessors.lang;

// ,,,,,,,,,,,,,,,,,,,,,,

// const Accessors2 = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "",
//   set lang(lang) {
//     this.language = lang;
//   }
// };

// // Set an object property using a setter:
// Accessors2.lang = "en";

// // Display data from the object:
// document.getElementById("demo").innerHTML = Accessors2.language;
// ........................................................
// ...................JavaScript Accessors......................
// ........................................................

// .......................................................................
// ...................Object Constructor Functions......................
// .......................................................................
// function Person(first, last, age) {
//   //funtion name boro hater likhte hoy (Person)...
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.fullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }

// const Shanto = new Person("Khandaker", "Shanto", 23);
// const Siyam = new Person("Md", "Siyam", 20);
// const Robi = new Person("Md", "Robi", 24);

// Shanto.cuntry = "Bangladesh";  //extra property,valu add..

// console.log(Shanto);
// .......................................................................
// ...................Object Constructor Functions......................
// .......................................................................


// .......................................................................
// ...................JavaScript Object Prototypes......................
// .......................................................................
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const Shanto = new Person("Khandaker", "Shanto", 23);
const Siyam = new Person("Md", "Siyam", 20);
const Robi = new Person("Md", "Robi", 24);

Person.prototype.country = `Bangladesh`;  //extra property,valu add..

console.dir(Person);
console.log(Siyam.country);
// .......................................................................
// ...................JavaScript Object Prototypes......................
// .......................................................................
