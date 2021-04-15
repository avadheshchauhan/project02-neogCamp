const chalk = require('chalk');
let readlineSync = require('readline-sync');
let score = 0;

console.log("====================");
console.log(chalk.bold.white("    Marvel Cinematic Universe & DragonBallZ"));
console.log("====================");

let userName = readlineSync.question("Enter Your Name: ");
console.log("Welcome " + userName.toUpperCase())
console.log("----------------------------");
console.log(chalk.bold.magenta("QUIZ Rules & Instructions:"));
console.log(chalk.bold.magenta("1) There will be Quiz on two topics i.e.\n 1] MCU \n 2] DragonballZ"));
console.log(chalk.bold.magenta("2) Each question will give you 1 point if you answer correctly and -1 for wrong answer."));
console.log(chalk.bold.magenta("3) First part is about Dragonballz and second part is about Marvel Cinematic Universe."));
console.log(chalk.bold.magenta("4) Both part will have 5-5 questions with 4 options."));

console.log("\n");

function quiz(question, answer){
  let userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log(chalk.bold.green("You Are Right!"));
    score++;
  }
  else{
    console.log(chalk.bold.red("You Are Wrong!"));
    score--;
  }
  console.log(chalk.bold.yellow("Score is: " + score));
  console.log("----------------------------");  
}

console.log(chalk.bgBlue("      Part 1      "));
console.log(chalk.bold.blue("     MCU QUIZ    "));

let mcu = [{
  question: "1] What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\na) 2005\nb) 2008\nc) 2010\nd) 2012\n",
  answer: "b"
},{
  question: "2] What is the name of Thor’s hammer?\na) Mjornir\nb) Vanir\nc) Aesir\nd) Norn\n",
  answer: "a"
},{
  question:"3] What is the Iron-Man suit actually made up of??\na) Prometheum \nb) A Vibranium-Adamantium alloy \nc) A Gold-Titanium alloy \nd)Uru\n",
  answer:"c"
},{
  question: "4] What is Captain America’s shield made of?\na) Adamantium\nb) Vibranium\nc) Promethium\nd) Carbonadium\n",
  answer: "b"
},{
  question: "5] Before becoming Vision, what is the name of Iron Man’s A.I. butler?\na) H.O.M.E.R.\nb) A.L.F.R.E.D.\nc) F.R.I.D.A.Y.\nd) J.A.R.V.I.S.\n",
  answer: "d"
}]

for(let i = 0; i < mcu.length; i++){
  let currentQuestion = mcu[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}


console.log(chalk.bgBlue("      Part 2      "));
console.log(chalk.bold.blue("     DragonBallZ QUIZ    "));

let dbz = [{
  question:"1] During the Saiyan Saga, how does Goku reach King Kai's planet?\na) By making a wish with the Dragon Balls \nb) By teleporting there instantly \nc) By travelling along Snake Way \nd)Via High spedd vehicle\n",
  answer:"c"
},{
  question:"2] What item is used to restore a wounded Z fighter to full health?\na) Z Sword \nb) Saiyan hair \nc) Capsule Corp medicine \nd)Senzu bean\n",
  answer:"d"
},{
  question:"3] Who does Captain Ginyu serve?\na) Cell \nb) Freiza \nc) Lord Slug \nd)Turles\n",
  answer:"b"
},{
  question:"4] What are the names of King Kai's little buddies?\na) Bubbles and Gregory \nb) Bobo and John \nc) Bernie and Jim \nd)Bonobo and Garrett\n",
  answer:"a"
},{
  question:"5] What planet does Vegeta come from??\na) Planet Z103 \nb) Planet Freiza \nc) Planet Vegeta \nd) Planet of the Kais\n",
  answer:"c"
}];

for (var i = 0; i < dbz.length; i++){
   var currentQuestion = dbz[i];
   quiz(currentQuestion.question, currentQuestion.answer);
}


console.log(chalk.green.bold("           ***Game Over***"));

console.log(chalk.green.bold("           YOUR FINAL SCORE IS:", score));
console.log(chalk.bold.red("      THANK YOU FOR PLAYING THE QUIZ"));