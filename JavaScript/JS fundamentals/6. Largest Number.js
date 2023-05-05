function largestNum(x, y, z){
    if (x > z && x > y) {
        console.log(x);
    } else if(y > z) {
        console.log(y);
    } else {
        console.log(z);
    }
}
largestNum(1, 1, 9);