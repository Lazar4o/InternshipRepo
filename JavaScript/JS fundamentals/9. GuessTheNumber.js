let userInput = prompt("Pick a number between 1-100");
const randomNumber = Math.floor(Math.random() * 100);
console.log("The random number is " + randomNumber);
let counter = 1;
while (userInput != randomNumber && counter < 10) {
    if (userInput > randomNumber) {
        userInput = prompt("Try lower number")
        counter++;
    } else {
        userInput = prompt('Try higher number')
        counter++;
    }
}
if (counter == 10) {
    console.log("Ding dong you are wrong.You didn't guess the number. No more tries!")
} else{
console.log("Congratulations! You guessed the number!!")
}
