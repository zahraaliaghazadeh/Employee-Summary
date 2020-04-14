const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```




// inquirer.prompt
//     [{
//         type: "list",
//         message: "What role are you trying to add?",
//         name: "whichtoadd",
//         choices: ["Employee", "Manager", "Engineer", "Intern"]

//      }]
//         .then(function (answer) {
//             if (answer.whichtoadd === "Employee") {
//             }
//             else if (answer.whichtoadd === "Manager") {
//             }
//             else if (answer.whichtoadd === "Engineer") {
//             }
//             else( answer.whichtoadd === "Intern") {
//             }
//         });




//array for user input choices 
const inputArr = [
    //first question for type of employee
    {
        type: "list",
        message: "Select the type of employee:",
        name: "employeeType",
        choices: ["Intern", "Engineer", "Manager"]
    },
    // name for all employees 
    {
        type: "input",
        message: "Enter the name of the employee",
        name: "name"
    },
    //id for all employees 
    {
        type: "input",
        message: "Enter the ID of the employee",
        name: "id"
    },
    //email for all employees 
    {
        type: "input",
        message: "Enter the email of the employee",
        name: "email"
    },
    //school for intern only 
    {
        type: "input",
        message: "Enter the employee's school",
        name: "school",
        when: (response) => response.employeeType === 'Intern'
    },
    //engineer only - github username 
    {
        type: "input",
        message: "Enter the employee's GitHub username",
        name: "github",
        when: (response) => response.employeeType === 'Engineer'
    },
    //manager only - office number 
    {
        type: "input",
        message: "Enter the employee's office number",
        name: "officeNum",
        when: (response) => response.employeeType === 'Manager'
    },
    //ask if user wants to add another employee 
    {
        type: "list",
        message: "Would you like to enter another employee?",
        name: "anotherEmployee",
        choices: ["Yes", "No"]
    }
]
// declare the variable outside the function
let employeeArr = [];
//handles inquirer prompts & makes calls to render and writefile
function prompt() {
    inquirer
        //use prompt array 
        .prompt(inputArr)
        .then(function (response) {
            //make an employee object based on which type of employee the user selected
            let employee = null;
            if (response.employeeType === "Intern") {
                //intern constructor takes name, id, email, and school 
                employee = new Intern(response.name, response.id, response.email, response.school);
            }
            else if (response.employeeType === "Engineer") {
                //engineer constructor takes name, id, email, and github username 
                employee = new Engineer(response.name, response.id, response.email, response.github);
            }
            else {
                //manager constructor takes name, id, email, and office number 
                employee = new Manager(response.name, response.id, response.email, response.officeNum);
            }


            //add employee to array 
            employeeArr.push(employee);

            //if the user selected that they want to enter another employee, run function again 
            if (response.anotherEmployee === "Yes") {
                prompt();
            }
            //otherwise, we are ready to write to the file 
            else {
                try {
                    //pass the array of employees to render to get the html 
                    //then pass that return string to the write file function 
                    writeFile(render(employeeArr));
                } catch (error) {
                    console.error(error);
                }
            }
        });
}

//writes the employee data to a file 
function writeFile(fileData) {
    //check if directory exists. if not, create it 
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }

    ///write to file 
    fs.writeFile(outputPath, render(employeeArr), function (error) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("html file is created in the output folder")
        }
    });
}

//run the prompt 
prompt();

