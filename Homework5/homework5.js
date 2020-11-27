// ************************************** Task 1 **************************************

const mentor = { 
  course: "JS fundamental", 
  duration: 3,
  direction: "web-development" 
};

propsCount(mentor);

function propsCount(currentObject){
  console.log(Object.keys(currentObject).length);
}

// ************************************** Task 2 ************************************** 

const mentor = { 
  course: "JS fundamental", 
  direction: "web-development", 
  duration: 3,
  smart: true,
  rate: 10
};

showProps(mentor);

function showProps(obj){

  console.log(Object.entries(obj));
  console.log(Object.values(obj));

}


// ************************************** Task 3 **************************************

class YearException {
  constructor(message) {
    this.name = "YearException:";
    this.message = message;
    this.stack = this.name + " " + this.message;
  }
}

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    console.log(this.name, this.surname);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();
  }

  showFullName(midleName) {
    console.log(this.name, this.surname, midleName);
  }

  showCourse() {
    const course = this.currentYear - this.year;
    const message =
      "Sorry, you are not in the list of people who entered the university!";

    try {
      if (course > 6) {
        throw new YearException(
          "You've already graduated from the university!"
        );
      } else if (course < 0) {
        throw new YearException(message);
      } else if (course === 0) {
        if (this.currentMonth > 7) {
          //Якщо вже серпень - студент може рахуватись першокурсником
          return 1;
        } else {
          throw new YearException(message);
        }
      } else {
        return course;
      }
    } catch (error) {
      return error.stack;
    }
  }
}

const student = new Student("Petro", "Petrenko", 2015);
console.log(student.showFullName("Petrovych"));
console.log("Current course: " + student.showCourse());


// ************************************** Task 4 **************************************

class Worker{

  _experience = 1.2;

  constructor(fullName, dayRate, workingDays){
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.salary = this.dayRate * this.workingDays;
  }

  get showExp(){
    return this._experience;
  }

  set experience(value){
    this._experience = value;
  }

  calcSalary(){
    return this.salary;
  }
  showSalary(){
    console.log(this.fullName, "salary: ", this.salary);
  }

  showSalaryWithExperience(){
    console.log(this.fullName, "salary: ", this.calcSalary() * this._experience);
  }
}

//let worker1 = new Worker("John Johnson", 20, 23);
//let worker1 = new Worker("Tom Tomson", 48, 22);
let worker1 = new Worker("Andy Ander", 29, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.experience = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();


// ************************************** Task 5 **************************************

class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
  checkFigureExist() {
    return 0;
  }
}

class Triangle extends GeometricFigure {
  constructor(sideA, sideB, sideC = sideA) {
    super();
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    this.checkFigureExist();
  }

  getArea() {
    const p = (this.sideA + this.sideB + this.sideC) / 2;
    const area = (
      (p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)) **
      (1 / 2)
    ).toFixed(3);

    return area;
  }

  checkFigureExist() {
    if (
      this.sideA + this.sideBb < this.sideC ||
      this.sideA + this.sideC < this.sideB ||
      this.sideB + this.sideC < this.sideA
    ) {
      console.log(
        "Triangle with sides " +
          this.sideA +
          " " +
          this.sideB +
          " " +
          this.sideC +
          " does not exist."
      );
    } else {
      console.log("Triangle exist.");
    }
  }
}

class Square extends GeometricFigure {
  constructor(side) {
    super();
    this.side = side;
    this.checkFigureExist();
  }

  getArea() {
    return (this.side ** 2).toFixed(3);
  }

  checkFigureExist() {
    if (this.side > 0) {
      console.log("Square exist.");
    } else {
      console.log("Square with side", this.side, "doesn't exist.");
    }
  }
}

class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.r = r;
    this.checkFigureExist();
  }

  getArea() {
    return (Math.PI * this.r ** 2).toFixed(14);
  }

  checkFigureExist() {
    if (this.r > 0) {
      console.log("Circle exist.");
    } else {
      console.log("Circle with radius", this.r, "doesn't exist.");
    }
  }
}

function handleFigures(figures) {
  let areaCount = 0;
  for (let i = 0; i < figures.length; i++) {
    let parentName = Object.getPrototypeOf(figures[i].constructor).name;
    if (figures[i] instanceof GeometricFigure) {
      areaCount += Number(figures[i].getArea());
      console.log(
        parentName + ":",
        figures[i].toString(),
        " - area:",
        figures[i].getArea()
      );
    } else {
      console.log(
        "Class with name",
        figures[i].constructor.name,
        "is not child for",
        parentName
      );
    }
  }

  return areaCount;
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

console.log(handleFigures(figures));
