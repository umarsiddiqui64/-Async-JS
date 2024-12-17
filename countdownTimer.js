const readline = require("readline"); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter countdown time in seconds: ", (input) => {
  let remainingTime = parseInt(input);

  if (isNaN(remainingTime) || remainingTime <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  console.log(`Countdown started for ${remainingTime} seconds.`);

  const countdownInterval = setInterval(() => {
    if (remainingTime > 0) {
      console.log(`Time remaining: ${remainingTime} seconds`);
      remainingTime--;
    } else {
      console.log("Countdown Complete!");
      clearInterval(countdownInterval); 
      rl.close();
    }
  }, 1000);

  console.log('Press "s" to stop the countdown.');
  const checkForKeypress = () => {
    setTimeout(() => {
      process.stdin.once("data", (key) => {
        if (key.toString().trim() === "s") {
          console.log("Countdown stopped manually.");
          clearInterval(countdownInterval); 
          rl.close();
        } else {
          checkForKeypress(); 
        }
      });
    }, 0);
  };

  checkForKeypress(); 
});
