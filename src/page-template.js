const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const fs = require('fs');


const html = () => 
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="output/styles.css">
    <title>Team Generator </title>
</head>

<body>
    <header class="jumbotron bg-danger  text-center ">
        <h1>${teamname}</h1>
        <h2>My team</h2>
    </header>

    <main class="container my-5">
        <div class="d-flex justify-content-center flex-wrap">
            //Cards go here
    
            </div>
    </main>


    <script src="https://kit.fontawesome.com/91a2b0647a.js" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
</body>

</html>
`


const managerCard = () =>
`  <div class="card m-4">
<div class="card-header bg-primary text-white">
    <h3>Name</h3>
    <h4><i class="fas fa-mug-hot"></i> Title: Manager </h4>
</div>
<div class="card-body bg-light p-4">
    <p class="card-text bg-white border-top border-right border-left p-2 my-0">ID: 1</p>
    <p class="card-text bg-white border p-2 my-0">Email: @.</p>
    <p class="card-text bg-white border-bottom border-right border-left p-2 my-0">Office Number:
        undefined</p>
</div>
</div>
`

const internCard = () => 
`<div class="card m-4">
                <div class="card-header bg-primary text-white">
                    <h3>Name</h3>
                    <h4><i class="fas fa-user-graduate"></i> Title: student </h4>
                </div>
                <div class="card-body bg-light p-4">
                    <p class="card-text bg-white border-top border-right border-left p-2 my-0">ID: 2</p>
                    <p class="card-text bg-white border p-2 my-0">Email: @.</p>
                    <p class="card-text bg-white border p-2 my-0">GitHub : Use.</p>
                    <p class="card-text bg-white border-bottom border-right border-left p-2 my-0">school: School Name
                    </p>
                </div>
            </div>
`

const engineerCard = () =>  
`<div class="card m-4">
<div class="card-header bg-primary text-white">
    <h3>Name</h3>
    <h4><i class="fas fa-glasses"></i> Title: Engineer </h4>
</div>
<div class="card-body bg-light p-4">
    <p class="card-text bg-white border-top border-right border-left p-2 my-0">ID: 3</p>
    <p class="card-text bg-white border p-2 my-0">Email: @.</p>
    <p class="card-text bg-white border-bottom border-right border-left p-2 my-0">GitHub : Username
    </p>
</div>
`