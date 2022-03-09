//TASK 1:
//print hello world
console.log("hello world")


//Declare four variables without assigning values and print them in console
var a;console.log(a);
var b;console.log(b);
var c;console.log(c);
var d;console.log(d);


//How to get value of the variable myvar as output
var myvar= 1;
console.log("myvar");


//Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstname="jonathan";
var lastname="p";
var maritalstatus="single";
var country="india"
var age="26";


//Declare variables to store your first name, last name, marital status, country and age in a single line
var person = { firstname: "jonathan", lastname: "p", maritalstatus: "single", country: "india", age: "26" }


//Declare variables and assign string, boolean, undefined and null data types
var hello = ("hello");
var tr = true;
var undef = undefined;
var nul = null;
console.log(typeof(hello));
console.log(typeof(tr));
console.log(typeof(undef));
console.log(typeof(nul));


//Convert the string to integer
var int = "10";
console.log(parseInt(int));

var int2 = "2";
console.log(+int2);

var int3 = "5";
console.log(Number(int3));


//Write 6 statement which provide truthy & falsey values.
console.log(5 != 10);
console.log(5 != 5);
console.log(5 >= 4);
console.log(5 <= 4);
console.log(8 === 8);
console.log(8 === 9);


//TASK 2:
//Square of a number
var squ = Math.pow(5, 2);
var squ2 = Math.pow(8, 2);
console.log(squ, squ2);


//Swapping 2 numbers
var a3 = 5;
var b3 = 10;
[a3, b3] = [b3, a3];
console.log(a3);
console.log(b3);


//Addition of 3 numbers
var a2 = 5;
var b2 = 6;
var c2 = 8;
console.log(a2 + b2 + c2);


//Celsius to Fahrenheit conversion
var c = 23;
const f = (c * 1.8) + 32;
console.log(f);


//Meter to miles
var meter = 5;
const miles = 0.000621;
console.log(meter * miles);


//Pounds to kg
const kg = 2.2046;
var pounds = 50;
console.log(pounds / kg);


//Calculate Batting Average
let runs = 2500;
let innings = 82;
const batAve = (runs / innings);
console.log(batAve);


//Calculate five test scores and print their average
var aaa = 175;
var bbb = 198;
var ccc = 145;
var ddd = 112;
var eee = 248;
const average = ((aaa + bbb + ccc + ddd + eee) / 5);
console.log(average);


//Power of any number x ^ y
var aa = 8;
var bb = 4;
var cc = Math.pow(a, b);
console.log(c);


//Volume Of Sphere
let radius = 10;
let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
console.log('Volume of Sphere: ' + volume.toFixed(2));


//Volume Of Prism
let h = 8;
let l = 4;
let w = 7;
const vol = l * w * h
console.log(vol);


//Find area of a triangle.
let bottom = 10;
let right = 12;
let left = 12;
const s = (bottom + right + left) / 2;
const areaVal = Math.sqrt(s * (s - bottom) * (s - right) * (s - left));
console.log(areaVal);


//Program To Calculate CGPA
let eng = 9.1;
let tamil = 8.5;
let maths = 9.5; 
let science =9.6;  
let social = 8.6;  
const CGPA = (9.1 + 8.5 + 9.5 + 9.6 + 8.6) / (5.0);
console.log(CGPA);


//Task 3
//write a code to count the elements in the array
var array = [10, 20, 30, 40, 50, 60];
console.log(array.length);


//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let food = ["rice", "chicken", "biriyani", "dosai", "prawn", "parotta", "chappati", "milkshake", "juice", "meat", "poori", "idly", "samosa", "egg", "fish", "atho", "mushroom", "mutton", "noodles", "dhal"];


//Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
let foods = ["rice", "chicken", "biriyani", "dosai", "prawn", "parotta", "chappati", "milkshake", "juice", "meat", "poori", "idly", "samosa", "egg", "fish", "atho", "mushroom", "mutton", "noodles", "dhal"];
console.log(foods[4]);


//Find the length of your foods array
let arrFood = ["rice", "chicken", "biriyani", "dosai", "prawn", "parotta", "chappati", "milkshake", "juice", "meat", "poori", "idly", "samosa", "egg", "fish", "atho", "mushroom", "mutton", "noodles", "dhal"];
console.log(arrFood.length);
