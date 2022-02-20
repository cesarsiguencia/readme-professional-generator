const generateLicenses = licensesArr => {
    const pickedLicenses = licensesArr

    console.log(pickedLicenses)


        if (pickedLicenses === 'Apache'){
        
            return `
License: Apache

[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)  
Link: https://choosealicense.com/licenses/apache-2.0/
             
               `
        }

        if (pickedLicenses === 'Boost Software'){
    
            return `
License: Boost Software

[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)  
Link: https://choosealicense.com/licenses/bsl-1.0/   
            
               `
        }

        if (pickedLicenses === 'MIT'){
        

            return `
License: MIT
Link: https://choosealicense.com/licenses/mit/             
                        
          `
            
        }

        if (pickedLicenses === 'Mozilla Public'){
        

            return `
License: Mozilla Public
Link: https://choosealicense.com/licenses/mit/
                         
        `
            
        }

        if (pickedLicenses === 'Unilicense'){
            
            
            return `
License: Unilicense
Link: https://choosealicense.com/licenses/unlicense/
                                     
        `
        }

    
};

// const attachLicenses = newLicense => {
//     console.log(newLicense)

//     var licenseName = newLicense.name

//     var licenseLink = newLicense.link

//     return `
//     ${licenseName}
//     ${licenseLink}

 
//     `
// }
  

    
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



    `;
} 


