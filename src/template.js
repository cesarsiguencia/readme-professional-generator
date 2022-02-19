module.exports = templateData => {
    // console.log(templateData);

    

    return `
# ${templateData.projectTitle}

## Description 
${templateData.description}

## Table of Contents
- [How to Install](#installation)
- [Usage](#usage)
- [Test Instructions](#test-instructions)
- [How to Contribute](#contribute-to-project)
- [Licenses](#licenses-used)


## Installation
${templateData.installation}

## Usage
${templateData.usage}

## Test Instructions
${templateData.test}

## Contribute to Project
${templateData.contribution}

## Licenses Used
${templateData.licenses.join(', ')}

## Questions
    `;
} 