//will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.
//function definition for constructors
var Game = require('./game.js');
var Word = require('./word.js');
var Letter = require('./letter.js');
var inquirer = require('inquirer');

// call your function in here then decrement if it returns false  when
//looking for the files

var prompt = function () {
    inquirer.prompt([{
        message: 'Guess a letter',
        type:'input',
        name:'letter',
        validate: function (input) {
            if (!input.match([/[a-z]/i])){
                return ('Please choose only a letters!')
            }
            else{
                return true;
            }

        }
    }])
        .then(function(answers){
            game(answers.letter);
        });


};

//restarting a game after it has been completed based on users input
var newGame = function () {
    inquirer.prompt([{
        message:" Would you like to play another game?",
        type:'confirm',
        name: 'restart'
    }])
        .then(function(answers){
            if(answers.restart){
                game.init();

            }
            else{
                process.exit();
            }
        });
};

prompt();
