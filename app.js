const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager");
const Intren = require("./lib/Intern");
const pageTemplate = require("./src/page-template")
const team = [];

function newManager() {
    inquirer
        .prompt()([{
                type: "input",
                message: "What is your manager's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your manager's employee's ID?",
                name: "Id",
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
            var managerName = answers.name;
            var id = answers.Id;
            var email = answers.emailAddress;
            var officeNumber = answers.officeNumber;
            let manager = new Manager(managerName, Id, email, officeNumber);
            team.push(manager);
        });

}

function newEmployee() {
    inquirer.prompt()([{
            type: "checkbox",
            message: "What is your new employee an Engineer or Intern?",
            name: "role",
            choise: ["Engineer", "Intern"],
        },
        {
            type: "input",
            message: "What is your employee's name ?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your employee's ID?",
            name: "ID",
        },
        {
            type: "input",
            message: "What is your  employee's email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your  employee's Github username?",
            name: "email",
        },
    ]);

};



var newHtmlFile = () => {
    fs.writeFile(
        "index.html", pageTemplate(team),
        (err) => (err ? console.log(err) : console.log("Success!"))
    );
};