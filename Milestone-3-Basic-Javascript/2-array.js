// initialize array
var prices = [17, 54, 92, 12, 67, 23, 45];
console.log("this is an array\n");
console.log(prices);

// print a index of array
console.log("\nprinting 0th index of array");
console.log(prices[0]);

// search for a index of an element
console.log("\nindex of 92");
console.log(prices.indexOf(92));

// update an index of array
prices[2] = 234;
console.log("\nupdate an index of array");
console.log(prices);

// length of array
console.log("\nlength of array");
console.log(prices.length)

// push element in array
prices.push(20);
console.log("\npush 20 in array");
console.log(prices);

// pop last element of array
console.log("\npop last element of array");
prices.pop()
console.log(prices)

//pop first element of array
console.log("\npop first element of array");
prices.shift()
console.log(prices)

//push to first index of array
console.log("\npush to first index of array");
prices.unshift(17)
console.log(prices)

//slice an array
console.log("\nslice an array");
var slicedPrices = prices.slice(2, 5)
console.log(slicedPrices)

//while loop
console.log("\nwhile loop");
var number = 0;
while (number <= 15) {
    console.log(number);
    number += 5;
}

//for loop
console.log("\nfor loop");
for (var i = 0; i <= 15; i += 5) {
    console.log(i);
}

//switch-case
console.log("\nswitch-case");
var number = 36;
switch (number) {
    case number < 50:
        console.log("This is less than 50");
        break;
    case (number > 50):
        console.log("This is greater than 50");
        break;
    default:
        console.log("This is for nothing");
        break;
}

//function
console.log("\nuse of function");
function doubleIt(num) {
    return num*2;
}

console.log(doubleIt(5));;

//objects
//define objects
var student1={name:"AJBrohi", phone:1521, id:1710}
var student2={name:"Brohi", phone:1955, id:1438}

//print a property of an object
console.log("\nprint a property of an object");
console.log(student1.phone);
console.log(student2["phone"]);

//update value of property
student1.id = 1810;
student2.id = 1538;
console.log("\nupdate a property of an object");
console.log(student1.id);
console.log(student2["id"]);
