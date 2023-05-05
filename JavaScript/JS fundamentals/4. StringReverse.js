function reverseString(input) {
    let reversedText = "";
    for (let i = input.length - 1; i >= 0; i--){
        reversedText += input[i];  
    }
    console.log(reversedText);
}
reverseString("sizA");