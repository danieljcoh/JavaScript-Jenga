//Magic 8 Ball Application

let userName = "Daniel";
const userQuestion = "Will the weather be warm tomorrow?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

userName ? console.log(`Hello, ${userName}`) : console.log("Hello!");

console.log("Ahhh! Magic Eight Ball. " + userQuestion);

switch (randomNumber)
    {
        case 0:
        eightBall = "It is certain.";
        break;
        case 1:
        eightBall = "It is decidedly so.";
        break;
        case 2:
        eightBall = "Reply hazy try again.";
        break;
        case 3:
        eightBall = "Cannot predict now.";
        break;
        case 4:
        eightBall = "Do no count on it.";
        break;
        case 5:
        eightBall = "My sources say no.";
        break;
        case 6:
        eightBall = "It's looking good.";
        break;
        case 7:
        eightBall = "Signs point to yes.";
        break;
        default:
        eightBall = "Something went wrong.";
        break;
    }

console.log(eightBall);


