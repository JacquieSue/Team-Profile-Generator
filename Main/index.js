const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

// const generateHtml = require('./dist/team.html');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            mesage: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the team manager's office number?",
        },
        {
            type: 'input',
            name: 'adding',
            message: "Which type of team member would you like to add?"
        },
        {
            type: 'input',
            name: 'name',
            mesage: "What is your engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineer's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your engineer's email?",
        },
        {
            type: 'input',
            name: 'GitHub',
            message: "What is your engineer's GitHub username?",
        },
        {
            type: 'input',
            name: 'adding',
            message: "Which type of team member would you like to add?",
        },
        {
            type: 'input',
            name: 'name',
            mesage: "What is your intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your intern's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your intern's email?",
        },
        {
            type: 'input',
            name: 'GitHub',
            message: "What is your inter's school?",
        },
        {
            type: 'input',
            name: 'adding',
            message: "Which type of team member would you like to add?",
        },
    ])
    .then((answers) => {
        // const htmlPageContent = generateHtml(answers);

        fs.writeFile('team.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Succesfully generated team profile!')
);
});
