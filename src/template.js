module.exports = templateData => {
    console.log(templateData);

    

    return `
    # ${templateData.projectTitle} 

    ### ${templateData.description}

Choose numbers.

Choose special characters.

Your password can be from 8 to 128 characters long.


### Website Link
https://cesarsiguencia.github.io/your-personal-password-generator/

### Screenshot
![Screenshot 1](screenshot/password-generator-screenshot.jpeg)
    `;
} 