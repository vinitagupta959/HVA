class Employee {
  constructor(name, email, age, department, position, salary) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.department = department;
    this.position = position;
    this.salary = salary;
  }
  introduce() {
    console.log("hello" + "," + "i am" +" "+ this.name + "," + this.position);
  }

  displaySalary(){
    console.log("Salary: $"+this.salary);
    
  }
}
const newEmployee= new Employee("ramesh","ramesh@gmail.com",42,"marketing","software devloper",5008);
const manager= new Employee("ram","ram@gmail.com",48,"marketing","Manager",10058)

console.log(newEmployee);
console.log(manager);

newEmployee.introduce();
newEmployee.displaySalary();

manager.introduce();
manager.displaySalary();

