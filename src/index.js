// const inquirer = require("inquirer");
// // const Manager = require("./lib/Manager")
// // const Intern = require("./lib/Intern")
// // const Engineer = require("./lib/Engineer");
// // const Employee = require("./Employee");




// function startQuestions() {
//     return inquirer.prompt([
//         {
//             type: "Input",
//             message: "Would you like to build a team",
//             name: "buildTeam"
//         },

//         // seperate to 2 functions then contuine to next
//         {
//             type: "checkbox",
//             message: "Add a team member",
//             name: "Member",
//             choices: [
//                 "Engineer",
//                 "Intern",
//                 "Manager",
//             ]

//         },

//     ])
// }
// function continueQuestions() {
//     return inquirer.prompt([
//         {
//             type: "confirm",
//             message: "Would you like to add another team member",
//             name: "addTeam"

//         },
//         {
//             type: "checkbox",
//             message: "Add a team member",
//             name: "Member",
//             choices: [
//                 "Engineer",
//                 "Intern",
//                 "Manager",
//             ]

//         },

//     ])

// }
// startQuestions()
//     .then(function (answer) {
//         console.log(answer)
//         if (answer.buildTeam === false) {
//             console.log("exiting")
//             process.exit()
//         }
//         addEmployee(answer)
//     }
//     )

// function addEmployee(answer) {
//     if (answer.Member[0] === "Engineer") {
//         console.log("adding engineer")
//         inquirer.prompt([
        //     {
        //         type: "input",
        //         message: "What is the Engineer's Name",
        //         name: "engineerName"
        //     },
        //     {
        //         type: "input",
        //         message: "What is the Engineer's Id",
        //         name: "engineerID"
        //     },
        //     {
        //         type: "input",
        //         message: "What is the Engineer's Email",
        //         name: "engineerEmail"
        //     },
        //     {
        //         type: "input",
        //         message: "What is the Engineer's Github",
        //         name: "engineerGithub"
        //     }
        // ])
//             .then(function (answer) {
//                 //create the engineer 
//                 //add engineer to list
//                 continueQuestions()
//                     .then(function (continueAnswer) {
//                         if (continueAnswer.addTeam === false) {
//                             console.log("exiting")
//                             process.exit()
//                         }
//                         // if yes take back to begining 
//                         addEmployee(continueAnswer)
//                     })
//             })
//     }

//     if (answer.Member[0] === "Intern") {
        // console.log("adding Intern")
        // inquirer.prompt([
        //     {
        //         type: "input",
        //         message: "What is the Intern's Name",
        //         name: "internName"
        //     },
        //     {
        //         type: "input",
        //         message: "What is the Intern's Id",
        //         name: "internID"
        //     },
        //     {
        //         type: "input",
        //         message: "What is the Intren's Email",
        //         name: "internEmail"
        //     },
        //     {
        //         type: "input",
        //         message: "What is the Intern's Github",
        //         name: "internGithub"
        //     },
        //     {
        //         type: "input",
        //         message: "What is the Intern's School Name",
        //         name: "internSchool"
        //     }
        // ])
//         .then(function (answer) {
//             //create the engineer 
//             //add engineer to list
//             continueQuestions()
//                 .then(function (continueAnswer) {
//                     if (continueAnswer.addTeam === "no") {
//                         process.exit()
//                     }
//                     // if yes take back to begining 
//                     addEmployee(continueAnswer)
//                 })
//         })
//     }

//     if (answer.Member[0] === "Manager") {
//         console.log("adding Manager")
//         inquirer.prompt([
            // {
            //     type: "input",
            //     message: "What is the Manager's Name",
            //     name: "managerName"
            // },
            // {
            //     type: "input",
            //     message: "What is the Manager's Id",
            //     name: "managerID"
            // },
            // {
            //     type: "input",
            //     message: "What is the Manager's Email",
            //     name: "managerEmail"
            // },
            // {
            //     type: "input",
            //     message: "What is the Manager's Office Number",
            //     name: "managerNumber"
            // },
//         ])
//         .then(function (answer) {
//             //create the engineer 
//             //add engineer to list
//             continueQuestions()
//                 .then(function (continueAnswer) {
//                     if (continueAnswer.addTeam === "no") {
//                         process.exit()
//                     }
//                     // if yes take back to begining 
//                     addEmployee(continueAnswer)
//                 })
//         })
//     }
// }


// {
//     type: "checkbox",
//     message: "Add a team member",
//     name: "Member",
//     choices: [
//         "Engineer",
//         "Intern",
//         "Manager",
//         "Done adding Members Build team"
//     ]
// },