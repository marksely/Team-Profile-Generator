const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'manager-name',
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'manager-id',
    },
    {
        type: 'input',
        message: 'What is the team managers email?',
        name: 'manager-email',
    },
    {
        type: 'input',
        message: 'What is the team managers office number?',
        name: 'manager-office',
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineers name?",
        name: 'engineer-name',
    },
    {
        type: 'input',
        message: "What is the engineers id?",
        name: 'engineer-id',
    },
    {
        type: 'input',
        message: 'What is the engineers email?',
        name: 'engineer-email',
    },
    {
        type: 'input',
        message: 'What is the engineers GitHub username?',
        name: 'engineer-office',
    }
];

const internQuestions = [
    {
        type: 'input',
        message: "What is the interns name?",
        name: 'intern-name',
    },
    {
        type: 'input',
        message: "What is the interns id?",
        name: 'intern-id',
    },
    {
        type: 'input',
        message: 'What is the interns email?',
        name: 'intern-email',
    },
    {
        type: 'input',
        message: 'What school is the intern from?',
        name: 'intern-school',
    }
];

function inIt() {
    console.log('Please build your team')
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
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
        console.log(data);
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
        console.log(answers);
        chooseTeamMemberType();
    })
}

// prompts questions about intern
function promptInternQuestions() {
    inquirer
    .prompt(internQuestions)
    .then((answers) => {
        console.log(answers);
        chooseTeamMemberType();
    })
}

// initalizes app
inIt();