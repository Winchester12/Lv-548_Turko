//main.js
class House {
  #housePower = true;
  #rooms = [];
  #alarm = {
    power: true,
    scream: false,
    //todo
  };
  #mainDoor = true;

  constructor(rooms = this.#rooms) {
    this.#rooms = rooms;
  }

  get rooms() {
    return this.#rooms;
  }

  /**
   * @param {string} name
   */
  set room(name) {
    this.#rooms.push(new Room(name));
  }

  get housePower() {
    return this.#housePower;
  }

  set housePower(power) {
    this.#housePower = power;
  }

  get alarm() {
    return this.#alarm;
  }

  get door() {
    return this.#mainDoor;
  }

  set door(isClosed) {
    this.#mainDoor = isClosed;
  }

  addRoom(room) {
    //console.log(comp);
    //console.log(this.#components);
    this.#rooms.push(room);
  }

  setAlarm(power) {
    //true||false
    if (this.#alarm.power == true && power == true) {
      console.log("Alarm is already powered on!");
    } else if (this.#alarm.power == true && power == false) {
      this.#alarm.power = power;
      console.log("Alarm is successfully powered off!");
    } else if (this.#alarm.power == false && power == false) {
      console.log("Alarm is already powered off!");
    } else {
      this.#alarm.power = power;
      console.log("Alarm is successfully powered on!");
    }
  }

  mainDoorAction(power) {
    //true||false
    if (this.#mainDoor == true && power == true) {
      console.log("Main door is already closed!");
    } else if (this.#mainDoor == true && power == false) {
      this.#mainDoor = power;
      console.log("Main door is successfully opened!");
    } else if (this.#mainDoor == false && power == false) {
      console.log("Main door is already opened!");
    } else {
      this.#mainDoor = power;
      console.log("Main door is successfully closed!");
    }
  }

  findRoomByName(name) {
    for (let i = 0; i < this.#rooms.length; i++) {
      if (this.#rooms[i].name == name) {
        return this.#rooms[i];
      }
    }
    console.log("We couldn't find a room with name: " + name);
  }

  findRoomById(id) {
    for (let i = 0; i < this.#rooms.length; i++) {
      if (this.#rooms[i].id == id) {
        return this.#rooms[i];
      }
    }
    console.log("We couldn't find a room with id: " + id);
  }

  deleteRoomById(id) {
    if (this.#rooms.length == 0) {
      return console.log("No rooms left:(");
    }
    for (let i = 0; i < this.#rooms.length; i++) {
      if (this.#rooms[i].id == id) {
        this.#rooms.splice(i, 1);
        return console.log("Room with id: " + id + " was deleted.");
      }
    }
    return console.log("We could not find room with id: " + id + ".");
  }

  deleteRoomByName(name) {
    let temp = this.findRoomByName(name).id;
    this.deleteRoomById(temp);
  }
}

class Room {
  static roomsCounter = 0;

  #components = [];
  #id = 0;
  #name = "";
  #door = true;
  #temterature = 20;

  constructor(name = "unnamed", components = this.#components) {
    this.#components = components;
    this.#name = name;
    this.#id = Room.roomsCounter;
    //console.log(this.#components);
    Room.roomsCounter++;
  }

  get components() {
    return this.#components;
  }

  set component(name) {
    this.#components.push(new Component(name));
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get temterature() {
    return this.#temterature;
  }

  set temterature(temterature) {
    this.#temterature = temterature;
  }

  get id() {
    return this.#id;
  }

  addComponent(comp) {
    //console.log(comp);
    //console.log(this.#components);
    this.#components.push(comp);
  }
  doorManagement(power) {
    if (this.#door == true && power == true) {
      console.log(this.#name + " door is already closed!");
    } else if (this.#door == true && power == false) {
      this.#door = power;
      console.log(this.#name + " door is successfully opened!");
    } else if (this.#door == false && power == false) {
      console.log(this.#name + " door is already opened!");
    } else {
      this.#door = power;
      console.log(this.#name + " door is successfully closed!");
    }
  }

  findComponentById(componentID) {
    for (let i = 0; i < this.#components.length; i++) {
      if (this.#components[i].id == componentID) {
        //console.log("Component exist and has index: " + (i));
        //console.log("Component exist");
        return this.#components[i];
      }
    }
  }

  findComponentByName(name) {
    for (let i = 0; i < this.#components.length; i++) {
      if (this.#components[i].name == name) {
        return this.#components[i];
      }
    }
    console.log("We couldn't find a component with name: " + name);
  }

  deleteComponentById(id) {
    if (this.#components.length == 0) {
      return console.log("No components left:(");
    }
    for (let i = 0; i < this.#components.length; i++) {
      if (this.#components[i].id == id) {
        this.#components.splice(i, 1);
        return console.log("Component with id: " + id + " was deleted.");
      }
    }
    return console.log("We could not find component with id: " + id + ".");
  }

  deleteComponentByName(name) {
    for (let i = 0; i < this.#components.length; i++) {
      if (this.#components[i].name == name) {
        this.#components.splice(i, 1);
        return 0;
      }
    }
    console.log("Component " + name + " was not found!");
  }
}

class Component {
  static componentsCounter = 0;
  #name = "";
  #id = 0;
  #abilities = [];
  #isClosed = false;

  constructor(name, abilities = this.#abilities) {
    this.#name = name;
    this.#abilities = abilities;
    this.#id = Component.componentsCounter;
    Component.componentsCounter++;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get isClosed() {
    return this.#isClosed;
  }

  set isClosed(bool) {
    this.#isClosed = bool;
  }

  get abilities() {
    return this.#abilities;
  }

  set ability(obj) {
    this.#abilities.push(obj);
  }

  get id() {
    return this.#id;
  }

  addAbility(abil) {
    //console.log(comp);
    //console.log(this.#components);
    this.#abilities.push(abil);
  }

  findAbilityById(id) {
    for (let i = 0; i < this.#abilities.length; i++) {
      if (this.#abilities[i].id == id) {
        //console.log("Ability exist and has index: " + (i));
        //console.log("Ability exist");
        return this.#abilities[i];
      }
    }
  }

  checkAbilityExist(abilityName) {
    for (let i = 0; i < this.#abilities.length; i++) {
      if (this.#abilities[i].name === abilityName) {
        //console.log("Ability exist and has index: " + (i+1));
        //console.log("Ability exist");
        return i;
      }
    }
    console.log(
      this.#name + " | Ability with name (" + abilityName + ") does not exist!"
    );
    return -1;
  }

  deleteAbilityFromComponent(id) {
    if (this.#abilities.length == 0) {
      return console.log("No abilities left:(");
    }
    for (let i = 0; i < this.#abilities.length; i++) {
      if (this.#abilities[i].id == id) {
        this.#abilities.splice(i, 1);
        return console.log("Ability with id: " + id + " was deleted.");
      }
    }
    return console.log("We could not find ability with id: " + id + ".");
  }
}

class Ability {
  static abilitiesCounter = 0;
  #name = "";
  #id = 0;
  #isTurnedOn = false;

  constructor(abilityName) {
    this.#name = abilityName;
    this.#id = Ability.abilitiesCounter;
    Ability.abilitiesCounter++;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get power() {
    return this.#isTurnedOn;
  }

  set power(pw) {
    this.#isTurnedOn = pw;
  }
}

const roomsContainer = document.getElementById("roomsContainer");
const addRoomB = document.getElementById("addRoom");
const showHouseButton = document.getElementById("showHouse");
const showAbilities = document.getElementById("showAbilities");
const refreshRoomsHeatButton = document.getElementById("refreshRoomsHeat");
const mainDoorButton = document.getElementById("mainDoorButton");
const alarmButton = document.getElementById("alarmButton");
const house = new House();
const regExpFindID = /\d/g;

addRoomB.addEventListener("click", addRoom);
showHouseButton.addEventListener("click", showHouse);
showAbilities.addEventListener("click", showAbilitiesList);
refreshRoomsHeatButton.addEventListener("click", addHeatPanel);
mainDoorButton.addEventListener("click", mainDoorAction);
alarmButton.addEventListener("click", alarmButtonAction);

const tv = new Component("TV", [
  new Ability("SettingsTV"),
  new Ability("SettingsTV2"),
  new Ability("SettingsTV3"),
]);
console.log(tv.abilities);
const room = new Room("Living room", [tv]);

addExistingRoom(room);

function mainDoorAction() {
  if (house.door) {
    this.style.backgroundColor = "green";
    house.mainDoorAction(false);
  } else {
    this.style.backgroundColor = "red";
    house.mainDoorAction(true);
  }
}

function alarmButtonAction() {
  if (house.alarm.power) {
    this.style.backgroundColor = "red";
    house.setAlarm(false);
  } else {
    this.style.backgroundColor = "green";
    house.setAlarm(true);
  }
}

function addHeatPanel() {
  document.getElementById("heatController").innerHTML = ``;
  const heatController = document.getElementById("heatController");
  const heatPanel = document.createElement("div"); //open/close disable/enable...
  const heatRoomsControl = document.createElement("div"); //rooms

  heatRoomsControl.className = "RoomsTemperatureControl";
  for (let i = 0; i <= house.rooms[house.rooms.length - 1].id; i++) {
    if (house.findRoomById(i) == undefined) {
      continue;
    }

    const heatRoomControl = document.createElement("div"); //room
    const incBut = document.createElement("button");
    incBut.textContent = "+";
    const decBut = document.createElement("button");
    decBut.textContent = "-";

    heatRoomControl.innerHTML = `<p class="${i}">Room ${i} temperature: ${
      house.findRoomById(i).temterature
    }</p>
                                <div class="incDecButtons roomID${i}"></div>`;

    heatRoomControl.className = "heatRoomControl";

    incBut.addEventListener("click", incButtonListener);
    decBut.addEventListener("click", decButtonListener);
    heatRoomControl
      .getElementsByClassName("incDecButtons")[0]
      .appendChild(incBut);
    heatRoomControl
      .getElementsByClassName("incDecButtons")[0]
      .appendChild(decBut);

    heatRoomsControl.appendChild(heatRoomControl);
  }

  heatController.appendChild(heatRoomsControl);
  heatController.appendChild(heatPanel);
}

function incButtonListener() {
  const roomID = this.parentNode.className.match(/\d+/g);
  const room = house.findRoomById(roomID);
  room.temterature++;
  document.getElementsByClassName(roomID)[0].textContent = room.temterature;
  document.getElementsByClassName(
    roomID
  )[1].textContent = `Room ${roomID} temperature: ${
    house.findRoomById(roomID).temterature
  }`;
}

function decButtonListener() {
  const roomID = this.parentNode.className.match(/\d+/g);
  const room = house.findRoomById(roomID);
  room.temterature--;
  document.getElementsByClassName(roomID)[0].textContent = room.temterature;
  document.getElementsByClassName(
    roomID
  )[1].textContent = `Room ${roomID} temperature: ${
    house.findRoomById(roomID).temterature
  }`;
}

function addExistingRoom(room) {
  house.addRoom(room);

  //console.log(house.rooms);
  const newRoom = createRoomDOM(house.findRoomById(room.id));

  roomsContainer.appendChild(newRoom);
}

function addRoom() {
  const roomName = document.getElementById("addRoomName").value;
  const currRoom = new Room(roomName);
  house.addRoom(currRoom);

  const newRoom = createRoomDOM(currRoom);
  roomsContainer.appendChild(newRoom);
}

function createRoomDOM(room) {
  const addCompButton = document.createElement("button");
  const deleteRoomButton = document.createElement("button");
  const dom_room = document.createElement("div");

  const roomName = room.name;
  const currentRoomId = room.id;

  addCompButton.textContent = "Add component";
  addCompButton.addEventListener("click", addComponent);

  deleteRoomButton.textContent = "Delete room with id: " + currentRoomId;
  deleteRoomButton.addEventListener("click", function (event) {
    house.deleteRoomById(currentRoomId);
    this.parentElement.remove();
  });

  dom_room.className = roomName;
  dom_room.className = "room";
  dom_room.innerHTML = `<h1>Room ${roomName}</h1>
                        <p class="roomTempField ${currentRoomId}">${room.temterature}</p>
                          <div class="componentsContainer"></div>
                          <div class="input_buttonContainer">
                            <input type="text" class="roomID${currentRoomId} roomInputWithComponentInfo">
                          </div>`;
  dom_room
    .getElementsByClassName("input_buttonContainer")[0]
    .appendChild(addCompButton);
  dom_room.appendChild(deleteRoomButton);
  console.log(`Room id ${currentRoomId}: ${roomName} added to the house.`);
  //Room.roomsCounter++;
  for (let i = 0; i < room.components.length; i++) {
    dom_room
      .getElementsByClassName("componentsContainer")[0]
      .appendChild(createComponentDOM(currentRoomId, room.components[i]));
  }

  return dom_room;
}

function addComponent() {
  const componentInfoInput = this.parentNode.getElementsByClassName(
    "roomInputWithComponentInfo"
  )[0];
  const newComponentName = componentInfoInput.value;

  const oop_component = new Component(newComponentName);

  const currentRoomID = componentInfoInput.className.match(/\d+/g);
  house.findRoomById(currentRoomID).addComponent(oop_component);

  this.parentNode.parentNode
    .getElementsByClassName("componentsContainer")[0]
    .appendChild(createComponentDOM(currentRoomID, oop_component));
}

function addAbility() {
  const abilityInfoInput = this.parentNode.getElementsByClassName(
    "componentInputWithAbilityInfo"
  )[0]; //get input

  console.log("Ability counter: " + Ability.abilitiesCounter);
  const IDs = abilityInfoInput.className.match(/\d+/g);
  const newAbilityName = abilityInfoInput.value;

  const oop_ability = new Ability(newAbilityName);
  const currentRoomID = IDs[0];
  const currentComponentID = IDs[1];

  console.log("Ability counter: " + Ability.abilitiesCounter);
  house
    .findRoomById(currentRoomID)
    .findComponentById(currentComponentID)
    .addAbility(oop_ability);

  this.parentNode.parentNode
    .getElementsByClassName("abilitiesContainer")[0]
    .appendChild(
      createAbilityDOM(currentRoomID, currentComponentID, oop_ability)
    );
}

function createComponentDOM(roomID, component) {
  const newComponent = document.createElement("div");
  const deleteComponentButton = document.createElement("button");
  const closeComponentButton = document.createElement("button");
  const addAbilButton = document.createElement("button");

  newComponent.className = `componentID${component.id}`;
  newComponent.className = "component";

  closeComponentButton.textContent =
    "Close component with id: " +
    component.id +
    " from room with id: " +
    roomID;
  deleteComponentButton.textContent =
    "Delete component with id: " +
    component.id +
    " from room with id: " +
    roomID;
  addAbilButton.textContent = "Add ability";

  addAbilButton.addEventListener("click", addAbility);
  deleteComponentButton.addEventListener("click", function (event) {
    try {
      if (
        house.findRoomById(roomID).findComponentById(component.id).id ==
        component.id
      ) {
        console.log("Delete room " + roomID + " Component " + component.id);
        house.findRoomById(roomID).deleteComponentById(component.id);
        //console.log(this.parentElement);
        this.parentElement.remove();
      }
    } catch (error) {
      console.log(
        error.name,
        "Could not find component with id: ",
        roomID,
        " in room with id: ",
        roomID
      );
    }
  });
  closeComponentButton.addEventListener("click", function (event) {
    if (component.isClosed) {
      this.style.backgroundColor = "green";
      component.isClosed = false;
      addAbilButton.disabled = false;
      console.log(
        "Component with id:",
        component.id,
        "from room with id:",
        roomID,
        "successfully opened!"
      );
      for (
        let i = 0;
        i < this.parentNode.getElementsByTagName("button").length - 2;
        i++
      ) {
        this.parentNode.getElementsByTagName("button")[i].disabled = false;
      }
    } else {
      this.style.backgroundColor = "red";
      component.isClosed = true;
      addAbilButton.disabled = true;
      console.log(
        "Component with id:",
        component.id,
        "from room with id:",
        roomID,
        "successfully closed!"
      );
      for (
        let i = 0;
        i < this.parentNode.getElementsByTagName("button").length - 2;
        i++
      ) {
        this.parentNode.getElementsByTagName("button")[i].disabled = true;
      }
    }
  });
  newComponent.innerHTML = `<h2>Component ${component.name}</h2>
                              <div class="abilitiesContainer"></div>
                              <div class="input_buttonContainer">
                                <input type="text" class="roomID${roomID} componentID${component.id} componentInputWithAbilityInfo">
                              </div>`;
  newComponent
    .getElementsByClassName("input_buttonContainer")[0]
    .appendChild(addAbilButton);

  newComponent.appendChild(closeComponentButton);
  newComponent.appendChild(deleteComponentButton);

  console.log(
    `Room id ${roomID}: addComponent(${component.id}) ${component.name} to ${roomID} ID room.`
  );

  for (let i = 0; i < component.abilities.length; i++) {
    newComponent
      .getElementsByClassName("abilitiesContainer")[0]
      .appendChild(
        createAbilityDOM(roomID, component.id, component.abilities[i])
      );
  }

  return newComponent;
}

function createAbilityDOM(roomID, componentID, ability) {
  const newAbility = document.createElement("div");
  const setAbilityPowerButton = document.createElement("button");
  const deleteAbilityButton = document.createElement("button");

  setAbilityPowerButton.textContent = "Switcher";
  setAbilityPowerButton.className = "setAbilityPowerButton";

  deleteAbilityButton.textContent = "Delete ability with id: " + ability.id;
  setAbilityPowerButton.addEventListener("click", setAbilityPower);
  deleteAbilityButton.addEventListener("click", function () {
    if (
      house
        .findRoomById(roomID)
        .findComponentById(componentID)
        .findAbilityById(ability.id).id == ability.id
    ) {
      house
        .findRoomById(roomID)
        .findComponentById(componentID)
        .deleteAbilityFromComponent(ability.id);
      this.parentElement.remove();
    }
  });

  newAbility.className = ability.name;
  newAbility.className = "ability";
  newAbility.innerHTML = `<h3>Ability ${ability.name}</h3>
                            <input type="checkbox" class="roomID${roomID} componentID${componentID} abilityID${ability.id} abilityInput">`;
  newAbility.appendChild(setAbilityPowerButton);
  newAbility.appendChild(deleteAbilityButton);

  console.log(
    `Room id ${roomID}: addAbility(${ability.id}) ${ability.name} to ${componentID} ID component.`
  );

  return newAbility;
}

function showAbilitiesList() {
  console.log("showAbilitiesList()");
  const rooms = house.rooms;
  //console.log(house.rooms);

  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].components.length; j++) {
      for (let k = 0; k < rooms[i].components[j].abilities.length; k++) {
        try {
          const ability = house.rooms[i].components[j].abilities[k];
          console.log(
            "Ability name: ",
            ability.name,
            " is working: ",
            ability.power
          );
        } catch (error) {
          console.log(error.stack);
          continue;
        }
        //console.log(ability);
      }
    }
  }
}

function showHouse() {
  console.log(house.rooms);
}

function setAbilityPower(event) {
  const abilityInput = this.parentNode
    .getElementsByClassName("abilityInput")[0]
    .className.match(/\d+/g);
  const ability = house
    .findRoomById(abilityInput[0])
    .findComponentById(abilityInput[1])
    .findAbilityById(abilityInput[2]);

  if (ability.power) {
    this.style.backgroundColor = "red";
    ability.power = false;
    console.log("Ability with id:", ability.id, "successfully powered off!");
  } else {
    this.style.backgroundColor = "green";
    ability.power = true;
    console.log("Ability with id:", ability.id, "successfully powered on!");
  }
}
