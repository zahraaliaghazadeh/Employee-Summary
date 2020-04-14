// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// The first class is an `Employee` parent class with the following properties and
// methods:

//   * name
//   * id
//   * email
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'

// In addition to `Employee`'s properties and methods, `Manager` will also have:

//   * officeNumber

//   * getRole() // Overridden to return 'Manager'

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber=officeNumber;
    }
    
// getName() {
//     return this.name;
// }
// getId() {
//     return this.id;
// }

// getEmail() {
//     return this.email;
// }
getOfficeNumber(){
    return this.officeNumber;
}

getRole() {
    return "Manager";
}

}

module.exports = Manager;


// const manager = new Manager (name,id,email,officeNumber,"Manager");
// console.log("-----Manager-----");
// console.log(manager.getName());
// console.log(manager.getId());
// console.log(manager.getEmail());
// console.log(manager.getRole());