const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const fs = require("fs");
// const internQuestions =
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
inquirer.prompt(managerQuestions).then((answers) => {
  // Use user feedback for... whatever!!
  const manager = new Manager(
    answers.name,
    answers.email,
    answers.id,
    answers.officeNumber
  );
  team.push(manager);
  // if (answers.role === "Intern") {
  //   inquirer.prompt(questions).then((answers) => {});
  // }
  // console.log(answers.role);
  menu();
});

function menu() {
  inquirer.prompt(menuQuestions).then((answers) => {});
}
