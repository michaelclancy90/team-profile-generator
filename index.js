const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML')

const teamMembers = []

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Who is the team manager?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?',
    },
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Who is the engineer?',
    },
    {
        type: 'input',
        name: 'Id',
        message: 'What is their employee ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their Github Username?',
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Who is the intern?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school do they attend?',
    },
]

const roleQuestion = [
    {
        type: 'list',
        name: 'role',
        message: "What is the next team member's role?",
        choices: ['Engineer', 'Intern', 'None'],
    }
]

function init () {
    inquirer
    .prompt(managerQuestions)
    .then(({name, id, email, officeNumber}) =>{
         const newManager = new Manager(name, id, email, officeNumber);
         teamMembers.push(newManager);
         console.log(teamMembers);
        nextTeamMember()
    }) 
}

function nextTeamMember(){
    inquirer
    .prompt(roleQuestion)
    .then(({role}) => {

    if (role === 'Intern'){
        intern();
    } else if (role === 'Engineer'){
        engineer()
    } else {
        
        writeToFile()
    }
    })
};

function intern(){
    inquirer
    .prompt(internQuestions)
    .then(({name, id, email, school}) =>{
        const newIntern = new Intern(name, id, email, school);
        teamMembers.push(newIntern);
        console.log(teamMembers);
       nextTeamMember()
    })
}

function engineer(){
    inquirer
    .prompt(engineerQuestions)
    .then(({name, id, email, github}) =>{
        const newEngineer = new Engineer(name, id, email, github);
        teamMembers.push(newEngineer);
        console.log(teamMembers);
       nextTeamMember()
    })
}

function writeToFile(teamMembers,) {
    let data =  generateHTML(teamMembers)
    fs.writeFile('dist/index.html', data, err =>{
        err ? console.error(err) : console.log('Success!')
    });

    
}
init ()