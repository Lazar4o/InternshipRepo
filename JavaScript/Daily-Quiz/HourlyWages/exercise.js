function overTime(array){
    let start = Number(array[0]);
    let finish = Number(array[1]);
    let hourlyRate = Number(array[2]);
    let overTimeMultiplier = Number(array[3]);

    let total = 0;
    for (let i = start; i < finish; i++) {
        if (Math.floor(i) != i && i == start) {
            let minutes = 1 - (i - Math.floor(i));
            total += minutes * hourlyRate
        } else if(i < 17) {
            total += 1 * hourlyRate
        } else {
            total += 1 * hourlyRate * overTimeMultiplier
        }
    }
    console.log(`$${(Math.round(total * 100) / 100).toFixed(2)}`);
}
overTime([13.25, 15, 30, 1.5])