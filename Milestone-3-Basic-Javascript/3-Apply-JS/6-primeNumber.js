function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return "Not a Prime Number";
        }
    }
    return "Prime Number";
}

let result = isPrime(57);
console.log(result);