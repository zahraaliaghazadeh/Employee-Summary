// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// * github  // GitHub username

// * getGithub()

// * getRole() // Overridden to return 'Engineer'



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


// In addition to `Employee`'s properties and methods, `Engineer` will also have:

//   * github  // GitHub username

//   * getGithub()

//   * getRole() // Overridden to return 'Engineer'

const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id ,email,github){
        super (name,id,email);
        this.github=github;
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
    
    getGithub() {
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;


// const engineer = new Engineer (name,id,email,github,"Engineer");
// console.log("-----Engineer-----");
// engineer.getName();
// engineer.getId();
// engineer.getEmail();
// engineer.getRole();


// const Yalda = new Engineer("Yalda", "ljdflkj", "sdkflskfjl");
// console.log(Yalda.getName());