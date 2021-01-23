// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.licenses}-informational)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description:
  ${data.description}
 
  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License(s) Used:
  ${data.licenses}

  ## Contribution:
  ${data.name} | GitHub Profile @${data.contributing}

  ## Test:
  ${data.installation}
  
  ## Questions:
 If you have any questions about the prohect, please feel free to email: ${data.email}
  We can also connect on Github at: ${data.contributing}
`;
}

module.exports = generateMarkdown;
