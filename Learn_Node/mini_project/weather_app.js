// create weather app in node js using CLI readline module and chalk module thrugh
// which user can get the weather of any city by entering the city name.
// using Weather API: https://openweathermap.org/api
// API key: 2e2f6b3f9e6e4c7c3d3b7b6e7b7b6e7b
// API endpoint: api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question(chalk.blue("Enter the city name: "), (city) => { // async function
    try {
        const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e2f6b3f9e6e4c7c3d3b7b6e7b7b6e7`);
        console.log(chalk.green(`The weather of ${city} is ${response.data.weather[0].description}`));
    } catch (error) {
        console.log(chalk.red("City not found!"));
    }
    rl.close();
}
);

rl.on("close", () => {
    console.log(chalk.yellow("Thanks for using our weather app!"));
}
);

// Run this file using node weather_app.js