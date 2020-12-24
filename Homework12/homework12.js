// ************************************** Task 1 **************************************

document.getElementById("task1").addEventListener("click", async (e) => {
  const data = await getData();
  document.getElementById("task1").textContent = data.message;
});

async function getData() {
  const url = "http://localhost/task1";
  const data = await fetch(url, {
      headers: {
          'Origin': "http://localhost",
          "optionsSuccessStatus": 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      }
  });

  return data.json();
}

// ************************************** Task 2 **************************************

document.getElementById("task2").addEventListener("click", async (e) => {
  const data2 = await getData2();
  data2.forEach(element => {
    const li = document.createElement("li");
    li.textContent = element.author;
    document.getElementById("task2Text").appendChild(li);
  });
});


async function getData2() {
  const url = "http://localhost/task2";
  const data = await fetch(url, {
      headers: {
          'Origin': "http://localhost",
          "optionsSuccessStatus": 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      }
  });

  return data.json();
}