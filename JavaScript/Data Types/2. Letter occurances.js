function letterOccurance(text, letter) {
    let sentence = text.toLowerCase();
    let counter = 0;
    for (let index = 0; index < sentence.length; index++) {
        const element = sentence[index];
        if (element == letter) {
            counter++;
        }
    }
    console.log(counter);
}
letterOccurance('AAzisASDASDAF', 'a')