const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);

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

init();

