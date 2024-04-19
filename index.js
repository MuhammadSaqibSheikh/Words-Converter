import inquirer from "inquirer";
const Answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter the sentence to count the word:",
    }
]);
const words = Answer.sentence.trim().split("");
console.log(words);
console.log(`Your sentence count is ${words.length} words`);
