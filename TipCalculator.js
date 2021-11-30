//PROBLEM: Make a calculator that calculates the tip percentage and total based on the level of satisfaction.
/*

*/

//Assign each day with a daily-hourly sleep amount

const tipCalculator = (quality, total) => {
    switch (quality) {
        case 'bad':
            return total * .05;
        case 'ok':
            return total * .15;
        case 'good':
            return total * .20;
        case 'excellent':
            return total * .30;
        default:
            return total * .18;

    }
}