//------------------------------------------------------------Task 1------------------------------------------------------------

console.log("Task 1:");
const array = [2, 3, 4, 5];
let productFor = 1;

for (let i = 0; i < array.length; i++) {
  productFor *= array[i];
}

let iterator = 0;
let productWhile = 1;
while (iterator < array.length) {
  productWhile *= array[iterator];
  iterator++;
}

console.log(productFor);
console.log(productWhile);

//------------------------------------------------------------Task 2------------------------------------------------------------

console.log("Task 2:");
for (let i = 0; i < 15; i++) {
  if (i % 2 == 0) {
    console.log(i, " is even.");
  } else {
    console.log(i, " is odd.");
  }
}

//------------------------------------------------------------Task 3------------------------------------------------------------

console.log("Task 3:");
let arr = randArray(5);
console.log(arr);

function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr[i] = getRandomIntInclusive(1, 500);
  }

  return arr;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум
}

//------------------------------------------------------------Task 4------------------------------------------------------------

console.log("Task 4:");
const a = parseInt(prompt("Enter a: ", ""));
const b = parseInt(prompt("Enter b: ", ""));
//console.log(a);
//console.log(b);
console.log(raiseToDegree(a, b));

function raiseToDegree(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    return a ** b;
  } else {
    console.log("Incorrect data.");
  }
}

//------------------------------------------------------------Task 5------------------------------------------------------------

console.log("Task 5:");
console.log(findMin(1, 2, 3, -6, -3, 1.2, 54));

function findMin() {
  let min = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (min > arguments[i]) {
      min = arguments[i];
    }
  }

  return min;
}

//------------------------------------------------------------Task 6------------------------------------------------------------

console.log("Task 6:");
console.log(fundUnique([211, 2, 3, 5, 41, 65, 23, 1, 4]));

function fundUnique(arr) {
  let isUnique = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        console.log("arr[", i, "] = ", arr[i]);
        console.log("arr[", j, "] = ", arr[j]);
        isUnique = false;
        break;
      } else {
        continue;
      }
    }
  }

  return isUnique;
}

//------------------------------------------------------------Task 7------------------------------------------------------------

console.log("Task 7:");
console.log("Ans: ", lastElem([3, 4, 10, -5], 1));
console.log("-------------------------");
console.log("Ans: ", lastElem([3, 4, 10, -5], 2));
console.log("-------------------------");
console.log("Ans: ", lastElem([3, 4, 10, -5], 8));

function lastElem(arr, elems_to_return = arr[arr.length - 1]) {
  let arr_copy = arr;
  console.log("Array: ", arr_copy);
  console.log("elements_to_return ", elems_to_return);
  if (elems_to_return == arr_copy[arr_copy.length]) {
    return elems_to_return;
  } else if (elems_to_return > arr_copy.length) {
    return arr_copy;
  } else {
    arr_copy = arr_copy.slice(
      arr_copy.length - elems_to_return,
      arr_copy.length
    );
    return arr_copy;
  }
}

//------------------------------------------------------------Task 8------------------------------------------------------------

console.log("Task 8:");
console.log(upFirstLetters("iii love javajavajava java java script"));

function upFirstLetters(string) {
  const array = string.split(" ");
  let temp_variable = [];

  for (let i = 0; i < array.length; i++) {
    temp_variable.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  temp_variable = temp_variable.join(" ");

  return temp_variable;
}

