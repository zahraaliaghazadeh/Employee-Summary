// The first class is an `Employee` parent class with the following properties and
// methods:

//   * name
//   * id
//   * email
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'

// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }


    
    getName() {
       return this.name ;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;


// const Yalda = new Employee("Yalda", "ljdflkj", "sdkflskfjl");
// console.log(Yalda.getName());


// const employee = new Employee (name,id,email,role);
// console.log("---Employee---");
// console.log(getName());
// console.log(getId());
// console.log(getEmail());
// console.log(getRole());