class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  #courseList = [];

  getUserInfo() {
    return `${this.name} has email ${this.email}`;
  }

  enrollCourse(coursName) {
    this.#courseList.push(coursName);
  }

  getCourseList() {
    return this.#courseList;
  }
}

const shaan = new User("Shaan Mistry", "shaanmistry7@gmail.com");

console.log(shaan.getUserInfo()); // Shaan Mistry has email shaanmistry7@gmail.com

shaan.enrollCourse("React JS");
shaan.enrollCourse("Bootstrap");

console.log(shaan.getCourseList()); // [ 'React JS', 'Bootstrap' ]
console.log(shaan.courseList); // undefined