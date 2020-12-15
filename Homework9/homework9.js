// ************************************** Task 1 **************************************

let regExp = /^https\:\/\//;
$task1 = $("#task1");
//$task1.attr("target", "_blank");
if ($task1.attr("href").match(regExp)) {
  //console.log("yey");
  $task1.attr("target", "_blank");
}

// ************************************** Task 2 **************************************

$(document).ready(function () {
  $("#task2Button").click(function () {
    let h2 = $("h2.head");
    h2.css("background-color", "lime");
    h2.find(".inner").css("font-size", "35px");
  });
});

// ************************************** Task 3 **************************************

let h3 = document.getElementsByTagName("h3");
let div = document.getElementsByTagName("div");
let divarr = [];

let divs = findDiv(h3, div);

for (let i = 0; i < h3.length; i++) {
  swap(h3[i], divs[i]);
}

function findDiv(elem, div) {
  let divarr = [];
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].nextElementSibling == div[i]) {
      divarr.push(elem[i].nextElementSibling);
    }
  }
  return divarr;
}

function swap(nodeA, nodeB) {
  const parentA = nodeA.parentNode;
  const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

  nodeB.parentNode.insertBefore(nodeA, nodeB);
  parentA.insertBefore(nodeB, siblingA);
}

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
