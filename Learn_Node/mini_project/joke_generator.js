import https from "https";
import chalk from "chalk";

const getJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";
  let data = "";
  https.get(url, (res) => {
    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      const joke = JSON.parse(data);
      console.log(`Here is a random ${joke.type} joke`);
      console.log(chalk.red(joke.setup));
      console.log(chalk.blue.bgRed.bold(joke.punchline));
    });

    res.on("error", (err) => {
      console.log(chalk.red(err.message));
    });
  });
};

getJoke();
