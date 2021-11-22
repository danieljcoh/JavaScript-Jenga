//PROBLEM: Make a sleep debt calculator which can be used weekly to correct sleeping patterns per night.
/*

*/

//Assign each day with a daily-hourly sleep amount
const getSleepHours = day =>{
    day = day.toLowerCase();
    let hoursOfSleep = 0;
    switch (day){
        case "monday":
            hoursOfSleep = 8;
            return hoursOfSleep;
        break;
        case "tuesday":
            hoursOfSleep = 9;
            return hoursOfSleep;
        break;
        case "wednesday":
            hoursOfSleep = 7;
            return hoursOfSleep;
        break;
        case "thursday":
            hoursOfSleep = 8;
            return hoursOfSleep;
        break;
        case "friday":
            hoursOfSleep = 4;
            return hoursOfSleep;
        break;
        case "saturday":
            hoursOfSleep = 10;
            return hoursOfSleep;
        break;
        case "sunday":
            hoursOfSleep = 11;
            return hoursOfSleep;
        break;
        default:
            hoursOfSleep = 0;
            return hoursOfSleep;
        break;
    }
}

//No parameters for this one line function version requires ()
//Add all of the individual day-hours to a single variable
const getActualSleepHours = () => {
    let totalHoursSlept_Weekly = 0;
    totalHoursSlept_Weekly += getSleepHours("Monday");
    totalHoursSlept_Weekly += getSleepHours("Tuesday");
    totalHoursSlept_Weekly += getSleepHours("Wednesday");
    totalHoursSlept_Weekly += getSleepHours("Thursday");
    totalHoursSlept_Weekly += getSleepHours("Friday");
    totalHoursSlept_Weekly += getSleepHours("Saturday");
    totalHoursSlept_Weekly += getSleepHours("Sunday");

    return totalHoursSlept_Weekly;
}

//returns my prefered number of hours of sleep each night for the whole week
const getIdealSleepHours = () => {
    let idealHoursPerNight = 9;
    return idealHoursPerNight * 7;
}

// calculates how much sleep you got compared to how much you wanted to get and then specifies if you slept too much or too little
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours){
        console.log("You got the perfect amount of sleep!");
    } else if(actualSleepHours > idealSleepHours){
        let hoursOverSlept = actualSleepHours - idealSleepHours;
        console.log("You slept " + hoursOverSlept + " hours too much!");
    } else if(actualSleepHours < idealSleepHours){
        let hoursUnderSlept = idealSleepHours - actualSleepHours;
        console.log("You slept " + hoursUnderSlept + " hours too little!");
    }
}


console.log(getActualSleepHours());
console.log(getIdealSleepHours());
console.log(calculateSleepDebt());