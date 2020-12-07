// ************************************** Task 1 **************************************

let task1Button = document.getElementById("task1");

task1Button.addEventListener("click", workWithWindow);

function workWithWindow(){            
  openTab = window.open("", "", "width=300,height=300");
  setTimeout(() => resizeWindow(openTab), 2000);
}

function resizeWindow(openTab){
  openTab.resizeTo(500, 500);
  setTimeout(() => moveWindow(openTab), 2000);
}

function moveWindow(openTab){
  openTab.moveTo(200, 200);
  setTimeout(() => closeWindow(openTab), 2000);
}

function closeWindow(openTab){
  openTab.close();
}


// ************************************** Task 2 **************************************

let changeStyle = document.getElementById("changeStyle");

changeStyle.addEventListener("click", changeCSSEvent);

function changeCSSEvent(event){            
  let p = document.getElementById("text");
  p.style.color = "orange";
  p.style.fontSize = "20px";
  p.style.fontStyle = "Comic Sans MS";
}

// ************************************** Task 3 **************************************

let blue = document.getElementById("blue");
let pink = document.getElementById("pink");
let brown = document.getElementById("brown");
let yellow = document.getElementById("yellow");

blue.addEventListener("click", blueButton);
pink.addEventListener("dblclick", pinkButton);
//brown.addEventListener("click", brownButton);
yellow.addEventListener("mouseover", yellowOn);
yellow.addEventListener("mouseout", yellowOut);

function blueButton(){            
  document.body.style.backgroundColor = "blue";
}

function pinkButton(){            
  document.body.style.backgroundColor = "pink";
}

let brownButton = $(document).ready(function() {
  $('#brown').on('mousedown touchstart', function(e) {
    document.body.style.backgroundColor = "brown";
  }).bind('mouseup mouseleave touchend', function() {
    document.body.style.backgroundColor = "white";
  });
});

function yellowOn(){            
  document.body.style.backgroundColor = "yellow";
}   

function yellowOut(){            
  document.body.style.backgroundColor = "white";
}

// ************************************** Task 4 **************************************

let button4 = document.getElementById("deleteOption");

button4.addEventListener("click", deleteOption);

function deleteOption(){            
  $("#task4 option:selected").remove();
}

// ************************************** Task 5 **************************************

let button = document.getElementById("task5");
let task5Div = document.getElementById("task5Div");

button.addEventListener("click", pressOption);
button.addEventListener("mouseover", overOption);
button.addEventListener("mouseout", outOption);

function pressOption(){ 
  task5Div.appendChild(createElementP("I was pressed!"));
}

function overOption(){ 
  task5Div.appendChild(createElementP("Mouse on me!"));
}

function outOption(){ 
  task5Div.appendChild(createElementP("Mouse is not on me!"));
}

function createElementP(text){
  let p = document.createElement("p");     
  p.innerHTML = text;
  task5Div.appendChild(p);

  return p;
}

// ************************************** Task 6 **************************************

window.onresize = function(event) {
  let el = document.getElementById("task6");
  el.innerHTML = "Width: " + window.innerWidth + ", Height: " + window.innerHeight;
};

// ************************************** Task 7 **************************************

let countrySelector = document.getElementById("country");
let citiesSelector = document.getElementById("cities");
let p = document.getElementById("task7Show");

const ger = ["Berlin", "Hamburg", "Leipzig"];
const ua = ["Lviv", "Kyiv", "Odessa"];
const usa = ["New-York", "Boston", "Las Vegas", "Philadelfia"];
addOptions(ger, citiesSelector);
updateP();

countrySelector.addEventListener('change', (event) => {
  showSelected(countrySelector, citiesSelector);
  updateP();
});

citiesSelector.addEventListener('change', (event) => {
  updateP();
});

function updateP(){
  p.innerHTML = countrySelector.options[countrySelector.selectedIndex].text + ", " + citiesSelector.options[citiesSelector.selectedIndex].text;
}

function addOptions(country, selector){
  clearSelector(selector);
  for (let i = 0; i < country.length; i++) {
    let opt = document.createElement('option');
    opt.value = country[i];
    opt.innerHTML = country[i];
    selector.appendChild(opt);
  }
}

function showSelected(country, selector){
  switch (country.value) {
    case "ger":
      addOptions(ger, selector);
      break;
    case "usa":
      addOptions(usa, selector);
      break;
    case "ua":
      addOptions(ua, selector);
      break;
    default:
      break;
  }
}

function clearSelector(selector){
  var i, L = selector.options.length - 1;
  for(i = L; i >= 0; i--) {
    selector.remove(i);
  }
}
