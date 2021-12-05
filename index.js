var readlineSync = require('readline-sync');

 var score = 0;

 var highscore = {
   name: "virendra",
   score: "4"
 }

 var username = readlineSync.question("Type your name ?\n");
 console.log("wellcome  " + username);

var questionone = "Are you eligible choose prime minster ?\n  ";
var answerone = "yes";

 var userAnswer =readlineSync.question(questionone);

if ( userAnswer === answerone)
{
console.log("good! you are responsible person")

}
else
{
  console.log("okay!")

}
var input = readlineSync.question("how do you know virendra ? \n" );
 console.log("Okay! ")
console.log("Tell  me something  about virendra..");


function play(question,answer)
{
 var useranswer = readlineSync.question(question);

  if(useranswer === answer )
  {
    console.log("right! ");

    score = score +1;
  } 
  else
  {
    console.log("wrong!");

    
  }

console.log(score);
}

//questions
//array obj
var questionone = {
  question:"love or hate ?\n",
  answer:"love"
}

var questiontwo = {
  question:"help or selfish ?\n",
  answer:"help"
}

var questiontthree = {
  question:"hard work or smart work (or both) ?\n",
  answer:"both"
}

var questionfour = {
  question:"rude or kind ?\n",
  answer:"kind"
}
var questionfive = {
  question:"am i in your heart ?\n",
  answer:"yes"
}

//loop

var questions=[questionone,questiontwo,questiontthree,questionfour,questionfive]

for(var i=0;i< questions.length;i++)
{

  var currentquestion = questions[i];

  play(currentquestion.question,currentquestion.answer);
  
}


console.log("check again\n");
console.log("Nice to talk to you\n");

console.log("your score is: "+score);

console.log("highscore holder");
console.log(highscore);

console.log("if you break the high score\n send screenshot  to me -virendaranagoriya11@gmail.com- i will update\n thankyou..");


