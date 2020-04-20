// FIRSTTEST
function testYourself1() {
    var question1 = prompt("How many days of tahajjud do you pray in a week");
    if (question1 <= 7 ) {
         answer1 = (question1 * 100) / 7; 
        document.getElementById("answerDisplay1").innerText = answer1;
        document.getElementById("answerDisplay1").textContent = answer1;
        
    }
    else  if (question1 > 7 ) {
        document.getElementById("answerDisplay5").innerText = "Your input number is more than the days of a week.....you're a goddamn liar";
        document.getElementById("answerDisplay5").textContent = "Your input number is more than the days of a week.....you're a goddamn liar";
    }
    else {
        document.getElementById("answerDisplay5").innerText = "Error.....that's not a valid number";
        document.getElementById("answerDisplay5").textContent = "Error.....that's not a valid number";
    }
}

// SECONDTEST
function testYourself2() {
    var question2 = prompt("How many days of duhaa do you pray in a week");
if (question2 <= 7 ) {
    var answer2 = (question2 * 100) / 7; 
    document.getElementById("answerDisplay2").innerText =  "The answer for number 2 is " + answer2;
    document.getElementById("answerDisplay2").textContent =  "The answer for number 2 is " + answer2;
}
else if (question2 > 7 ) {
    document.getElementById("answerDisplay2").innerText =  "Your input number is more than the days of a week.....you're a goddamn liar";
    document.getElementById("answerDisplay2").textContent =  "Your input number is more than the days of a week.....you're a goddamn liar";
    document.write("")
}
else {
    document.getElementById("answerDisplay2").innerText =  "Error.....that's not a valid number " ;
    document.getElementById("answerDisplay2").textContent =  "Error.....that's not a valid number " ;
}
}

// THIRDTEST
function testYourself3() {
    alert("How often do you do your morning and evening adhkaar..... 2 in a day with a total of 14 possible")
var question3 = prompt("How many times do you do adhkaar in a week")
if (question3 <= 14 ) {
    var answer3 = (question3 * 100) / 14; 
    document.getElementById("answerDisplay3").innerText = "The answer for number 3 is " + answer3;
    document.getElementById("answerDisplay3").textContent = "The answer for number 3 is " + answer3;
}
else if (question3 > 14 )  {
    document.write("Your input number is more than the possible days of a week, you can only have two in a day and 14 times in a week.....you're a goddamn liar")
}
else {
    document.write("Error.....that's not a valid number")
}

}
//  FOURTHTEST
function testYourself4() {
    alert("Have you started observing your 'Rawaatib' solat")
var question4 = prompt("How many do you observe in a day")
if (question4 <= 14 ) {
    var answer4 = (question4 * 100) / 14; 
    document.getElementById("answerDisplay4").innerText = "The answer for number 4 is " + answer4;
    document.getElementById("answerDisplay4").textContent = "The answer for number 4 is " + answer4;
}
else if (question4 > 14 ) {
    document.write("Your input number is more than the numbers of Rawaatib")
}
else {
    document.write("Error.....that's not a valid number")
}
}

//FIFTHTEST
function testYourself5() {
    alert("Have you started doing muraaja'a(revision) of the Qur'an");
var minorquestion5 = prompt("How many juz do you have up in your head")
var question5 = prompt("How many pages have you been revising averagely in a day")
if (question5 <= 14 ) {
    var answer5 = (question5 * 100) / minorquestion5; 
    document.getElementById("answerDisplay5").innerText = "The answer for number 4 is " + answer5;
    document.getElementById("answerDisplay5").textContent = "The answer for number 4 is " + answer5;
}
else if (question4 > 14 ) {
    document.write("Your input number is more than the numbers of Rawaatib")
}
else {
    document.write("Error.....that's not a valid number")
}  
}


//SIXTHTEST
function testYourself6() {
    alert("Have you started your tilaawatul Qur'an?");
var minorquestion6 = prompt("How many are you planning to read during this Ramadan")
var question6 = prompt("How many pages do you read in a day");
if (question6 <= 14 ) {
    var answer6 = (question6 * 20) / (minorquestion6 * 100); 
    document.getElementById("answerDisplay5").innerText = "The answer for number 4 is " + answer5;
    document.getElementById("answerDisplay5").textContent = "The answer for number 4 is " + answer5;
}
else if (question4 > 14 ) {
    document.write("Your input number is more than the numbers of Rawaatib")
}
else {
    document.write("Error.....that's not a valid number")
}  
}
    document.getElementById("answerDisplay1").innerText = answer1;
    document.getElementById("answerDisplay1").textContent = answer1;
    console.log(Date());
