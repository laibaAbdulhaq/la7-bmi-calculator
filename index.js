#! /usr/bin/env node
import inquirer from "inquirer";
let { name } = await inquirer.prompt({
    name: "name",
    message: "Glad to see here! what is your name"
});
const weightInKg = await inquirer.prompt({
    name: "weight",
    type: "number",
    message: `okay well ${name} can you tell me your weight in kg`
});
const heightInMeters = await inquirer.prompt({
    name: "height",
    type: "number",
    message: "now tell me your height in meters"
});
let bmi = weightInKg.weight / (heightInMeters.height * heightInMeters.height);
console.log(`${name}! your BMI is ${bmi}`);
