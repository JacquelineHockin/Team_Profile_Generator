const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your id?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
  },
];
const team = [];
const idArray = [];

inquirer.prompt(managerQuestions).then((answers) => {
  // Use user feedback for... whatever!!
  const manager = new Manager(
    answers.name,
    answers.email,
    answers.id,
    answers.officeNumber
  );
  team.push(manager);
  idArray.push(answers.id);
  assembleTeam();

  function assembleTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "that's it, i don't want to add more team members",
          ],
        },
      ])
      .then((userChooses) => {
        switch (userChooses.memberChooses) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            assembleTeam();
        }
      });
  }

  // Add new engineer
  const addEngineer = [
    {
      name: "name",
      type: "input",
      message: "Please enter the name of the engineer:",
    },
    {
      name: "id",
      type: "input",
      message: "Please enter the ID of the engineer:",
    },
    {
      name: "email",
      type: "input",
      message: "What is the engineer's email address?",
    },
    {
      name: "github",
      type: "input",
      message: "Please enter the engineer's Github username:",
    },
    {
      name: "upNext",
      type: "list",
      choices: ["Add Engineer", "Add Intern", "My team is complete!"],
      message: "What would you like to do next?",
    },
  ];

  // Add intern
  const internQuestions = [
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
  // if (answers.role === "Intern") {
  //   inquirer.prompt(questions).then((answers) => {});
  // }
  // console.log(answers.role);
  menu();
});

function menu() {
  inquirer.prompt(menuQuestions).then((answers) => {});
}
