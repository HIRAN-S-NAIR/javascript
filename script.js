// Create a program that asks the user for two numbers and prints their sum.//

let x = 10
let y = 50
sum = x + y
console.log('sum', sum);

// Implement a program that calculates the area of a rectangle using given length and width.//

let length = 10
let width = 30
area = length * width
console.log('area', area);

// Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18)//

let age = 18
if (age >= 18) {
    console.log('Eligible To Vote');
}
else {
    console.log('Not Eligible to vote');
}

// Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above).//

let mark = 59
let grade = mark >= 60 ? 'Passed' : 'Failed'
console.log(grade);

// Implement a program that checks if a user's entered number is positive, negative, or zero.//

let num = 0
if (num > 0) {
    console.log('Number= Positive')
}
else if (num < 0) {
    console.log('Number= Negative')
}
else {
    console.log('Number= Zero');
}

// Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).//

let a = 60
if (a <= 12) {
    console.log('Child')
}
else if (a <= 19) {
    console.log('Teen')
}
else if (a <= 59) {
    console.log('Adult');
}
else {
    console.log('Old Age');
}

// find the square of each number in an array=[1,3,9,12,15,18,21] using loop//

// let numbers = [1,3,4,5,6,7,8,9]
// for (let numb of numbers) {
// console.log(numb**2 )
// }


// Write a program to find the sum of all the odd numbers for a given limit
// (if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 ) //

let l =5
let s=0
for (let i = 1; i <= l; i++) {
    if(i%2==1){
       s=s+i
    } 
}
console.log(s);
