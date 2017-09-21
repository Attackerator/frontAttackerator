'use strict';

const inquirer = require('inquirer');
const program = require('commander');
const clear = require('clear');
const figlet = require('figlet');
const client = require('./client.js');
const chalk = require('chalk');
const fs = require('fs');
const os = require('os');

var tempDir = os.tmpdir();


clear();
console.log(
  chalk.bold.yellow(
    figlet.textSync('Attack', { horizontalLayout: 'full' })
  )
);
console.log(
  chalk.bold.blue(
    figlet.textSync('erator', { horizontalLayout: 'full' })
  )
);

program
  .version('0.0.1')
  .description('Character management for D20 RPG systems');

program
  .command('newUser <username> <email> <password>')
  .alias('nu')
  .description('creat a new user')
  .action((username, email, password) => {
    client.newUser({username, email, password}).then(res => fs.writeFileSync(`${tempDir}/.attackeratorjwt.txt`, res.text));
  });


program.parse(process.argv);

/*
function checkUserExists(){
  var questions = [{
    name: 'login',
    type: 'checkbox',
    message: 'Log in or Create new Account',
    choices: ['Log in', 'Create new Account']
  }];
  inquirer.prompt(questions);
}

checkUserExists(function(){
  console.log(arguments);
});

function getSignIn(answer) {
  var questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Enter your Attackerator username:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your username';
        }
      }
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your password:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your password';
        }
      }
    }
  ];
  if ( answer === 'Log in' ){
    inquirer.prompt(questions);
  }
}
*/
