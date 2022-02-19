

const fs = require('fs');
const generatePage = require('./src/template.js')

const inquirer = require('inquirer');  // the package that allows us to use questionaire in the terminal

const readMeContent = () => {

    return inquirer.prompt([
            {
                type:'input',
                name:'projectTitle',
                message:'What is the title of your project? (Required)',
                validate: titleInput => {
                    if (titleInput) {
                      return true;
                    } else {
                      console.log('Project title needed!');
                      return false;
                    }
                  }
            },

            {
                type: 'input',
                name: 'description',
                message: 'Enter a brief description of this project (Required)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                      return true;
                    } else {
                      console.log('Enter a description!');
                      return false;
                    }
                }
            },

              {
                type: 'input',
                name: 'installation',
                message: 'Explain the installation instructions for this project ',
                validate: installationInput => {
                    if (installationInput) {
                      return true;
                    } else {
                      console.log('Enter instructions!');
                      return false;
                    }
                }
            },


            {
                type: 'input',
                name: 'contribution',
                message: 'Describe the contribution guidelines.',
                validate: contributionInput => {
                    if (contributionInput) {
                      return true;
                    } else {
                      console.log('Enter contribution!');
                      return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'test',
                message: 'Write a test here.',
                validate: testInput => {
                    if (testInput) {
                      return true;
                    } else {
                      console.log('Test needed!');
                      return false;
                    }
                }
            },

            // {
            //     type: 'confirm',
            //     name: 'confirmAbout',
            //     message: 'Would you like to enter some information about yourself for an "About" section?',
            //     default: true
            // },

            {
                type: 'input',
                name: 'about',
                message: 'Provide some information about yourself:',
                when: ({ confirmAbout }) => {
                  if (confirmAbout) {
                    return true;
                  } else {
                    return false;
                  }
                }
            },
            {
                type: 'checkbox',
                name: 'licenses',
                message: 'What licenses did you use? (Check all that apply)',
                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
              }
        ])
}

readMeContent()
    .then(answers => {
        console.log(answers);

        const pageHTML = generatePage(answers);

            fs.writeFile('./README.md', pageHTML, err => {
                if (err) throw new Error(err);
        
                console.log('Page created! Check out index.html in this directory to see it!');
            });

    })
       

