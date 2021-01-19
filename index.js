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
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "username",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "test",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
    ]);
};

// function to write README file
async function writeToFile(fileName, data) { }

// function to initialize program
// function init(response) { }

const init = async () => {

    try {
        const data = await questions();

        const fileName = generateMarkdown(data);

        await writeFileAsync('README.md', fileName);

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
