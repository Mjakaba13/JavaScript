class Student {
  #name;
  #age;
  #grade;
  #gpa;
  constructor(name, age, grade, gpa, course) {
    this.#name = name;
    this.#age = age;
    this.course = course;
    this.courses = {
      course1: ["French", "English", "Math", "SCience"],
      course2: ["B.D.T", "Chemistry", "Physics", "Geography"],
      course3: ["Government", "Accounting", "Finance", "Management"],
    };
    this.#grade = grade;
    this.#gpa = gpa;
  }
  setnewName(newName) {
    if (newName != "") {
      this.name = newName;
    } else {
      console.log("Pleaese enter your name");
    }
  }
  getnewName() {
    return this.name;
  }

  setnewAge(newAge) {
    if (newAge > 16) {
      this.age = newAge;
    } else {
      console.log("Please enetr your actual age.");
    }
  }
  getnewAge() {
    return this.age;
  }

  setnewGrade(newGrade) {
    if (newGrade > 0) {
      this.grade = newGrade;
    } else {
      console.log("Are you that dumb?");
    }
  }
  getnewGrade() {
    return this.grade;
  }

  setnewGpa() {
    let newGpa = this.grade / 20;
    this.gpa = newGpa;
  }
  getnewGpa() {
    return this.gpa;
  }

  // setCourses() {
  //   if (this.grade === 12) {
  //     var grad0;
  //     this.courses.course1 = grad0;
  //   } else {
  //     return this.courses.course2;
  //   }
  // }
  // getCourses() {
  //   return grad0;
  // }

  setCourses() {
    if (this.grade === 12) {
      this.courses1.pop();
      return this.courses.course1;
    } else {
      return this.courses.course2;
    }
  }

  getCourses() {}

  // getpower() {
  //   if (this.grade === 12) {
  //     console.log(this.#name);
  //   }
  // }

  hello() {
    console.log(
      `Welcome ${this.#name}, you are ${this.#age} years old. You scored ${
        this.#grade
      }. Your gpa is ${this.#gpa} and your courses are ${this.cour}`
    );
  }
}
