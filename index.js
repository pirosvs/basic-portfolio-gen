// Include fs and inquirer as we will need to take responses to command line questions and write a file with the resopnses
const fs = require("fs");
const inquirer = require("inquirer");

// Create links from user responses
//   .then(function({ github }) {
//     const githubUrl = `https://github.com/${github}`;
// });

// .then(function({ linkedin }) {
//     const linkedinUrl = `https://linkedin.com/${linkedin}`;
// });


// * An HTML document containing the information collected from the prompts should be constructed and written to the
// file system. Be sure to add some CSS styling to the document.

// Use inquirer to ask a series of questions we will add to the portfolio page
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
        type: 'input',
        message: 'Where are you from?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Please enter any information you would like to include in your bio.',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What programming languages do you know?',
        name: 'languages',
    },
    {
        type: 'input',
        message: 'What is your LinkdedIn username?',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your preferred method of communication?',
        name: 'comms',
    },
  ])
  .then((response) => {
    console.log(response)
  }
  );

// Create string literals to put our information into html
var nameInfo =
`<header>
  <h2>Welcome to ${response.name}'s Portfolio Page!</h2>
</header>`;

var bioInfo =
`<div>
  <span>${response.bio}</span>
</div>`;

var locationInfo =
`<div>
  <span>I am currently working out of ${response.location}. I am able to use ${response.language}.</span>
</div>`;

var contactInfo = 
`<div>
    <span>you can find me on [linkedin] and [github]. To contact me, please use [comms]</span>
</div>`;

//   We need to write the html file 
//   writeFile('portfolio.html', ourString, (err) => {
//     if (err) throw err;
//     console.log(`Congratulations! You have created a portfolio page.`);
//   });
  