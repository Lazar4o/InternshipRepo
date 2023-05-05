function userAgeCalc(birthYear) {
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    let userAge = year - birthYear; 
    if (userAge < 0) {
        console.log("User is still unborn")
        return;
    }
    console.log(userAge);
}
userAgeCalc(2003);
