//console.log('Hello World');

// var myName = 1.2;

// console.log(myName);

// console.log(typeof(myName));

// var myName = 'Vishal';
// console.log(typeof(myName));

// var myName = true;
// console.log(typeof(myName));

//   Chellenge Time

// console.log(typeof(10 + '20'));
// console.log(typeof(9 - '20'));
// console.log("Java" + " Script");
// console.log(" " + " ");
// console.log("Vishal" - "Rathod");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false + false);

// Difference between NUll VS Undefined

// var iamuseless = null;
// console.log(iamuseless);
// console.log(typeof(iamuseless));//Bug

// var iamstandby = undefined;
// console.log(iamstandby);
// console.log(typeof(iamstandby));

//Chellange Time  NaN Number

// var myPhoneNumber = 6353008705;
// var myName = 'Vishal Rathod';

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName))
// {
//     console.log("Please Enter Valid Number :");
// }
// Chellange Time

// NaN === NaN;
// console.log(isNaN(NaN === NaN));

// Expression And Operator

// console.log(5+3);

// Assignment operator

// var x = 5;
// var y = 5;

// console.log("Both Are Equal " + x == y);

// Arithmetic Operator

// console.log(3+3);
// console.log(3-3);
// console.log(3*3);
// console.log(3/3);

// console.log("Remender Operator " + 27%4);

// Increment Or Decrement operator

// Postfix Incement Operator
// var num = 15;

// var newNum = num++;

// console.log(num);
// console.log(newNum);

// Prifix Decrement Operator

// var num = 15;

// var newNum = --num;

// console.log(num);
// console.log(newNum);

// Comperition Operator

// var a = 30;
// var b = 10;

// console.log(a == b);
// console.log(a <= b);
// console.log(a >= b);
// console.log(a != b);

// Logical Operator

// var a = 10;
// var b = -20;

// console.log(a > b);
// console.log(a > b && b > 0) ;
// console.log(a > b || b > 0) ;

//      String Concatination Operator ( + )

// console.log("Hello " + "Vishal");
//  var myName = "Vishal";
//  console.log(myName + " Rathod");

// Chellenge Time

// console.log(3**4);

// console.log(35 + " Vishal");

// var a = 5;
// var b = 10;

// output b = 5 a = 10

// var c = b;
// b = a;
// a = c;
// // b = c;
// console.log("Value A = " + a,"Value B = " + b)

// Value Swap Without Third Variable

// var a = 5;
// var b = 10;
// Output Is A=10 And B=5
// a = a + b;  //15
// b = a - b;  //5
// a = a - b;  //10
// console.log("Value A = " + a,"Value B = " + b);

// Difference Between == VS ===

// var num1 = 5;
// var num2 = '5';

// console.log(num1 === num2);
// console.log(num1 == num2);

// Control Statement And Loops

// If Else

// var tomr = 'sunny';

// if(tomr == 'rain')
// {
//     console.log("Take a RainCoat");
// }
// else
// {
//     console.log("No need Take a RainCoat");
// }

//         // Chellenge Time

// Leap Year
// var year = 2021;
// debugger;
// if(year % 4 === 0)
// {
//     if(year % 100 === 0)
//     {
//         if(year % 400 === 0)
//         {
//             console.log("The Year " + year + " is Leap Year");
//         }
//         else
//         {
//             console.log("The Year " + year + " is Not Leap Year");
//         }
//     }
//     else
//     {
//         console.log("The Year " + year + " is a Leap Year");
//     }
// }
// else
// {
//     console.log("The Year " + year + " is Not Leap Year");
// }.

// var score = 21;
// if (0)
// {
//     console.log("OMG. We Loss The Game");
// }
// else{
//     console.log("yey, We Won thr Game");
// }

// Ternary Operator (Conditional)

// var age = 18;
// console.log((age>=18) ? "You Are ALIGIBLE":"You are NOT ALIGIBLE");

// elseif Statement

// var day = "thursday";

// if (day == "monday")
// {
//         console.log("yey, Today Is Monday");
// }
// else if(day == "tuesday")
// {
//         console.log("yey, Today Is Tuesday");
// }
// else if(day == "wednesday")
// {
//         console.log("yey, Today Is Wednesday");
// }
// else if(day == "thursday")
// {
//         console.log("yey, Today Is Thursday");
// }
// else if(day == "friday")
// {
//         console.log("yey, Today Is Friday");
// }
// else if(day == "saturday")
// {
//         console.log("yey, Today Is Saturday");
// }
// else
// {
//         console.log("yey, Today Is Other Day");
// }

// Switch Case Statement

// Find Day Name In switch case Statement

// var day = 'bhbhbh';
// switch(day)
// {
//         case 'monday':
//                 console.log("yey, Today Is Monday");
//                 break;
//         case 'tuesday':
//                 console.log("yey, Today Is Tuesday");
//                 break;
//         case 'wednesday':
//                 console.log("yey, Today Is wednesday");
//                 break;
//         case 'thursday':
//                 console.log("yey, Today Is thursday");
//                 break;
//         case 'friday':
//                 console.log("yey, Today Is friday");
//                 break;
//         case 'saturday':
//                 console.log("yey, Today Is saturday");
//                 break;
//         case 'sanday':
//                 console.log("yey, Today Is sanday");
//                 break;
//         default :
//                 console.log("yey, Today Is Other Day");
//                 break;
// }

// while loop statement

// var num = 0;

// while(num <= 10)
// {
//         console.log(num);
//         num++;
// }

// Do while loop Statement

// var num = 10;
// debugger;
// do{
//         console.log(num);
//         num++;
// }while(num <= 0);

// For Loop Statement

// for(var num=0; num <= 10; num++)
// {
//         console.log(num);
// }

// Challenge Time

// for(var num=1; num <= 10; num++)
// {
//         var tableOf = 9;
//         console.log(tableOf + " * " + num + " = " + tableOf * num );
// }

// Functions With Javascript

// function sum()
// {
// Statement
// }
// var a = 4;
// var b = 5;                   That is Simple
// var sum = a+b;
// console.log(sum);

// function sum()
// {
//         var a = 10;
//         var b = 11;          //That Is Function Defination/defind
//         var total = a+b;
//         // return total;
//         console.log(total);
// }

// sum();

// Function Parameters   VS Function  argument

// function sum(a,b)
// {
//         var total = a+b;
//         console.log(total);
// }
// sum();
// sum(20,30);
// sum(50,50);

// Function Expretion
// function sum(a,b)
// {
//         var total = a+b;
//         console.log(total);
// }
// var FunExp = sum(5,2);
// FunExp;

// Return Statement Keyword
// function sum(a,b){
//         return total = a+b
// }
// var FunExp = sum(5,2);
// console.log('the sum of two number is ' + FunExp);

// Anonymous Function

// Anonymos Function Expretion

// var FunExp = function sum(a,b){
//         return total = a+b
// }

// var sum = FunExp(5,15);

// console.log('the sum of two number is ' + sum);

// Features of ECMAScript 2015 also known As ES6 😍😍

// Feratures One [1]

// LET VS CONST VS VAR

// const myName = 'vishal rathod';
// console.log(myName);
// Const Variable
// myName = "VGRcoder";
// console.log(myName);

// let myName = 'vishal rathod';
// console.log(myName);

// myName = "VGRcoder";
// console.log(myName);

// const myName = 'vishal rathod';
// console.log(myName);

// myName = "VGRcoder";
// console.log(myName);

// var ==> Function Scope
// let and const ==> Block Scope

// function biodata (){
//         const myFirstName = 'Vishal';
//         console.log(myFirstName);
//         if(true)
//         {
//                 const myLastName = 'Rathod';
//                 console.log('inner ' + myFirstName);
//                 console.log('inner ' + myLastName);
//         }
//         console.log('InnerOuter ' + myLastName);
// }

// biodata();

// Feture Of Two In ES6 [2]

// Template Literal (Temolate String)    [2]

// for(let num = 1; num <= 10; num++)
// {
//         let tableOf = 8;
//         console.log(`${tableOf} * ${num} = ${num*tableOf}`);
// }

// [3]

// Feture Of ES6 Default Parameters [3]

// function mult(a,b="5")  //Default Perameters on ES6
// {
//         return a * b;
// }
// console.log(mult(5));

// [6]
// Fat Arrow Function

// console.log(sum());
//                                 That Is Normal Function
// function sum() {
//         let a = 5; b = 6;
//         let sum = a + b;

//         return `The Sum Of The Two Number Is ${sum}`;
// }
// console.log(sum());

// How to convert in into fat arrow Function

// const sub = ( ) => {
// let a = 10, b = 8;
// return a-b;
// }
// console.log(sub());

// const sum = ( ) =>{
//         let a = 5; b = 6;
// }
// console.log(sum());

// const sum = ( ) => {
//         return (a = 10) + (b = 20);
// }
// console.log(sum());

// const sum = ( ) => `The Sum Of ${(a = 10) + (b = 20)}`;

// console.log(sum());

// Array In Javascript

// Array Subsection 1 Traversal In Array

// var myFriends = ['Vishu', 'Dhaval', 'Vivek', 'Sahil'];

// console.log(myFriends[3]);

// if we want to check the length of Element of an Array

// console.log(myFriends.length);

// console.log(myFriends[myFriends.length -1 ]);

// for in loop in javascript

// var myFriends = ['Vishu', 'Dhaval', 'Vivek', 'Sahil'];

// for (var i=0; i<myFriends.length; i++){
//         console.log(myFriends[i]);
// }

// var myFriends = ['Vishu', 'Dhaval', 'Vivek', 'Sahil'];

// for(let Elements in myFriends){
//         console.log(Elements);
// }

// For Of Loop In Javascript

// var myFriends = ['Vishu', 'Dhaval', 'Vivek', 'Sahil'];

// for(let Elements of myFriends){
//         console.log(Elements);
// }

// for each loop in javascript

// Normal Function Used to For Each Loop

// var myFriends = ['Vishu', 'Dhaval', 'Vivek', 'Sahil'];

// myFriends.forEach(function(Element, Index, Array){
//         console.log(`Element ${Element} Index ${Index} Array ${Array}`);
// });

// Fat Arrow Function Used to For Each Loop

// myFriends.forEach((Element, Index, Array) => {
//         console.log(`Element ${Element} Index ${Index} Array ${Array}`);
// });

// Array SubSection 4 Perform CRUD

// Array.prototype.push()

// const animals = ['Pig', 'Goats', 'Sheep'];

// const count = animals.push('Chicken');

// console.log(count)

// animals.push ('Chicken', 'Cats', 'Dog');
// console.log(animals)

// Array UnShift

// Array.prototype.unshift()

// animals.unshift('Chicken');
// console.log(animals);

// animals.unshift ('Chicken', 'Cats', 'Dog');
// console.log(animals)

// Secound Example

// const myNumbers = [1,2,3,5];
// myNumbers.unshift(4,6)
// console.log(myNumbers);

// Array POP Method in JavaScript

// Array.prototype.pop

// const plants = ['broccoli', 'cauliflower','kale', 'tomato', 'cabbage'];
// console.log(plants.length);
// console.log(plants.pop());
// console.log(plants.length);

// Array Shift Method in JavaScript

// Array.prototype.shift

// const plants = ['broccoli', 'cauliflower','kale', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

// Chellenge Time

// 1 :- Add Dec At The End Of an Array ?
// 2 :- What is The Retuen Value of Splic Method ?
// 3 :- Update march To March (Update) ?
// 4 :- Delete June From An Array?

// const month = ["Jan", "march", "April", "June", "July"];

// Sol 1 :-

// const newMonth = month.splice(month.length, 0, "Dec");
// console.log(month);

// Sol 2 :-
// const newMonth = month.splice(month.length, 0, "Dec");
// console.log(newMonth);

// Sol 3 :-
// const updateMonth = month.splice(1,1,"March");
// console.log(month);

// const month = ["Jan", "march", "April", "June", "July"];

// const indexOfMonth = month.indexOf("June");

// if (indexOfMonth != -1) {
//   const removeMonth = month.splice(indexOfMonth, 1);
//   console.log(month);
//   console.log(removeMonth);
// } else {
//   console.log("No Such Data Found");
// }

//Array Subsection 4 Map(), Reduce(), And Filter()

// Array.prototype.map()

// const array1 = [1, 4, 9, 16, 25];

// let newArr = array1.map((curEle, index) => {
//   return `Index Of ${index} And The Value Of ${curEle}`;
// });
// console.log(newArr);

// let newArrfor = array1.forEach((curEle, index) => {
//   return `Index Of ${index} And The Value Of ${curEle}`;
// });
// console.log(newArrfor);

//                                              🏁 Chellenge Time 🏁

// 1 :- Find The Squre root of each element in an Array
// 2 :- Multiply each element  by 2 and return only those element which are greter then 10

// sol 1
// let arr = [25, 36, 49, 64, 81];

// let arrSqr = arr.map((curEle) => Math.sqrt(curEle));
// console.log(arrSqr);

// sol 2
// let arr = [2, 3, 4, 6, 8];

// let arr2 = arr
//   .map((curEle) => {
//     return curEle * 2;
//   })
// .filter((curEle) => {
//   return curEle > 10;
// })
// .reduce((accumulator, curEle, index, arr) => {
//   return (accumulator += curEle);
// });

// console.log(arr2);

// Reduce() Method 🙌🖐

// Flatten An Array Meance to Convert the 3d or 2d Array into a Single Dimensional Array

// let arr = [5, 6, 2];

// let sum = arr.reduce((accumulator, curEle, index, arr) => {
//   return (accumulator += curEle);
// },7);
// console.log(sum);

//How to Convert 2D And 3D Array to Single Dimentional Array

// const arr = [
//   ["One", "Two", "Three"],
//   ["Four", "Five", "Six"],
//   ["Seven", "Eight", "Nine"],
//   ["Ten", "Eleven", "Tweale"],
// ];

// let flatArr = arr.reduce((accumulator, curEle, index, arr) => {
//   return accumulator.concat(curEle);
// });
// console.log(flatArr);

// 🙌🖐String In Javascript

// let myName = "Vishal";
// let surName = "Rathod";

// let ytName = new String("VGRcoder");

// console.log(myName);
// console.log(ytName);

// How to Find String length🖐🙌

// let myName = "Vishal Rathod";
// console.log(myName.length);

// Escape Charecters
// let anySentence = 'We are the so-called "Viking" From yhe North.';
// let anySentence1 = 'We are the so-called "Viking" From yhe North.';

// console.log(anySentence);
// console.log(anySentence1);

// How To Find String In A String

// const myBioData = "I'm Vishal Rathod";

// let sData = myBioData.search("Rathod");
// console.log(sData);

// Extrecting String parseInt 🙌🖐

// There Are Three Methods for Extrecting a part of a String :

// slice(start, end);
// substring(start, end);
// substr(start, length);

// var str = "Apple, Banana, Kiwi, Mango";

// let res = str.slice(7);

// console.log(res);

// Chelllenge Time 🙌🖐

// Display Only 280 Charector of a string like the One used in Twitter ?

// let myTweets =
//   "Lorem Ipsum is Simply dummy text of the printing and any text ever since the 1500s, when an unknown printter took a gallary Twitter users tweet about a mild (4.4 on the Richter scale) earthquake in California. The event helps Twitter's team see the potential of Twitter as a way for many people to contribute to the reporting of a live event, each from his or her own vantage point.Twitter announces the closure of its second funding round, welcoming new investors Bijan Sabet of Spark Capital and Jeff Bezos of Bezos Expeditions. Existing partners Union Square Ventures and Digital Garage also invest more while they were away, rather than simply showing a reverse chronological feed. Other features announced include better video capability and the";

// let myActualTweet = myTweets.slice(0, 280);

// console.log(myActualTweet.length);

// SubString Method 🖐🙌

// var str = "Banana, Appale, Mango, Kiwi";

// let res = str.substring(7, -2);

// console.log(res);

// SubStr Method 🙌🖐
// var str = "Banana, Appale, Mango, Kiwi";

// let res = str.substr(0, -4);

// let res = str.substr(-4);
// console.log(res);

// Replacing String Content()

// String.prototype.replace(SearchFor, replaceWith);

// let myBioData = "I'm Vishal G Rathod";

// let replaceData = myBioData.replace("Vishal", "vishal");

// console.log(replaceData);

//Lucky Drow Mini Game

// let str = "qazwsxedcrfvtgbyhnujmikolp";

// console.log(str.charAt(7));

// charCodeAt() method mince Asci Value Of A Charecter

// let str = "HELLOW WORLD";

// console.log(str.charCodeAt(0));

// Chellenge Time

// Return The Unicode of the last Charecter in a String

// let str = "HELLOW WORLD";

// console.log(str.charCodeAt(str.length - 1));

// Other UseFull Method

// toUpperCase(); Method
// toLowerCase(); Method

// let fName = "Vishal";
// let lName = "Rathod";

// console.log(fName.toUpperCase());
// console.log(fName.toLowerCase());
// console.log(fName.concat(" ", lName));

// String.trim() method

// let vgr = "            Vishal Rathod         ";

// console.log(vgr.trim());

// Spilt() Method

// let vgr = "v.i.s.h.a.l";
// console.log(vgr.split("."));

// Date Function In JavaScript 🙌🖐🏁

// new Date();

// new Date(year, month, day, hour, minuets, secound, millisecound);

// new Date(date String);

//------------------------------------------------------------------------------------------------

// let curDate = new Date();
// console.log(curDate);

// console.log(Date());

// console.log(new Date().toLocaleString());

// console.log(Date().toString());

// console.log(Date.now());

// let v = new Date(2022, 0, 03, 06, 33, 30, 57);
// console.log(v);
// console.log(v.toLocaleString());

// var d = new Date("June 15, 2004 12:12:00");
// console.log(d.toLocaleString());

// var d = new Date(0);
// console.log(d.toString());
// var d = new Date(1673155413194);
// console.log(d.toString());
// var d = new Date(86400000 * 2);
// console.log(d.toString());

// Date Method In JavaScript

// GetMethod

// const curDate = new Date();

// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// Set Method

// let curDate = new Date();

// console.log(curDate.toLocaleString());
// console.log(curDate.setFullYear(2022));
// console.log(curDate.setMonth(0));
// console.log(curDate.setDate(8));

// Time Method In JavaScript

// Get Method

// const curTime = new Date();

// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// Set Method

// let curTime = new Date();

// // console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(24));
// console.log(curTime.setSeconds(50));
// console.log(curTime.setMilliseconds(544));

// Math Object In JavaScript 🖐🏁🙌

// console.log(Math.PI);

// let num = 10.578;
// console.log(Math.round(num));

// console.log(Math.pow(2, 3));
// console.log(2 ** 3);

// console.log(Math.sqrt(49));

// console.log(Math.abs(-1));

// console.log(Math.abs(4));

// console.log(Math.ceil(66.1));

// console.log(Math.floor(4.1));

// console.log(Math.min(11, 12, 13, 14, 15));

// console.log(Math.max(11, 12, 13, 14, 15));

// console.log(Math.floor(Math.random() * 10));

// console.log(Math.trunc(-4));

// console.log(Date(1673272915729));

// *************Events In JS*****************

// 4 Way Of Event
// What Is Event Object (onclik.html)
// Moush Event Object (mouse.html)
// KeyBoard Event Object (KeyBord.html)
// InputEvent in JavaScript (input.html)


// setInterval
// setTimeout
// clearInterval
// clearInterval

// JavaScript in OOPs Concept :-

// what is object literal?

// How to create an Object in JavaScript

// let biodata = {
//     myName: {
//         realName : "Vishal",
//         chennelName : "ADVcode"
//     },
//     getData: function () {
//         console.log(`My Name is ${biodata.myName} And My Age is ${biodata.myAge}`);
//     }
// }
// console.log(biodata.myName.chennelName);
// console.log(biodata.myAge);
// console.log(biodata.getData());

// what is 'this' Keyword

// var myName = 'VGR';
// function myNameFunc(){
//     console.log(this.myName);
// }
// myNameFunc();


// const obj = {
//     myAge : 18,
//     myName(){
//         console.log(this.myAge);
//     }
// }
// obj.myName();

//  Fat Arrow Function use

// const obj = {
//     myAge : 18,
//     myName : () => {
//         console.log(this.myAge);
//     }
// }
// obj.myName();

// let biodata = {
//     myName : {
//         realName : 'VGR',
//         chennalName : 'ADV',
//     },
//     myAge : 18,
//     getData()
//     {
//         console.log(`My Name is ${this.myName.chennalName} And my Age is ${this.myAge}`);
//     }

// }
// biodata.getData();

// let myName = "Vishal";
// const myBioData = {
//     [myName] : "Hello how are you ",
//     26 : "is my Age"
// }

// console.log(myBioData);


// let myName = "Vishal";
// let myAge = 18;

// const biodata = 
// {
//     myName,
//     myAge
// }
// console.log(biodata);


// Sepread Operator

// const color = ['red', 'Green', 'Blue', 'Black'];
// const myColor = [...color, 'Orange', 'cyne', 'Yellow', ];

// console.log(color);
// console.log(myColor);


// ES2018

// let name = "Vishal";
// name.padStart(5);
// console.log(name);
// let myname = "Vishal".padStart(8);
// console.log(myname);
// let myAge = "18    ...".padEnd(10);
// console.log(myAge);

const person = {
    name : "Vishal",
    age : 18,
    city : "Jamnagar"
}

const sPerson = { ...person };
console.log(Object.values(person));
console.log(Object.values(sPerson));
// console.log(Object.entries(sPerson));

// ES2019

const arr = [
    ['Z_1','Z_2'],
    ['Z_1','Z_2'],
    ['Z_1','Z_2'],
    ['Z_1','Z_2'],
    ['Z_1','Z_2'],
]