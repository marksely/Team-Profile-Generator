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
    },
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        choices: ['Enginner', 'Intern', "I don't want to add any more team members"],
        name: 'member-type',
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
    })
    .catch((err) => {
        console.log(err);
        chooseTeamMemberType();
    })
}

function chooseTeamMemberType() {
    inquirer
    .prompt(
        {
        type: 'list',
        message: 'What type of team member would you like to add?',
        choices: ['Enginner', 'Intern', "I don't want to add any more team members"],
        name: 'member-type',
    })
    .then((answer) => {
        console.log(answer)
        if(answer.member-type === 'Engineer') {
            promptEngineerQuestions();
        } else if(answer.member-type === 'Intern'){
            promptInternQuestions();
        } else {
            return; //aka get application to quit and generate html
        }
    })
}


function promptEnginerQuestions() {
    inquirer
    .prompt(

    )
}

function promptInternQuestions() {
    inquirer
    .prompt(

    )
}
inIt();