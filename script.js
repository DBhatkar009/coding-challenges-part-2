// 1.Javascript fundamentals - part 2


// *********************************Coding Challenge #1*************************************************
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores �

// Ans:-

// **Code Logic 1 --here i self adding number and then divided by 3;

// const calcAverageDol = (avgDolhins) => {
//     return (avgDolhins)/3;
// }  

// const calcAverageKoal = (avgKoalas) => {
//   return (avgKoalas)/3;
// } 

// function checkWinner(avgDolhins, avgKoalas) {
//   const dolphin = calcAverageDol(avgDolhins);
//   const koala = calcAverageKoal(avgKoalas);
//   const score = `Score Dolphine ${dolphin} and Score Koala ${koala}`;
//   if (dolphin >= 2 * koala) {
//     console.log(`Dolhphine Win the Match with ${dolphin} this score 🏆`);
//   }
//   else if (koala >= 2 * dolphin) {
//     console.log(`Koala win the Match with ${koala} this score 🏆`);
//   }
//   else {
//     console.log(`drew the match both team win 🏆`);
//   }

//   return score;
// }

// const data1 = checkWinner(180, 84);
// console.log(data1);

// const data2 = checkWinner(138, 168);
// console.log(data2);


// **Code Logic 2 I am not Adding Self Number here that code doing Adding Numbers and Divided by 3;

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// const calcAverage = (num1,num2,num3) => {
//   return (num1+num2+num3)/3;
// }

// let scoreDolphine = calcAverage(85,54,41);
// console.log(scoreDolphine);

// let scoreKoala = calcAverage(23,34,27);
// console.log(scoreKoala);

// const checkWinner = function(avgDolhins, avgKoalas){
//    if(avgDolhins>= avgKoalas * 2){
//     return`Dolphine win the match ${scoreDolphine} vs ${scoreKoala} `;
//    }
//    else if(avgKoalas >= avgDolhins * 2){
//     return`Koala win the match ${scoreDolphine} vs ${scoreKoala}`;
//    }
//    else{
//     return`Both teams are win 🏆`;
//    }
// }


// let score = checkWinner(scoreDolphine, scoreKoala);
// console.log(score);

// scoreDolphine = calcAverage(44,23,71);
// scoreKoala = calcAverage(65,54,49);

// score = checkWinner(scoreDolphine, scoreKoala);
// console.log(score);

