//using for loop
function fiboFor(n) {
    let fibo = [0,1];
    for (let index = 2; index < n; index++) {
        fibo[index] = fibo[index-1]+fibo[index-2];
    }
    return fibo;
}

console.log(fiboFor(5));

//using recursion
function fiboRecur(n) {
    if (n == 0) {
        return [0];
    } 
    else if(n == 1) {
        return [0,1];
    }
    else{
        let fibo = fiboRecur(n-1);
        let nextEli = fibo[n-1] + fibo[n-2]
        fibo.push(nextEli);
        return fibo;
    }
}

console.log(fiboRecur(8));