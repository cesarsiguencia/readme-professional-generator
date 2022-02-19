module.exports = templateData => {
    // console.log(templateData);

    

    return `
# ${templateData.projectTitle}

## Table of Contents
- Description of Projects
- How to Install
- How to Contribute
- Test
- Licenses

## Description 
${templateData.description}

## Installation
${templateData.installation}

Contribute to Project
${templateData.contribution}

## Licenses Used
${templateData.licenses.join(', ')}
    `;
} 