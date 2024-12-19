import readline from "readline";
import https from "https";
import chalk from "chalk";

const currencyConvert = (amount, rate) => {
  return (amount * rate).toFixed(2);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = "022907a9dab696046ea660c0";
const url =
  "https://v6.exchangerate-api.com/v6/022907a9dab696046ea660c0/latest/USD";

https.get(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;
    console.log(chalk.greenBright("Welcome to Currency Converter"));
    // console.log(rates);

    rl.question(chalk.yellowBright.bold("Enter amount in USD: "), (amount) => {
      rl.question(chalk.yellowBright.bold("Enter Currency: "), (currency) => {
        const rate = rates[currency.toUpperCase()];

        if (rate) {
          console.log(
            chalk.bgBlue.white.bold(
              `${amount} USD is approximately ${currencyConvert(
                amount,
                rate
              )} ${currency.toUpperCase()}`
            )
          );
        } else {
          console.log(chalk.bgRed.bold(`Invalide Currency code!`));
        }
        rl.close();
      });
    });
  });

  res.on("error", (err) => {
    console.log(chalk.redBright(`${err.message}`));
  });
});
