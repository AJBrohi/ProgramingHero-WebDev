//code er repo add


//Task 01 - Kilometer to Meter conversion
function kilometerToMeter(km) {
    if (km < 0) {
        return "Distance can't be negative";
    } else {
        return km * 1000;
    }
}

console.log(kilometerToMeter(10), "meter");


//Task 02 - Budget Calculation of 3 Products
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Be positive, don't spread negativity"
    } 
    else {
        return (watch * 50) + (phone * 100) + (laptop * 500);
    }
}

console.log(budgetCalculator(2, 3, 2,),'$');


//Task 03 - Hotel Cost
function hotelCost(days) {
    if (days<0) {
        return "Stay positive."
    } else {
        if (days<=10) { //for first 10 days
            return days*100;
        }
        else if (days<=20) { //after 10days to 20days
            return (1000+(days-10)*80);
        }
        else { //after 20days
            return (1800+(days-20)*50);
        }
    }
}

console.log(hotelCost(24),'$');


//Task 04 - Search for the longest name from an array
function megaFriend(list) {
    let maxLength = 0;
    let maxName = '';
    if (list.length<=0) {
        return 'No name in the list'
    } else {
        for (let index = 0; index < list.length; index++) {
            if (list[index].length > maxLength) {
                maxLength = list[index].length;
                maxName = list[index];
                position = index;
            }
        }
        return [maxName, maxLength, position];
    }
}

const nameList = ['Ronaldo','Messi','Lewandowski','Griezmann','Ramos','Hazard','Zidan']
const x=megaFriend(nameList)
if (nameList.length<=0) {
    console.log(x);
} else {
    console.log("From the name list -",x[0],"has the largest name cosisting",x[1],"letters at position",x[2]);
}