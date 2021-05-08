// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ''
  }
  else {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  # Tables of Contents
  * [Description](#Description)
  * [Installation](#installation)
  * [Usage](#usageInfo)
  * [License](#license)
  * [Contributing](#contribution)
  * [Tests](#testInstructions)
  # Title
  ${data.projectTitle}
  ## Description
  ${data.projectDescription}
  ## Installation
  ${data.installation}
  ## Usage Information
  ${data.usageInfo}
  ## License 
  ${data.license}
  ## Contribution
  ${data.contribution}
  ## Test Instructions
  ${data.testInstructions}
  ### Credit
  My name is ${data.author} and you can contact me by email: ${data.userEmail} or Github: ${data.gitUserName}
  `
}





module.exports = generateMarkdown;