    //PROBLEM: 
/*
    Write a program that finds the mutual friends between two arrays of user's friends
*/



// Write your code below
const bobsFollowers = ["Stephen", "Anna", "Ed", "Dan"];
const tinasFollowers = ["Anna", "Ed", "Geo"];

const mutualFollowers = [];


for (let i = 0; i < bobsFollowers.length; i++){
    for (let j = 0; j < tinasFollowers.length; j++){
        if(bobsFollowers[i] === tinasFollowers[j]){
        mutualFollowers.push(tinasFollowers[j]);
        }
    }
}

console.log(mutualFollowers);


