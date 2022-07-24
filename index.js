const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Who is the team manager?',
    }
    {
        type: 'input',
        name: 'managerId',
        message: 'What is their employee ID number?',
    }
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is their email address?',
    }
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'What is their office number?',
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Who is the engineer?',
    }
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is their employee ID number?',
    }
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is their email address?',
    }
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is their Github Username?',
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Who is the engineer?',
    }
    {
        type: 'input',
        name: 'internId',
        message: 'What is their employee ID number?',
    }
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is their email address?',
    }
    {
        type: 'input',
        name: 'internSchool',
        message: 'What school do they attend?',
    }
]