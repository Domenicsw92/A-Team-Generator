const inquirer = require("inquirer");
const Manager = require("../lib/Manager")
const Intern = require("../lib/Intern")
const Engineer = require("../lib/Engineer");

const html = require('./page-template.js')

const TeamName = []
const teamMembers = []

startQuestions();

function startQuestions() {
    return inquirer.prompt([
        {
            type: "Input",
            message: "What is your Team name?",
            name: "teamName"
        },
        {
            type: "input",
            message: "What is the Manager's Name",
            name: "Name"
        },
        {
            type: "input",
            message: "What is the Manager's Id",
            name: "ID"
        },
        {
            type: "input",
            message: "What is the Manager's Email",
            name: "Email"
        },
        {
            type: "input",
            message: "What is the Manager's Office Number",
            name: "Number"
        },

    ])
        .then(function (response) {
            const manager = new Manager(response.Name, response.Id, response.Email, response.Number)
            teamMembers.push(manager);
            console.log(teamMembers);
            addEmployee()
        })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            message: "Add a team member",
            name: "Member",
            choices: [
                "Engineer",
                "Intern",
                "Manager",
                "Done adding Members Build team"
            ]
        },
    ])
        .then(function (empRespose) {
            console.log(empRespose)
            if (empRespose.Member === "Engineer") {
                engineerQuestions()
            }
            if (empRespose === "Intern") {
                internQuestions()
            }
            else if (empRespose === "Done adding Members Build team" ){
                console.log("building team")
                html(teamMembers)
            }
        })
}

function engineerQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's Name",
            name: "engineerName"
        },
        {
            type: "input",
            message: "What is the Engineer's Id",
            name: "engineerID"
        },
        {
            type: "input",
            message: "What is the Engineer's Email",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What is the Engineer's Github",
            name: "engineerGithub"
        }
    ])
        .then(function (response) {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
            teamMembers.push(engineer);
            console.log(teamMembers);
            addEmployee();
        })
}

function internQuestions() {
    console.log("adding Intern")
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern's Name",
            name: "internName"
        },
        {
            type: "input",
            message: "What is the Intern's Id",
            name: "internID"
        },
        {
            type: "input",
            message: "What is the Intren's Email",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What is the Intern's Github",
            name: "internGithub"
        },
        {
            type: "input",
            message: "What is the Intern's School Name",
            name: "School"
        }
    ])
        .then.then(function (response) {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internGithub, response.School)
            teamMembers.push(intern);
            console.log(teamMembers);
            addEmployee();
        })
}

 module.exports = buildIndex