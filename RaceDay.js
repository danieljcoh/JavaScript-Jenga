/*
    A race is right around the corner: 
    Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). \
    They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

    Early adults receive a race number at or above 1000.
    All others receive a number below 1000.

Start time:

    Adult registrants run at 9:30 am or 11:00 am.
        Early adults run at 9:30 am.
        Late adults run at 11:00 am.
    Youth registrants run at 12:30 pm (regardless of registration).

*/

let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistered = true;
const runnersAge  = 7;

if(earlyRegistered && runnersAge >= 18){
  raceNumber += 1000;
}

if(runnersAge >= 18 && earlyRegistered){
  console.log("Racer #: " + raceNumber + ". " + "The race will start at 9:30 AM.");
} else if(runnersAge >= 18){
  console.log("Racer #: " + raceNumber + ". " + "The race will start at 11:00 AM.");
} else {
  console.log("Racer #: " + raceNumber + ". " + "The race will start at 12:30 PM.");
}




