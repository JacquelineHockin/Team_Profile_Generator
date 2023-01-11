const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const generateTeam = require("./src/generate-page");
const fs = require("fs");
const path = require("path");

// const DIST_DIR = path.resolve(__dirname, "dist");
// const distPath = path.join(DIST_DIR, "team.html");

const team = [];
const idArray = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter your name here (Required):",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter name to proceed!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter employee ID (Required):",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter employee ID to proceed!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter email (Required):",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter email to proceed!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter your office number (Required):",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter office number to proceed!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);
      promptMenu();
    });
};

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please choose from the following:",
        choices: ["Add an intern", "Add an engineer", "Done"],
      },
    ])
    .then((userChooses) => {
      switch (userChooses.main) {
        case "Add an intern":
          console.log("Add Intern");
          promptIntern();
          break;
        case "Add an engineer":
          console.log("Add Engineer");
          promptEngineer();
          break;
        default:
          buildTeam(team);
      }
    });
};

// Add new engineer
const promptEngineer = [
  {
    name: "name",
    type: "input",
    message: "What is the name of the engineer?",
  },
  {
    name: "id",
    type: "input",
    message: "What is the ID of the engineer?",
  },
  {
    name: "email",
    type: "input",
    message: "What is the engineer's email address?",
  },
  {
    name: "github",
    type: "input",
    message: "What is the engineer's Github username?",
  },
  {
    name: "upNext",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "My team is complete!"],
    message: "What next?",
  },
];

// Add intern
const promptIntern = [
  {
    name: "name",
    type: "input",
    message: "What is the intern's name?",
  },
  {
    name: "id",
    type: "input",
    message: "What is the intern's employee ID?",
  },
  {
    name: "email",
    type: "input",
    message: "What is the intern's email address?",
  },
  {
    name: "school",
    type: "input",
    message: "What college/university does the intern go to?",
  },
  {
    name: "upNext",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "My team is complete!"],
    message: "What next?",
  },
];

promptManager();
