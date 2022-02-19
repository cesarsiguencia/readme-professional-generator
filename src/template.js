module.exports = templateData => {
    // console.log(templateData);

    

    return `
# ${templateData.projectTitle}

## Description 
${templateData.description}

## Table of Contents
- [How to Install](#usage)
- Usage
- Test Instructions
- How to Contribute
- Test
- Licenses


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
    `;
} 