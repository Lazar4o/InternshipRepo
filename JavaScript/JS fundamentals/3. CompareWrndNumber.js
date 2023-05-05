function pickANumber() {
    let userInput = prompt("Pick a number between 1-10");
    const rndNumber = Math.floor(Math.random() * 10);
    console.log("The random number is " + rndNumber);
    while (userInput != rndNumber) {
        if (userInput > rndNumber) {
          userInput = prompt('Try lower number')
        } else {
          userInput = prompt('Try higher number')
        }
    }
    console.log("Congratulations you guessed it!")
}
pickANumber();
