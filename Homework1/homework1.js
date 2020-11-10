//------------------------------------------------------------Task 2------------------------------------------------------------
console.log("Task 2: Матвій");

//------------------------------------------------------------Task 3------------------------------------------------------------
let x;
let y;
x = 2;
y = 10;
document.write("x = " + x + ".<br \/>");
document.write("y = " + y + ".<br \/>");
document.write("y = x<br \/>");
y = x;
document.write("x after copy = " + x + ".<br \/>");
document.write("y after copy = " + y + ".<br \/><br \/>");

//------------------------------------------------------------Task 4------------------------------------------------------------
const me = {
    name: "Matthew",
    age: 22,
    isDrunk: false,
    cookies: undefined,
    money: null
};
console.log("Task 4: ", me);

//------------------------------------------------------------Task 5------------------------------------------------------------
const isAdult = confirm("Are you over 18 years old?");
console.log("Task 5: " + isAdult);

//------------------------------------------------------------Task 6------------------------------------------------------------
let name;
let surname;
let groupname;
let date_of_birth;
const here_is_null = null;
let here_is_undefined;

name = "Matthew";
surname = "Turko";
groupname = "Lv-548";
year_of_birth = 1998;
const is_married = true;

const type_of_name = typeof name;
const type_of_surname = typeof surname;
const type_of_groupname = typeof groupname;
const type_of_year_of_birth = typeof year_of_birth;
const type_of_is_married = typeof is_married;

console.log("Task 6: ",  type_of_year_of_birth, type_of_is_married, type_of_name, type_of_surname, type_of_groupname);
console.log("Task 6: ", here_is_null, here_is_undefined);

//------------------------------------------------------------Task 7------------------------------------------------------------
let user_information = {
    name: null,
    email: null,
    password: null
};

user_information.name = prompt("What is your name?", "User");
user_information.email = prompt("What is your Email?", "usermale@gmail.com");
user_information.password = prompt("What is your password?", "qwerty");

alert("Dear " + user_information.name + ", your email is " + user_information.email + ", your password is " + user_information.password);

//------------------------------------------------------------Task 8------------------------------------------------------------
let date = new Date();
let current_month = date.getMonth() + 1;
let current_year = date.getFullYear();

let getDaysInMonth = function(month,year) {
   return new Date(year, month, 0).getDate();
  };

let calculate_seconds = function(theObject) {
    let days_current_month = getDaysInMonth(current_month, current_year);
    switch(theObject) {
        case "hour":
            return 60*60;
      
        case "day":
            return 60*60*24;

        case "month":
            return 60*60*24*days_current_month;
        default:
            return 60;
      }
  }
  document.write("Task 8:<br \/><br \/>");
  document.write("There are ", calculate_seconds("hour"), " seconds in 1 hour.<br \/>");
  document.write("There are ", calculate_seconds("day"), " seconds in 1 day.<br \/>");
  document.write("There are ", calculate_seconds("month"), " seconds in current, ", current_month, "th month.<br \/>");