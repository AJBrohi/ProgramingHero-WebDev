function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

const checkLY = isLeapYear(2016);
if (checkLY) {
    console.log("It's a Leap Year!");
} else {
    console.log("It's not a Leap Year!");
}