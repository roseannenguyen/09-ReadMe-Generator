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

  ## Installation:
  ${data.usage}

  ## License(s) Used:
  ${data.license}

  ## Contributing:
  ${data.name} | GitHub Profile@ ${data.contributing}

  ## Test:
  ${data.installation}
  
  ## Have questions?
 If you have any questions about the prohect, please feel free to email: ${data.email}
  We can also connect on Github at: ${data.contributing}
`;
}

module.exports = generateMarkdown;
