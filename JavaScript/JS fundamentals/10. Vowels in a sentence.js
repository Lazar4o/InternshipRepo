function countVowels(input){
    let sentence = input.toUpperCase();
    let counter = 0;
    for (let index = 0; index < sentence.length; index++) {
        switch (sentence[index]) {
            case 'A':
                counter++;
                break;
            case 'E':
                counter++;
                break;
            case 'I':
                counter++;
                break;
            case 'O':
                counter++;
                break;
            case 'U':
                counter++;
                break;
            case 'Y':
                    counter++;
                break;    
            default:
                break;
        }
        
    }
    console.log(`The sentence: ${input} - has ${counter} vowels!`)
}
countVowels("This is awesome!")