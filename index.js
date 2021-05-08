// Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');
const generateMarkdown = require('./generateMarkdown')

// Create an array of questions for user input


const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "author",
    },
    {
        type: "input",
        message: "Project Title",
        name: "projectTitle",
    },
    {
        type: "input",
        message: "Project Description",
        name: "projectDescription",
    },
    {
        type: "input",
        message: "Installation Instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use your application?",
        name: "instructions",
    },
    {
        type: "input",
        message: "Usage Information?",
        name: "usageInfo",
    },
    {
        type: "input",
        message: "Contribution Guidelines?",
        name: "contribution",
    },
    {
        type: "input",
        message: "Test Instructions?",
        name: "testInstructions",
    },
    {
        type: "list",
        message: "License Type?",
        name: "license",
        choices: [{name: "MIT", value: "MIT"}, {name:"Apache 2.0", value: "Apache%202.0"}, {name: "GPL 3.0", value: "GPL%203.0"}, "None"]
    },
    {
        type: "input",
        message: "Github Username",
        name: "gitUserName",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "userEmail",
    },
]

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data)
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(function (answers) {
        console.log(answers)
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
