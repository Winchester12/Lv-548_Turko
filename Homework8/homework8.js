// ************************************** Task 1 **************************************

upperCase("regexp");
upperCase("eRgexp");
upperCase("Regexp");
upperCase("REGexp");

function upperCase(str) {
  if (/^[A-Z]/.test(str)) {
    console.log("String's starts with uppercase character");
  } else {
    console.log("String's not starts with uppercase character");
  }
}

// ************************************** Task 2 **************************************

console.log(checkEmail("Qmail2@gmail.com")); //dots before @

function checkEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// ************************************** Task 3 **************************************

$(document).ready(function () {
  $("#task3Button").click(function () {
    let h2 = $("h2.head");
    h2.css("background-color", "lime");
    h2.find(".inner").css("font-size", "35px");
  });
});

// ************************************** Task 4 **************************************

$(document).ready(function () {
  $("#task4Button").click(function () {
    let checkBoxes = document.getElementsByClassName("checkbox");
    let counter = 0;
    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].checked) {
        counter++;
      }
    }
    if (counter >= 3) {
      for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].disabled = true;
      }
    }
  });
});

// ************************************** Task 5 **************************************

let regExp = /([\S ]+) ([\S ]+)/;
let str = "Java Script";
console.log(str.replace(regExp, "$2, $1"));

// ************************************** Task 6 **************************************

let regExp = /\d{4}\-\d{4}\-\d{4}\-\d{4}/;
const cardNumber = "9999-9999-9999-9999";
if (regExp.test(cardNumber)) {
  console.log("Card number is valid");
} else {
  console.log("Card number is not valid");
}

// ************************************** Task 7 **************************************

checkEmail("mymail@gmail.com");
checkEmail("mym-ail@gmail.com");
checkEmail("mym-ail@gm-ail.com");
checkEmail("_myail@gmail.com");
checkEmail("-myail@gmail.com");

function checkEmail(str) {
  let regExp = /^[^(\-,\_)]([A-Za-z_\-0-9]+@[A-Za-z_\-0-9]+\.[A-Za-z_\-0-9]+)/;
  let regE = /\-/;
  let temp = str.split(regE);
  if (temp.length >= 3) {
    console.log("There are 2 or more '-' symbols.");
  } else {
    console.log(regExp.test(str));
  }
}
