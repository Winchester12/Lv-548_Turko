// ************************************** Task 1 ************************************** 

testThrow(5);
testThrow("test");
testThrow(new Error("An error happened"));

function testThrow(exeption) {
  try {
    throw exeption;
  } catch (error) {
    console.log("Caught:", error);
  }
}

// ************************************** Task 2 ************************************** 

function calcRectangleArea(width, height) {
  //чи параметри є числами
  if (isNaN(width) || isNaN(height)) {
    throw "Nan as param";
  }
  return width * height;
}

try {
  console.log(calcRectangleArea(3, "a"));
} catch (error) {
  console.log(error);
}

// ************************************** Task 3 ************************************** 

try {
  checkAge();
} catch (error) {
  console.log(error.stack);
}

function checkAge() {
  const age = prompt("Enter your age: ");
  if (age === "") {
    alert("The field is empty! Please enter your age");
    throw new Error("Field is empty");
  } else if (isNaN(age)) {
    alert("Incorrect value.");
    throw new Error("Incorrect value. Input is not a number.");
  } else if (age < 14) {
    alert("You are under 14.");
    throw new Error("User is under 14 years old.");
  } else {
    alert("You are 18+, enjoy watching!");
  }
}

// ************************************** Task 4 ************************************** 

class MonthException {
  constructor(message) {
    this.name = "MonthException";
    this.message = "Incorrect month number";
    this.stack = this.name + " " + this.message;
  }

  showMonthName(month) {
    if (month < 0 || month > 12) {
      throw new MonthException(this.stack);
    } else {
      const date = new Date("1970 " + month + " 01");
      console.log(date.toLocaleString("default", { month: "long" }));
    }
  }
}

try {
  const monthException = new MonthException();
  monthException.showMonthName("asdfafsafs");
  //monthException.showMonthName(111);
  //monthException.showMonthName(1);
  //monthException.showMonthName(6);
  //monthException.showMonthName(12);
} catch (monthException) {
  console.log(monthException.stack);
}

// ************************************** Task 5 ************************************** 

const ids = [7, -12, 44, 22];

console.log(showUsers(ids));

function showUser(id) {
  try {
    let user = {
      id: null,
    };
    if (id > 0) {
      user.id = id;

      return user;
    } else {
      throw new Error("ID must not be negative");
    }
  } catch (error) {
    console.log(error.name, error.message, id);
    //console.log(error.stack, id);
  }
}

function showUsers(ids) {
  let users = [];
  for (let i = 0; i < ids.length; i++) {
    const user = showUser(ids[i]);
    //console.log(user, i);
    if (user != undefined) {
      users.push(user);
    }
  }

  return users;
}
