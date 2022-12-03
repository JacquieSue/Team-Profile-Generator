const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const team = [];

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
            mesage: "What is your employee's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your employee's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your employee's email?",
        },
        {
            type: 'input',
            name: 'GitHub',
            message: "What is your employee's GitHub username?",
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
        const htmlPageContent = generateHtml(answers);

        fs.writeFile('team.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Succesfully generated team profile!')
);
});

function addEngineer() {
    inquirer
        .prompt([
            // Add prompts for Name, Id, Email, GitHub
        ])
        .then((answers) => {
            const engineer = new Engineer({name, id, email, github});
            team.push(engineer);
            addMoreMembers();
        })
}

function addIntern() {

}

function addManager() {

}

function addMoreMembers() {
    // Choices between Engineer, Intern, I'm Done
    // If Engineer, run addEngineer() if I'm Done then buildTeam()
}

function buildTeam() {
    // Write file based off of team array
}

// You want your first prompt to be for your manager, then users should receive a prompt asking if they want to add more members
// If user selects add more members, they should be prompt to choose an intern or an engineer
// You will have 2 separate prompts depending on if they picked intern or engineer

// module.exports = 
