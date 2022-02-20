const generateLicenses = licensesArr => {
    const pickedLicenses = licensesArr

    console.log(pickedLicenses)

    

    for (var i=0; i < pickedLicenses.length; i++){

        if (pickedLicenses[i] === 'Apache'){

            var licenseOne = {
                name: 'Apache',
                link: 'https://choosealicense.com/licenses/apache-2.0/'
            }

            attachLicenses(licenseOne)
        }

        if (pickedLicenses[i] === 'Boost Software'){
            var licenseTwo = {
                name: 'Boost Software',
                link: 'https://choosealicense.com/licenses/bsl-1.0/'
            }
            attachLicenses(licenseTwo)
        }

        if (pickedLicenses[i] === 'MIT'){
           
            var licenseThree = {
                name: 'MIT',
                link: 'https://choosealicense.com/licenses/mit/'
            }
            attachLicenses(licenseThree)
            
        }

        if (pickedLicenses[i] === 'Mozilla Public'){
           
            var licenseFour = {
                name: 'Mozilla Public',
                link: 'https://choosealicense.com/licenses/mit/'
            }
            attachLicenses(licenseFour)
            
        }

        if (pickedLicenses[i] === 'Unilicense'){
           
            var licenseFive = {
                name: 'Mozilla Public',
                link: 'https://choosealicense.com/licenses/mit/'
            }
            attachLicenses(licenseFive)
            
            
        }
    }
    
};

const attachLicenses = newLicense => {
    console.log(newLicense)

    var licenseName = newLicense.name

    var licenseLink = newLicense.link

    return `
    ${licenseName}
    ${licenseLink}

 
    `
}
  

    
//     const pickedLicenses = licensesArr.filter(name => {

//         if(name[0]){
//             return `
// Apache
// https://choosealicense.com/licenses/apache-2.0/
//             `
//         }
//         if (name[1]){ 
//             return `
// Boost Software
// https://choosealicense.com/licenses/bsl-1.0/ 
//             `
//         }
//     console.log(pickedLicenses)


//     })

   




       

   
    




module.exports = templateData => { 

const licenses = templateData.licenses


    return `
# ${templateData.projectTitle}

## Description 
${templateData.description}

## Table of Contents
- [How to Install](#installation)
- [Usage](#usage)
- [Test Instructions](#test-instructions)
- [Contribution](#contribute-to-project)
- [Licenses](#licenses-used)


## Installation
${templateData.installation}

## Usage
${templateData.usage}

## Test Instructions
${templateData.test}

## Contribution
${templateData.contribution}

## Questions
${templateData.questions}
#####Email: [${templateData.email}](${templateData.email})
#####Github: [${templateData.github}](https://github.com/${templateData.github})

## Licenses Used
${generateLicenses(licenses)}
${attachLicenses()}


    `;
} 