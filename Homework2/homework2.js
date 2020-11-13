//------------------------------------------------------------Task 1------------------------------------------------------------

let x = 1;
let y = 2;

let res1 = String(x) + String(y)
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y)
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x) && Boolean(y)
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = Number(Boolean(x) + String(y));
console.log(res4); // NaN
console.log(typeof res4); // "number"

//------------------------------------------------------------Task 2------------------------------------------------------------

const number = Number(prompt("Enter a number: ", ""));
if(number % 2 == 0 && number % 7 == 0){
    console.log("Number is even and is a multiple of 7!");
}
else if(number % 7 == 0){
    console.log("Number is a multiple of 7!");
}
else if(number % 2 == 0){
    console.log("Number is even!");
}
else{
    console.log("Number is default!");
}

//------------------------------------------------------------Task 3------------------------------------------------------------

let array = new Array();
array.unshift(1);
array.push("hello");
array.push(true);
array.push(null);
document.write("<p>Task 3: </p>");
document.write("Array length = ", array.length, "<br \/>");
array[4] = prompt("Enter something: ", "");
document.write("Fifth element of array: ", array[4], "<br \/><br \/>");
array.shift();
for(let i = 0; i < array.length; i++){
    document.write((i+1) + "th element of array = " + array[i] + "<br \/>");
}

//------------------------------------------------------------Task 4------------------------------------------------------------

const cities = ["Rome", "Lviv", "Warsaw", "Lviv", "Warsaw", "Lviv", "Warsaw"]; 
let string = new String();
for (let i = 0; i < cities.length; i++) {
    if(i + 1 !== cities.length){
        string += (cities[i] + "*");
    }
    else{
        string += (cities[i]);
    }
}
console.log(cities);
console.log(string);

//------------------------------------------------------------Task 5------------------------------------------------------------
const isAdult = Number(prompt("Are you 18 years old?","Enter your age."));

if(isAdult >= 18){
    alert("Ви досягли повнолітнього віку");
}
else if(isAdult < 10){
    alert("Ви ще надто молоді.");
}
else{
    alert("Ви вже не надто молоді, але ще не повнолітні.");
}

//------------------------------------------------------------Task 6------------------------------------------------------------

const a = Number(prompt("Enter length of first side of triangle: ", ""));
const b = Number(prompt("Enter length of second side of triangle: ", ""));
const c = Number(prompt("Enter length of third side of triangle: ", ""));
const triangle_square = 0;

if( (!isNaN(a) && a >= 1) && (!isNaN(b) && b >= 1) && (!isNaN(c) && c >= 1) ){
    if(a + b < c || a + c < b || b + c < a){
        console.log("Triangle with sides " + a + " " + b + " " + c + " does not exist.");
    }
    else{
        const triangle_square = calculate_triangle_square(a, b, c);
    }
}
else{
    console.log("Incorrect data.");
}

function calculate_triangle_square(a, b, c){
    const p = (a + b + c)/2;
    if( (p === a) || (p === b) || (p === c) ){
        console.log("Triangle with sides " + a + " " + b + " " + c + " does not exist.");
        return 0;
    }
    //console.log(a);
    //console.log(b);
    //console.log(c);
    //console.log(p);
    const triangle_square = (p*(p-a)*(p-b)*(p-c))**(1/2);
    console.log("Triangle square = ", triangle_square);
    return triangle_square;
}

//------------------------------------------------------------Task 7------------------------------------------------------------

elem.onclick = function() {
    const date = new Date;
    const time = date.getHours();
    if(time == 23 || time < 5){
        alert("Доброї ночі!")
    }
    else if(time >= 5 && time < 11){
        alert("Доброго ранку!")
    }
    else if(time >= 11 && time < 17){
        alert("Доброго дня!")
    }
    else if(time >= 17 && time < 23){
        alert("Доброго вечора!")
    }
    
};

