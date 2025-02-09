// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = [
  { type: "input", name: "title", message: "What is the title of your project?" },
  { type: "input", name: "description", message: "Provide a description for your project:" },
  { type: "input", name: "installation", message: "What are the installation instructions?" },
  { type: "input", name: "usage", message: "How do you use this project?" },
  { type: "input", name: "contributing", message: "Provide contribution guidelines:" },
  { type: "input", name: "tests", message: "What are the test instructions?" },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application:",
    choices: ["MIT", "Apache 2.0", "GPLv3", "BSD 3-Clause", "None"],
  },
  { type: "input", name: "github", message: "Enter your GitHub username:" },
  { type: "input", name: "email", message: "Enter your email address:" },
];

// TODO: Create a function to write README file
function generateREADME(answers) {
  const licenseBadge = 
   answers.license !== "None" 
    ? `![License](https://img.shields.io/badge/License-${answers.license.replace(/\s/g, "%20")}-blue.svg)` 
    : "";

  return `# ${answers.title}
${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, please reach out to me via:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const readmeContent = generateREADME(answers);

    fs.writeFileSync("README.md", readmeContent);
    console.log("Successfully created README.md!");
  } catch (error) {
    console.error("Error creating README:", error);
  }
}

// Function call to initialize app
init();
