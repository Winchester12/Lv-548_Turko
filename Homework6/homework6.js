// ************************************** Task 1 **************************************

task1.onclick = function () {
  document.getElementById("test").innerHTML = "Last";
};

task1.onclick = function () {
  document.body.children[0].innerHTML = "Last";
};

// ************************************** Task 2 **************************************

task2.onclick = function () {
  let image = document.getElementsByClassName("image");
  image.src = "cat.jpg";
  alert(image.src);
};

// ************************************** Task 3 **************************************

task3.onclick = function () {
  const select = document.querySelector("#text");
  const elemArr = select.querySelectorAll("p");
  let tempStr = "";
  for (let i = 0; i < elemArr.length; i++) {
    tempStr =
      tempStr + "Selector text " + i + ": " + elemArr[i].textContent + "\n";
    //console.log("Selector text " + i + ": "  + elemArr[i].textContent + " ");
  }
  //console.log(tempStr);
  alert(tempStr);
};

// ************************************** Task 4 **************************************

task4.onclick = function () {
  const select = document.querySelector("#list");
  const elemArr = select.querySelectorAll("li");
  const tempArr = [
    elemArr[0].textContent,
    elemArr[4].textContent,
    elemArr[1].textContent,
    elemArr[3].textContent,
    elemArr[2].textContent,
  ];
  alert(tempArr);
};

task4.onclick = function () {
  const list = document.getElementById("list");

  const arr = [
    list.children[0].textContent,
    list.children[4].textContent,
    list.children[1].textContent,
    list.children[3].textContent,
    list.children[2].textContent,
  ];
  alert(arr);
};

// ************************************** Task 5 **************************************

task5.onclick = function () {
  document.getElementsByTagName("h1")[0].style.backgroundColor = "lightgreen";
  const task5_div = document.getElementById("myDiv");
  task5_div.children[0].style.fontWeight = "bold";
  task5_div.children[1].style.color = "red";
  task5_div.children[2].style.textDecoration = "underline";
  task5_div.children[3].style.fontStyle = "italic";

  const horizontalList = document.getElementById("myList");
  //horizontalList.style.display = "inline";
  for (let i = 0; i < horizontalList.children.length; i++) {
    horizontalList.children[i].style.display = "inline";
  }
};

// ************************************** Task 6 **************************************

const input1Text = prompt("Enter text for the first input.", "Default text");
const input2Text = prompt("Enter text for the second input.", "Default text");

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

input1.value = input1Text;
input2.value = input2Text;

const button = document.getElementById("changeText");
button.addEventListener("click", swapText);

function swapText(event) {
  const temp = input1.value;
  input1.value = input2.value;
  input2.value = temp;
}
<body>
  <main class="mainClass check item">
    <div id="myDiv">
      <p>First paragraph</p>
    </div>
  </main>
</body>;

// ************************************** Task 7 **************************************

let b = document.getElementsByTagName("body")[0];

let m = document.createElement("main");
m.className = "mainClass check item";

let d = document.createElement("div");
d.id = "myDiv";

let p = document.createElement("p");
p.innerHTML = "First paragraph";

d.appendChild(p);
m.appendChild(d);
b.appendChild(m);
