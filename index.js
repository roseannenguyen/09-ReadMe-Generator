const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// array of questions for user
const questions = (data) => {
    return inquirer.prompt([
        {
            type: "message",
            name: "create",
            message:
                'This documents generates ReadMe files for your projects. Click enter to proceed!',
                
        },
        {
            type: "input",
            name: "name",
            message: "What's your name?",
        },

        {
            type: "input",
            name: "contributing",
            message: "What's your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What's the best email for someone to reach out to you?",
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description about your project.",
        },
        {
            type: "input",
            name: "installation",
            message: "If applicable, describe what was installed in the project.",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project used for?",
        },
        {
            type: "input",
            name: "test",
            message: "Is there a test included in the project?",
        },
        {
            type: "list",
            name: "licenses",
            message: "Choose the following licenses that best fits your project:",
            choices: [
                "MIT",
                "GNU",
                "Apache",
                "GPL",
                "BSD",
                "Eclipse",
                "Academic",
                "ISC",
                "Creative Commons",
                "Mozilla",
                "Open Data Commons",
                "Pearl",
                "SIL",
                "Not listed",
                "N/A",
            ]
        },
    ]);
};

const init = async () => {

    try {
        const data = await questions();

        const fileName = generateMarkdown(data);

        await writeFileAsync('READMEExample.md', fileName);

        console.log('Successfully wrote to README.md');
    } catch (err) {
        console.log(err);
    }
};
// function call to initialize program
init();

// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
