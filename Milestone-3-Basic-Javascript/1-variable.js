// print
console.log("print")
console.log(3)

// variable
console.log("\nvariable")
var var_1 = 30;
console.log(var_1)
console.log(typeof var_1)

var var_2 = "AJBrohi";
console.log(var_2)
console.log(typeof var_2)

// use a function
console.log("\nto make all string lowercase")
console.log(var_2.toLowerCase())

var search = "Let me search a word."
console.log("\nto search a string position")
console.log(search.indexOf("search"))

console.log("\nto split according to a string")
console.log(search.split('s'))

var var_3 = '25.35'
var_3= parseInt(var_3)
console.log("\nconvert to int from string")
console.log(var_3)

var var_4 = 43.26
console.log("\n",var_4)
console.log("to set precision")
console.log(var_4.toFixed(1))

var var_5 = -5
console.log("\n",var_5)
console.log("to absolute")
console.log(Math.abs(var_5))


// if-else condition
var var_6 = Math.random() * 100;
if(var_6 < 25){
    console.log("\nvar_6 is less than 25");
}
else if (var_6 < 50){
    console.log("\nvar_6 is less than 50");
}
else{
    console.log("var_6 is greater than 50");
}