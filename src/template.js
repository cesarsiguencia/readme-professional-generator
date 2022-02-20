const generateLicenses = licensesArr => {
    const pickedLicenses = licensesArr

    console.log(pickedLicenses)


        if (pickedLicenses === 'Apache'){
        
            return `
[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)

             
               `
        }

        if (pickedLicenses === 'Boost Software'){
    
            return `
[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) 
            
               `
        }

        if (pickedLicenses === 'MIT'){
        

            return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)            
                        
          `
            
        }

        if (pickedLicenses === 'Mozilla Public'){
        

            return `
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) 

                         
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
${generateLicenses(licenses)}

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
License used for this project ${licenses}. Click on the badge above to be redirected.



    `;
} 


