const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const engineerCard = require('./lib/engineerCard');
const internCard = require('./lib/internCard');
const managerCard = require('./lib/managerCard');
let team = [];
let middlePage = '';

const questions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the team managers email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the team managers office number?',
        name: 'office',
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineers name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the engineers id?",
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the engineers email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the engineers GitHub username?',
        name: 'github',
    }
];

const internQuestions = [
    {
        type: 'input',
        message: "What is the interns name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the interns id?",
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the interns email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What school is the intern from?',
        name: 'school',
    }
];

function inIt() {
    console.log('Please build your team')
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        const manager = new Manager(answers.name,answers.id,answers.email,answers.office);
        let newManagerCard = managerCard.managerCard(answers);
        middlePage = middlePage + newManagerCard;
        team.push(manager);
        chooseTeamMemberType();
    })
    .catch((err) => {
        console.log(err);
    })
}

//prompts to pick what type of team member user wants
function chooseTeamMemberType() {
    inquirer
    .prompt(
        {
        type: 'list',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
        name: 'member',
    })
    .then(data => {
        switch(data.member) {
            case 'Engineer':
                promptEngineerQuestions();
                break;
            case 'Intern':
                promptInternQuestions();
                break;
            default:
                createTeam();
                break;
        }
    })
}

//prompts questions about engineer
function promptEngineerQuestions() {
    inquirer
    .prompt(engineerQuestions)
    .then((answers) => {
        const engineer = new Engineer(answers.name,answers.id,answers.email, answers.github);
        team.push(engineer);
        let newEngineerCard = engineerCard.engineerCard(answers);
        middlePage = middlePage + newEngineerCard;
        chooseTeamMemberType();
    })
}

// prompts questions about intern
function promptInternQuestions() {
    inquirer
    .prompt(internQuestions)
    .then((answers) => {
        const intern = new Intern(answers.name,answers.id,answers.email,answers.school);
        team.push(intern);
        let newInternCard = internCard.internCard(answers);
        middlePage = middlePage + newInternCard;
        chooseTeamMemberType();
    })
}

function createTeam() {
    const fullPage = topOfPage + middlePage + bottomOfPage;
    fs.writeFile(__dirname + '/dist/index.html', fullPage, (error) => {
        console.log(error);
    })
}

// initalizes app
inIt();

const topOfPage = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href='./style.css' rel='stylesheet'>
</head>
<body>
<header>
    <h1>My Team</h1>
</header>
<main class='container'>`;

const bottomOfPage = 
`</main>
</body>
</html>`;