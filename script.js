var num1 = (Math.ceil(Math.random() * 19)) + 1;
var num2 = (Math.ceil(Math.random() * 19)) + 1;
var num3 = (Math.ceil(Math.random() * 19)) + 1;

console.log("for reference, the numbers are: " + num1 + ", " + num2 + ", " + num3);
document.getElementById("raffleWinners").innerHTML = + num1 + ", " + num2 + ", " + num3;

var biggest;

if(num1 > num2 && num1 > num3){
    biggest = num1;
    document.getElementById("jackpots").innerHTML = biggest;
}
else if(num2 > num1 && num2 > num3){
    biggest = num2;
    document.getElementById("jackpots").innerHTML = biggest;
}
else if(num3 > num1 && num3 > num2){
    biggest = num3;
    document.getElementById("jackpots").innerHTML = biggest;
}
else if(num1 == num2 && num1 > num3){
    biggest = num1;
    document.getElementById("jackpots").innerHTML = biggest + " (tie!)";
}
else if(num1 == num3 && num1 > num2){
    biggest = num1;
    document.getElementById("jackpots").innerHTML = biggest + " (tie!)";
}
else if(num3 == num2 && num2 > num1){
    biggest = num2;
    document.getElementById("jackpots").innerHTML = biggest + " (tie!)";
}
else if(num1 == num2 && num2 == num3){
    biggest = num2;
    document.getElementById("jackpots").innerHTML = biggest + " (3-way tie!)";
}


var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var teamLetter = letters[num1-1];

    document.getElementById("winningTeam").innerHTML = "Team " + teamLetter + "!";

var time = num2 * num3;
var timeString;

if(time == 1){
    timeString = "1min";
}
else{
    timeString = time + "mins";
}

var hrs = Math.floor(time/60);
var hrsString;

if(hrs == 0){
    hrsString = "";
}
else if(hrs == 1){
    hrsString = "1hr ";
}
else{
    hrsString = hrs + "hrs ";
}

var mins = time%60;
var minsString;

if(mins == 0){
    minsString = "";
}
else if(mins == 1){
    minsString = "1min";
}
else{
    minsString = mins + "mins";
}
        document.getElementById("playTime").innerHTML = hrsString + minsString;
        document.getElementById("totalMins").innerHTML = time + "mins";