//PROBLEM: Make a program that matches an emoticon with an expressive word.


//Assign each day with a daily-hourly sleep amount

// Write your function here:
function toEmoticon(emoticon){
    switch(emoticon){
        case "shrug":
        return '|_{"}_|';
    break;
        case "smiley face":
        return ':)';
    break;
        case "frowny face":
        return ':(';
    break;
        case "winky face":
        return ';)';
    break;
        case "heart":
        return "<3";
    break;
        default:
        return '|_(* ~ *)_|';
    break;
    }
}