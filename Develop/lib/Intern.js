// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// The first class is an `Employee` parent class with the following properties and
// methods:

//   * name
//   * id
//   * email
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'

// The other three classes will extend `Employee`. 

// In addition to `Employee`'s properties and methods, `Intern` will also have:

//   * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'


const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id ,email,school){
        super (name,id,email);
        this.school=school;
    }
    // getName(){
    //     return this.name;
    // }
    // getId() {
    //     return this.id;
    // }
    
    // getEmail() {
    //     return this.email;
    // }
    
    getSchool() {
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;
