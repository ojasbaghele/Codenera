//! String  ----

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
let part = text.slice(7, 13);
let subStr = text.substring(3, 18);
let newText = text.replace("ABCD", "DCBA");
let text2upp = text.toUpperCase();
let text2low = text.toLowerCase();
let concat = text.concat(" ", text2low);
let trim = concat.trim();
let char = text.charAt(1);
let split =text.split(" ");

//? String Output ----

document.write(`<h2> String </h2>`);
document.write(`String  is : ${text} <br>`);
document.write(`Lenght is : ${length} <br>`);
document.write(`Slice is : ${part} <br>`);
document.write(`SubString is : ${subStr} <br>`);
document.write(`New Text (replace) is : ${newText} <br>`);
document.write(`Lower Case is : ${text2low} <br>`);
document.write(`Upper Case is : ${text2upp} <br>`);
document.write(`Concat is : ${concat} <br>`);
document.write(`Trim of concat is : ${trim} <br>`);
document.write(`Char is : ${char} <br>`);
document.write(`Split of concat is : ${split} <br>`);


//! Array  ----

let cars = ["AMG", "Volvo", "BMW"];
let pust = cars.push("GTR");
let objLength =cars.length;

document.write(`<h2> Array </h2>`);
document.write(`Array is : ${cars} <br>`);
document.write(`Type of is : ${typeof(cars)} <br>`);
document.write(`Push "GTR" is : ${cars} <br>`);
document.write(`Length is : ${objLength} <br>`);
document.write(`Element 2 is : ${cars[1]} <br>`);


let pop = cars.pop();
document.write(`Pop is : ${pop} `);
document.write(`, New Array is : ${cars} <br>`);
let splice =cars.splice(0,1,"Swift","Polo","Creta");
document.write(`Splice (0,1,"","","") is : ${cars} <br>`);
let reverse = cars.reverse();
document.write(`New Array(Reversed) is : ${cars} <br>`);
let sort = cars.sort();
document.write(`New Array(Sorted) is : ${cars} <br>`);