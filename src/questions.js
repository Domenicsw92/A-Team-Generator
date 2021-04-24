const inquirer = require("inquirer");
// const Manager = require("./lib/Manager")
// const Intern = require("./lib/Intern")
// const Engineer = require("./lib/Engineer");
// const Employee = require("./Employee");

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
            const teamName = (response.teamName)
            TeamName.push(teamName);
            console.log(TeamName);
            addEmployee()
        })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "checkbox",
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
            if (empRespose.Member === "Engineer") {
                engineerQuestions()
            }
        })
}

function engineerQuestions() {
    inquirer.prompt([
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
        })
}



    // .then(function (answer) {
    //     console.log(answer)}
    //     if (answer.Member === "Done adding Members Build team") {
    //         console.log("exiting")
    //         process.exit()
    //     }
    //     addEmployee(answer)
    // }
    // )

