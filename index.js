// const inquirer = require("inquirer");
// const Manager = require("./lib/Manager");
// const Intern = require("./lib/Intern");
// const Engineer = require("./lib/Engineer");
// const generateTeam = require("./src/generate-page");
// const fs = require("fs");
// const path = require("path");

// const DIST_DIR = path.resolve(__dirname, "dist");
// const distPath = path.join(DIST_DIR, "team.html");

// const team = [];

// const promptManager = () => {
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "Enter your name here (Required):",
//         validate: nameInput => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("Please enter name to proceed!");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "employeeId",
//         message: "Enter employee ID (Required):",
//         validate: employeeId => {
//           if (employeeId) {
//             return true;
//           } else {
//             console.log("Please enter employee ID to proceed!");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "Enter email (Required):",
//         validate: email => {
//           if (email) {
//             return true;
//           } else {
//             console.log("Please enter email to proceed!");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "officeNumber",
//         message: "Enter your office number (Required):",
//         validate: officeNumber => {
//           if (officeNumber) {
//             return true;
//           } else {
//             console.log("Please enter office number to proceed!");
//             return false;
//           }
//         },
//       },
//     ])
//     .then(answers => {
//       console.log(answers);
//       const manager = new Manager(
//         answers.name,
//         answers.employeeId,
//         answers.email,
//         answers.officeNumber
//       );
//       team.push(manager);
//       promptMenu();
//     });
// };

// const promptMenu = () => {
//   return inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "menu",
//         message: "Please choose from the following:",
//         choices: ["Add an intern", "Add an engineer", "Done"],
//       },
//     ])
//     .then(userChooses => {
//       switch (userChooses.main) {
//         case "Add an intern":
//           console.log("Add Intern");
//           promptIntern();
//           break;
//         case "Add an engineer":
//           console.log("Add Engineer");
//           promptEngineer();
//           break;
//         // default:
//         //   buildTeam(team);
//       }
//     });
// };

// // Add intern
// const promptIntern = () => {
//   console.log(`
//   ================
//   Add a New Intern
//   ================
//   `);
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "Name of intern? (Required):",
//         validate: internName => {
//           if (internName) {
//             return true;
//           } else {
//             console.log("Please enter interns name to proceed!");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "employeeId",
//         message: "Enter employees ID number (Required):",
//         validate: employeeId => {
//           if (employeeId) {
//             return true;
//           } else {
//             console.log("Please enter employee ID to proceed!");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "Please enter email (Required):",
//         validate: email => {
//           if (email) {
//             return true;
//           } else {
//             console.log("Please enter email to proceed!");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "school",
//         message: "Name of interns school (Required):",
//         validate: school => {
//           if (school) {
//             return true;
//           } else {
//             console.log("Please enter interns school to proceed!");
//             return false;
//           }
//         },
//       },
//     ])
//     .then(answers => {
//       console.log(answers);
//       const intern = new Intern(
//         answers.name,
//         answers.employeeId,
//         answers.email,
//         answers.school
//       );
//       team.push(intern);
//       promptMenu();
//     });
// };

// // Add new engineer
// const promptEngineer = () => {
//   console.log(`
//   ================
//   Add a New Engineer
//   ================
//   `);

//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is the name of the engineer?",
//         validate: engineerName => {
//           if (engineerName) {
//             return true;
//           } else {
//             console.log("Please enter the engineer's name to continue");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "engineerId",
//         message: "What is the ID of the engineer?",
//         validate: engineerId => {
//           if (engineerId) {
//             return true;
//           } else {
//             console.log("Please enter the engineer's Id to continue");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "What is the engineer's email address?",
//         validate: email => {
//           if (email) {
//             return true;
//           } else {
//             console.log(
//               "Please enter the engineer's email address to continue"
//             );
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "github",
//         message: "What is the engineer's Github username?",
//         validate: github => {
//           if (github) {
//             return true;
//           } else {
//             console.log(
//               "Please enter the engineer's Github username to continue"
//             );
//             return false;
//           }
//         },
//       },
//     ])
//     .then(answers => {
//       console.log(answers);
//       const engineer = new Engineer(
//         answers.name,
//         answers.engineerId,
//         answers.email,
//         answers.github
//       );
//       team.push(engineer);
//       promptMenu();
//     });
// };

// promptManager();



/////////////////////////////////////////////////////////////////////
const inquirer = require("inquirer")
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const generateTeam = require('./src/generate-page')
const path = require("path")
const fs = require("fs")


const OUTPUT_DIR = path.resolve(__dirname, "output.html")
const outputPath = path.join(OUTPUT_DIR, )
const team = []


const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name here (Required):',
            validate: nameInput => {
                if(nameInput) {
                    return(true)
                } else {
                    console.log('Please enter name to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employee ID (Required):',
            validate: employeeId => {
                if (employeeId) {
                    return true
                } else {
                    console.log('Please enter employee ID to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email (Required):',
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter email to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number (Required):',
            validate: officeNumber => {
                if (officeNumber) {
                    return true
                } else {
                    console.log('Please enter office number to proceed!')
                    return false
                }
            }
        },
    ])
    .then(answers => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber)
        menu.push(manager)
        promptMenu()
    })
}
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'main',
            message: 'Please choose from the following actions:',
            choices: ['Add an intern', 'Add an engineer', 'Done']
        }
    ])
    .then(userChoice => {
        switch (userChoice.menu) {
            case "Add an intern":
                console.log('Add Intern');
                promptIntern()
                break
            case "Add an engineer":
                promptEngineer()
                break
            default:
                buildTeam(team)
        }
    })
}
const promptIntern = () => {
    console.log(`
    ================
    Add a New Intern
    ================
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of intern? (Required):',
            validate: internName => {
                if (internName) {
                    return true
                } else {
                    console.log('Please enter interns name to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employees ID number (Required):',
            validate: employeeId => {
                if (employeeId) {
                    return true
                } else {
                    console.log('Please enter employee ID to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email (Required):',
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter email to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Name of interns school (Required):',
            validate: school => {
                if (school) {
                    return true
                } else {
                    console.log('Please enter interns school to proceed!')
                    return false
                }
            }
        }
    ])
    .then(answers => {
        console.log(answers)
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school)
        team.push(intern)
        promptMenu()
    })
}
const promptEngineer = () => {
    console.log(`
    ==================
    Add a New Engineer
    ==================
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of engineer? (Required):',
            validate: engineerName => {
                if (engineerName) {
                    return true
                } else {
                    console.log('Please enter engineers name to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employees ID number (Required):',
            validate: employeeId => {
                if (employeeId) {
                    return true
                } else {
                    console.log('Please enter employee ID to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email (Required):',
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter email to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Name of engineers github username? (Required):',
            validate: github => {
                if (github) {
                    return true
                } else {
                    console.log('Please enter engineers github username to proceed!')
                    return false
                }
            }
        }
    ])
    .then(answers => {
        console.log(answers)
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github)
        team.push(engineer)
        promptMain()
    })
}
const buildTeam = () => {
    console.log(`
    ===============
    Finished Team
    ===============
    `);
    // Builds an output if one doesn't currently exsit
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateTeam(team), "utf-8")
}
promptManager()







