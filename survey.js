const readline = require('readline');

const user = {
  name: "",
  activity: "",
  music: "",
  meal: "",
  food: "",
  sport: "",
  superpower: ""
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  user.name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    user.activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      user.music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        user.meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          user.food = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            user.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              user.superpower = answer;
              rl.close();
              console.log("---");
              console.log(`My name is ${user.name} and an activity I like is ${user.activity}.`);
              console.log(`While doing that activity I like to listen to ${user.music}.`);
              console.log(`My favourite meal is ${user.meal} and during it I like to eat ${user.food}.`);
              console.log(`My favourvite sport is ${user.sport} and my superpower is ${user.superpower}.`);
            });
          });
        });
      });
    });
  });
});

