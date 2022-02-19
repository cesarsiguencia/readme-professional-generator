module.exports = templateData => {
    // console.log(templateData);

    

    return `
# ${templateData.projectTitle}

## Description 
${templateData.description}

## Table of Contents
- How to Install
- How to Contribute
- Test
- Licenses


## Installation
${templateData.installation}

## Usage

##Contribute to Project
${templateData.contribution}

## Licenses Used
${templateData.licenses.join(', ')}
    `;
} 