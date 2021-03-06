const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./generateHTML");
const team = [];

function newManager() {
    inquirer
        .prompt([{
                type: "input",
                message: "What is your manager's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your manager's employee's ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your manager's emailAddress?",
                name: "emailAddress",
            },
            {
                type: "input",
                message: "What is your  manager's officeNumber?",
                name: "officeNumber",
            },
        ])

    .then((answers) => {
        let managerName = answers.name;
        let id = answers.id;
        let email = answers.emailAddress;
        let officeNumber = answers.officeNumber;
        let manager = new Manager(managerName, id, email, officeNumber);
        team.push(manager);
        newEmployee();
    });
}

function newEmployee() {
    inquirer
        .prompt([{
                type: "list",
                message: "What is your new employee an Engineer or Intern?",
                name: "role",
                choices: ["Engineer", "Intern"],
            },
            {
                type: "input",
                message: "What is your employee's name ?",
                name: "name",
            },

            {
                type: "input",
                message: "What is your employee's ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your  employee's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is your  employee's Github username",
                when: (list) => list.role == "Engineer",
                name: "username",
            },
            {
                type: "input",
                message: "What is your  employee's school",
                when: (list) => list.role == "Intern",
                name: "school",
            },
            {
                type: "list",
                message: "Would you like to register another employee?",
                name: "register",
                choices: ["Yes", "NO"],
            },
        ])
        .then((answers) => {
            let managerName = answers.name;
            let id = answers.id;
            let email = answers.email;
            if (answers.role == "Engineer") {
                let username = answers.username;
                let engineer = new Engineer(managerName, id, email, username);
                team.push(engineer);
            } else if (answers.role == "Intern") {
                let school = answers.school;
                let intern = new Intern(managerName, id, email, school);
                team.push(intern);
            }
            if (answers.register == "Yes") {
                newEmployee();
            } else {
                newHtmlFile();
            }
        });
}

const newHtmlFile = () => {
    fs.writeFile("index.html", generateHTML(team), (err) =>
        err ? console.log(err) : console.log("Success!")
    );
};
newManager();