//using for loop
function factorialFor(n) {
    let factorial = 1;
    for (let i = 1; i <=n; i++) {
       factorial = factorial * i; 
    }
    return factorialFor;
}

console.log(factorial(5));

//using recursive
function factorialRecur(number) {
    if (number==0) {
        return 1;
    } else {
        return number*factorial(number-1);
    }
}

console.log(factorialRecur(8));