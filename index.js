#! /usr/bin/env node
//Import the inquirer
import inquirer from "inquirer";
//Import the chalk
import chalk from "chalk";
//Console Welcome massage
console.log(chalk.blueBright.bold("\t***************************************"));
console.log(chalk.yellowBright.bold("\tWelcome to 'Areesh_Iqbal's Word Counter"));
console.log(chalk.blueBright.bold("\t***************************************"));
//Declare a constant answer and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.cyan.bold("Enter your sentence to count the words: "),
    },
]);
const words = answers.Sentence.trim().split(" ");
//Print an array of words to the console
console.log(words);
//Print the words count of the sentence to the console
console.log(chalk.cyan.bold(`Your sentence word count is ${words.length}`));
