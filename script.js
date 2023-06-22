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

// const calcAverage = (num1,num2,num3) =>{
//     return (num1 + num2 + num3)/3;  
//   } 
  
  
//   let scoreDolphins = calcAverage(85, 54, 41);
//   let scoreKoalas = calcAverage(23, 34, 27);
//   console.log(scoreDolphins, scoreKoalas);
  
  
//   const checkWinner = function(avgDolphins, avgKoalas){
//       if(avgDolphins >= avgKoalas * 2){
//           console.log(`Dolphine win ${scoreDolphins} vs ${scoreKoalas}`);
//       }
//       else if(avgKoalas >= avgDolphins * 2){
//           console.log(`Koala Win ${scoreKoalas} vs ${scoreDolphins}`);
//       }
//       else {
//           console.log(`No one win the Match`);
//       }
//   }
  
//   const score = checkWinner(scoreDolphins, scoreKoalas);
//   console.log(score);
  
//   scoreDolphins = calcAverage(44, 23, 71);
//   scoreKoalas = calcAverage(65, 54, 49);
//   console.log(scoreDolphins, scoreKoalas);

//   const score1 = checkWinner(scoreDolphins, scoreKoalas);
//   console.log(score1); 


// *********************************Coding Challenge #2*************************************************

// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array total containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// const calcTip = function(bills){
//     return bills >= 50 && bills <= 300 ? bills *0.15 : bills * 0.2;
// }

// const bills = [125,555,44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips)

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);